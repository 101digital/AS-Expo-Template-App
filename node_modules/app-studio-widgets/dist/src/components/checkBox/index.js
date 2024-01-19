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
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { colors } from "../../utils/colors";
var ASCheckBox = function (props) {
    var onChange = props.onChange, restProps = __rest(props, ["onChange"]);
    var _a = useState(false), toggleCheckBox = _a[0], setToggleCheckBox = _a[1];
    var onValueChange = function (newValue) {
        setToggleCheckBox(newValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    return (React.createElement(CheckBox, __assign({ disabled: false, value: toggleCheckBox, onValueChange: onValueChange, 
        //IOS Only Props
        tintColor: colors.activeInputBorderColor, lineWidth: 2, 
        //Android Only Props
        tintColors: { true: colors.activeInputBorderColor, false: colors.gray400 } }, restProps)));
};
export default ASCheckBox;
