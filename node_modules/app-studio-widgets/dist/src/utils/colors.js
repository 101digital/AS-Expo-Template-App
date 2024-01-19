export var colors = {
    alertSubtitle: '#4D4D4D',
    offWhite: '#FCFCFC',
    btnColor: '#1B1B1B',
    inputColor: '#858585',
    inputTextColor: '#1A1A1A',
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
    mainBackgroundColor: '#F5F5F5',
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
    grayScale: '#14142B',
    secondary: '#14BDEB',
    lightGrayD: '#DDDDDD',
    primaryText: '#1D1C1D',
    primaryHifiColor: '#EF24B8',
    emergencyCollectionColor: '#EF80A3',
    vihicleCollectionColor: '#F09F42',
    housecollectionColor: '#9A92E6',
    travelcollectionColor: '#FF81E0',
    lightWhite: '#F5F5F5',
    gray400: '#999999',
    black900: '#010101',
    black800: '#1A1A1A',
    black700: '#343434',
    black500: '#666666',
    disabledButton: '#999999',
    backgroundColor: '#DEDEDE',
    deepBackgroundColor: '#C5C5C5',
    lightWhite2: '#F8F8F8',
    errorColor: '#EF4444',
    superlighterPrimaryColor: '#f0bae5',
    neutral: '#F0F0F0',
    primayEternalBloom200: '#FFBAF0',
    green: '#00BA88'
};
export var rgbToHex = function (color) {
    var a = color.replace(/[^\d,]/g, '').split(',');
    return '#' + ((1 << 24) + (+a[0] << 16) + (+a[1] << 8) + +a[2]).toString(16).slice(1);
};
export var addAlpha = function (color, opacity) {
    var _a;
    if (!color.startsWith('#')) {
        color = rgbToHex(color);
    }
    var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + ((_a = _opacity.toString(16)) === null || _a === void 0 ? void 0 : _a.toUpperCase());
};
