import { Dimensions } from 'react-native';
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var convertPercentageToPx = function (percentage, isWidth) {
    if (!percentage) {
        return undefined;
    }
    if (typeof percentage === 'number') {
        return percentage;
    }
    if (typeof percentage === 'string') {
        percentage === null || percentage === void 0 ? void 0 : percentage.replace('%', '');
        return ((parseInt(percentage, 10)) / 100) * (isWidth ? screenWidth : screenHeight);
    }
};
export { screenWidth, screenHeight, convertPercentageToPx };
