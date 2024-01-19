export type ThemeColorProps = {
  primaryColor?: string;
  secondaryColor?: string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  backgroundTextColor?: string;
  errorTextColor?: string;
  primaryButtonColor?: string;
  secondaryButtonColor?: string;
  primaryButtonLabelColor?: string;
  secondaryButtonLabelColor?: string;
  mainBackgroundColor?: string;
  secondaryBackgroundColor?: string;
  dividerColor?: string;
  appBarBackgroundColor?: string;
  appBarTextColor?: string;
  loadingIndicatorColor?: string;
  inActiveInputBorderColor?: string;
  activeInputBorderColor?: string;
  errorInputBorderColor?: string;
  backgroundSearchInput?: string;
  placeholderColor?: string;
  btnColor?: string;
  inputColor?: string;
  disable?: string;
  icon?: string;
  red?: string;
  disableTransparent?: string;
  headerTitleColor?: string;
  black?: string;
  white?: string;
  gray80?: string;
  lightShadeOfGray?: string;
  lightShadeOfBlue? : string;
  primaryBlackColor?: string,
  black0?: string;
  black50?: string;
  grayScale?: string;
};
export const defaultColors: ThemeColorProps = {
  btnColor: '#1B1B1B',
  inputColor: '#858585',
  disable: '#1B1B1B',
  icon: '#1b1b1b30',
  red: '#FF0000',
  disableTransparent: '#1b1b1b20',
  headerTitleColor: '#3E2D68',
  primaryColor: '#0073F0',
  secondaryColor: '#0073F0',
  primaryTextColor: '#0C3F79',
  secondaryTextColor: '#0C3F79',
  backgroundTextColor: '#FFFFFF',
  errorTextColor: '#D32F2F',
  primaryButtonColor: '#0073F0',
  secondaryButtonColor: '#FFFFFF',
  primaryButtonLabelColor: '#FFFFFF',
  secondaryButtonLabelColor: '#0073F0',
  mainBackgroundColor: '#FFFFFF',
  secondaryBackgroundColor: '#F7F9FB',
  dividerColor: '#E2E2E2',
  appBarBackgroundColor: '#FFFFFF',
  appBarTextColor: '#0C3F79',
  loadingIndicatorColor: '#0073F0',
  activeInputBorderColor: '#0073F0',
  errorInputBorderColor: '#D32F2F',
  inActiveInputBorderColor: '#E6E6E6',
  backgroundSearchInput: '#F1F6FC',
  placeholderColor: '#BAB7BB',
  black: '#000000',
  gray80: '#CCCCCC',
  white: '#FFFFFF',
  lightShadeOfGray: '#F9F9F9',
  lightShadeOfBlue: '#EAEAEB',
  primaryBlackColor: '#1B1B1B',
  black0: '#00000000',
  black50: '#00000080',
  grayScale: '#14142B'
};
export const rgbToHex = (color: string) => {
  const a = color.replace(/[^\d,]/g, '').split(',');
  return '#' + ((1 << 24) + (+a[0] << 16) + (+a[1] << 8) + +a[2]).toString(16).slice(1);
};
export const addAlpha = (color: string, opacity: number) => {
  if (!color.startsWith('#')) {
    color = rgbToHex(color);
  }
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16)?.toUpperCase();
};
