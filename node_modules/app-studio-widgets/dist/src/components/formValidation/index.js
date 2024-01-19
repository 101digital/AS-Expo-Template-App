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
import { View } from 'react-native';
import { Formik } from 'formik';
var ASFormValidation = function (props) {
    var _a = props || {}, children = _a.children, onSubmit = _a.onSubmit, initialValues = _a.initialValues, validationSchema = _a.validationSchema, restProps = __rest(_a, ["children", "onSubmit", "initialValues", "validationSchema"]);
    return (React.createElement(Formik, __assign({}, restProps, { initialValues: initialValues, validationSchema: validationSchema, onSubmit: onSubmit }), function (formikProps) {
        return (React.createElement(View, null, children(formikProps)));
    }));
};
export default ASFormValidation;
