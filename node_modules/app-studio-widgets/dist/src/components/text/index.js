var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from "../../utils/colors";
var ASText = function (props) {
    var _a = props || {}, children = _a.children, style = _a.style, restProps = __rest(_a, ["children", "style"]);
    return (React.createElement(Text, __assign({}, restProps, { style: [styles.textStyle, style] }), children));
};
var styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
        color: colors.black,
    },
});
export default ASText;
