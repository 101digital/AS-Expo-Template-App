import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from "../../utils/colors";
var ASVerticalDivider = function (props) {
    var _a = props || {}, style = _a.style, _b = _a.marginHorizontal, marginHorizontal = _b === void 0 ? 10 : _b, _c = _a.height, height = _c === void 0 ? '100%' : _c;
    return (React.createElement(View, { style: [styles.verticalDividerStyle, { marginHorizontal: marginHorizontal, height: height }, style] }));
};
var styles = StyleSheet.create({
    verticalDividerStyle: {
        backgroundColor: colors.black50,
        width: 1,
    },
});
export default ASVerticalDivider;
