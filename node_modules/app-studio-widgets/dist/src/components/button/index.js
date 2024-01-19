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
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from "../../utils/colors";
import ASText from "../text";
var ASButton = function (props) {
    var _a = props.label, label = _a === void 0 ? '' : _a, style = props.style, textStyle = props.textStyle, onPress = props.onPress, disabled = props.disabled, children = props.children, simpleTextButton = props.simpleTextButton, restProps = __rest(props, ["label", "style", "textStyle", "onPress", "disabled", "children", "simpleTextButton"]);
    var getButtonBackgroundColor = function () {
        if (disabled) {
            return colors.gray80;
        }
        if (style === null || style === void 0 ? void 0 : style.backgroundColor) {
            return style === null || style === void 0 ? void 0 : style.backgroundColor;
        }
        if (simpleTextButton || !!children) {
            return 'transparent';
        }
        return colors.primaryHifiColor;
    };
    var getButtonTextBackgroundColor = function () {
        if (disabled) {
            return colors.black500;
        }
        if (textStyle === null || textStyle === void 0 ? void 0 : textStyle.color) {
            return textStyle === null || textStyle === void 0 ? void 0 : textStyle.color;
        }
        if (simpleTextButton) {
            return colors.black700;
        }
        return colors.white;
    };
    var getButtonStyle = function () {
        if (simpleTextButton)
            return styles.simpleTextButton;
        if (!!children)
            return styles.touchableContainerStyles;
        return styles.buttonStyle;
    };
    var getButtonTextStyle = function () {
        if (simpleTextButton)
            return styles.simpleTextButtonTextStyle;
        return styles.textStyle;
    };
    return (React.createElement(TouchableOpacity, __assign({}, restProps, { disabled: disabled, onPress: onPress, style: [getButtonStyle(), style, { backgroundColor: getButtonBackgroundColor() }] }), !!children ?
        children
        : React.createElement(ASText, { style: [getButtonTextStyle(), textStyle, { color: getButtonTextBackgroundColor() }] }, label)));
};
var styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8
    },
    simpleTextButton: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    touchableContainerStyles: {},
    textStyle: {},
    simpleTextButtonTextStyle: {
        fontSize: 12
    }
});
export default ASButton;
