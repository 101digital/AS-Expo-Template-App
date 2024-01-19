import { ThemeContext } from './../theme-context/context';
import { useContext } from 'react';
import { find } from 'lodash';
import currency from 'currency.js';
import { MaskService } from 'react-native-masked-text';

export enum CurrencyDisplay {
  Symbol = 'symbol',
  Code = 'code',
  Name = 'name',
}

export const formatCurrency = (
  currencies: any[],
  amount: number,
  currencyCode: string,
  currencyDisplay: string = CurrencyDisplay.Symbol,
  showSymbol: boolean = true,
  precision?: number
) => {
  const formatter = find(
    currencies,
    (item) => item.code === currencyCode || item.isoCode === currencyCode
  ) ?? {
    name: 'United States Dollar-Default',
    code: 'USD',
    symbol: '$',
    decimals: 2,
    displaySymbol: '$',
    displayFormat: '#,###.##',
    displaySymbolFirst: true,
    isoCode: '840',
    displaySpace: 0,
  };
  const displayFormat = formatter.displayFormat;
  const separator = displayFormat.charAt(1);
  const decimal = displayFormat.charAt(displayFormat.length - formatter.decimals - 1);
  let pattern = formatter.displaySymbolFirst ? '! #' : '# !';
  if (formatter.displaySpace === 0) {
    pattern = pattern.replace(' ', '');
  }
  let symbol;
  if (showSymbol) {
    symbol = currencyDisplay === CurrencyDisplay.Symbol ? formatter.displaySymbol : currencyCode;
  } else {
    symbol = '';
  }
  return currency(amount, {
    symbol: symbol,
    pattern: pattern,
    negativePattern: `-${pattern}`,
    decimal: decimal,
    separator: separator,
    precision: precision ?? formatter.decimals,
  }).format();
};

export const useCurrencyFormat = (
  amount: number,
  currencyCode: string,
  currencyDisplay: string = CurrencyDisplay.Symbol,
  showSymbol: boolean = true,
  precision?: number
) => {
  const { currencies } = useContext(ThemeContext);
  const formatter = find(
    currencies,
    (item) => item.code === currencyCode || item.isoCode === currencyCode
  ) ?? {
    name: 'United States Dollar-Default',
    code: 'USD',
    symbol: '$',
    decimals: 2,
    displaySymbol: '$',
    displayFormat: '#,###.##',
    displaySymbolFirst: true,
    isoCode: '840',
    displaySpace: 0,
  };
  const displayFormat = formatter.displayFormat;
  const separator = displayFormat.charAt(1);
  const decimal = displayFormat.charAt(displayFormat.length - formatter.decimals - 1);
  let pattern = formatter.displaySymbolFirst ? '! #' : '# !';
  if (formatter.displaySpace === 0) {
    pattern = pattern.replace(' ', '');
  }
  let symbol;
  if (showSymbol) {
    symbol = currencyDisplay === CurrencyDisplay.Symbol ? formatter.displaySymbol : currencyCode;
  } else {
    symbol = '';
  }
  return currency(amount, {
    symbol: symbol,
    pattern: pattern,
    negativePattern: `-${pattern}`,
    decimal: decimal,
    separator: separator,
    precision: precision ?? formatter.decimals,
  }).format();
};

export const getAmountRawValue = (maskedValue: string, options?: any): number => {
  var money = MaskService.toRawValue(
    'money',
    maskedValue,
    options ?? {
      precision: 0,
      separator: '.',
      delimiter: ',',
      mask: '999',
      unit: '$',
    }
  );
  return parseFloat(money);
};

export const useCurrencyOption = (
  currencyCode: string,
  usePrecision: boolean = true,
  showUnit: boolean = true
) => {
  const { currencies } = useContext(ThemeContext);
  const formatter = find(
    currencies,
    (item) => item.code === currencyCode || item.isoCode === currencyCode
  ) ?? {
    name: 'United States Dollar-Default',
    code: 'USD',
    symbol: '$',
    decimals: 2,
    displaySymbol: '$',
    displayFormat: '#,###.##',
    displaySymbolFirst: true,
    isoCode: '840',
    displaySpace: 0,
  };
  const displayFormat = formatter.displayFormat;
  const separator = displayFormat.charAt(1);
  const decimal = displayFormat.charAt(displayFormat.length - formatter.decimals - 1);
  const unit =
    formatter.displaySpace === 0 ? formatter.displaySymbol : `${formatter.displaySymbol} `;
  return {
    precision: usePrecision ? formatter.decimals : 0,
    separator: decimal,
    delimiter: separator,
    mask: '999',
    unit: showUnit ? unit : '',
  };
};

function formatNumber(n: string) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const useADBCurrencyFormat = (input_val: string, blur = '') => {
  // check for decimal
  if (input_val.indexOf('.') >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf('.');

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);

    // On blur make sure 2 numbers after decimal
    if (blur === 'blur') {
      right_side += '00';
    }

    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = left_side + '.' + right_side;
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);

    // final formatting
    if (blur === 'blur') {
      input_val += '.00';
    }
  }

  return {
    currencyFormated: input_val,
  };
};
