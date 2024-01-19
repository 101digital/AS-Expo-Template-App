import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from "../../utils/colors";
var ASDivider = function (props) {
    var _a = props || {}, style = _a.style, _b = _a.marginVertical, marginVertical = _b === void 0 ? 10 : _b, _c = _a.width, width = _c === void 0 ? '100%' : _c;
    return (React.createElement(View, { style: [styles.dividerStyle, { marginVertical: marginVertical, width: width }, style] }));
};
var styles = StyleSheet.create({
    dividerStyle: {
        backgroundColor: colors.black50,
        height: 1,
    },
});
export default ASDivider;
