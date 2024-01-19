import React from 'react';
import { StyleSheet, View } from 'react-native';
import { convertPercentageToPx } from "../../utils/commonUtils";
var ASSpacer = function (props) {
    var _a = props || {}, style = _a.style, width = _a.width, height = _a.height;
    // ASSpacer must use number instead of string percentage ("50%") that will cause scroll view unable to scroll
    var heightValue = convertPercentageToPx(height, false);
    var widthValue = convertPercentageToPx(width, true);
    return (React.createElement(View, { style: [styles.spacerStyle, { width: widthValue, height: heightValue }, style] }));
};
var styles = StyleSheet.create({
    spacerStyle: {
        width: 10,
        height: 10
    },
});
export default ASSpacer;
