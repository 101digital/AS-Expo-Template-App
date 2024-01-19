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
import { Switch } from 'react-native';
import { colors } from "../../utils/colors";
var ASSwitch = function (props) {
    var _a = props.enableThumbColor, enableThumbColor = _a === void 0 ? colors.offWhite : _a, _b = props.disabledThumbColor, disabledThumbColor = _b === void 0 ? colors.offWhite : _b, onChange = props.onChange, restProps = __rest(props, ["enableThumbColor", "disabledThumbColor", "onChange"]);
    var _c = useState(false), isEnabled = _c[0], setIsEnabled = _c[1];
    var toggleSwitch = function () {
        setIsEnabled(function (previousState) {
            onChange === null || onChange === void 0 ? void 0 : onChange(!previousState);
            return !previousState;
        });
    };
    return (React.createElement(Switch, __assign({ trackColor: { false: colors.gray400, true: colors.green }, ios_backgroundColor: colors.black500, onValueChange: toggleSwitch, value: isEnabled, thumbColor: isEnabled ? enableThumbColor : disabledThumbColor }, restProps)));
};
export default ASSwitch;
