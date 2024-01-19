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
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import ASText from "../text";
import { colors } from "../../utils/colors";
import { useField } from "formik";
var ASDropDown = forwardRef(function (props, ref) {
    var data = props.data, renderLeftIcon = props.renderLeftIcon, _a = props.placeholder, placeholder = _a === void 0 ? "Please select item" : _a, onSelect = props.onSelect, _b = props.searchPlaceholder, searchPlaceholder = _b === void 0 ? 'Search...' : _b, _c = props.search, search = _c === void 0 ? false : _c, label = props.label, _d = props.name, name = _d === void 0 ? '' : _d, restProps = __rest(props, ["data", "renderLeftIcon", "placeholder", "onSelect", "searchPlaceholder", "search", "label", "name"]);
    var _e = useState(null), value = _e[0], setValue = _e[1];
    var _f = useField(name), field = _f[0], meta = _f[1], helpers = _f[2];
    var renderItem = function (item) {
        return (React.createElement(View, { style: styles.item },
            React.createElement(Text, { style: styles.textItem }, item.label)));
    };
    // Note: Now use useField from formik, we dont change value using state anymore
    // This component must be inside Formik component
    var onChangeItem = function (item) {
        if (typeof item === 'string') {
            data.find(function (i) {
                if (i.value === item || i.label === item) {
                    onSelect === null || onSelect === void 0 ? void 0 : onSelect(i);
                    setValue(i === null || i === void 0 ? void 0 : i.value);
                }
            });
        }
        else {
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(item);
            setValue(item === null || item === void 0 ? void 0 : item.value);
        }
    };
    // Note: Now use useField from formik, we dont change value using state anymore
    // This component must be inside Formik component
    useImperativeHandle(ref, function () { return ({
        onChangeItem: onChangeItem
    }); });
    var onChangeDropDownField = function (item) {
        field === null || field === void 0 ? void 0 : field.onChange(name);
    };
    return (React.createElement(View, { style: {
            backgroundColor: colors.offWhite, borderRadius: 5, paddingTop: 5
        } },
        React.createElement(ASText, { style: styles.labelStyle }, label),
        React.createElement(Dropdown, __assign({ style: styles.dropdown, placeholderStyle: styles.placeholderStyle, selectedTextStyle: styles.selectedTextStyle, inputSearchStyle: styles.inputSearchStyle, iconStyle: styles.iconStyle, data: data, search: search, maxHeight: 300, value: "".concat(field === null || field === void 0 ? void 0 : field.value), searchPlaceholder: searchPlaceholder, renderLeftIcon: renderLeftIcon, renderItem: renderItem, placeholder: placeholder }, restProps, { onChange: onChangeDropDownField, labelField: "label", valueField: "value" }))));
});
export default ASDropDown;
var styles = StyleSheet.create({
    dropdown: {
        marginVertical: 0,
        borderRadius: 5,
    },
    item: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 12,
        color: colors.black700,
    },
    placeholderStyle: {
        fontSize: 12,
        paddingHorizontal: 15,
    },
    selectedTextStyle: {
        fontSize: 12,
        color: colors.black700,
        paddingHorizontal: 15,
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginRight: 15
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 12,
    },
    labelStyle: {
        fontSize: 10,
        color: colors.gray400,
        paddingHorizontal: 15
    }
});
// Note: ASDropdown Example
/*
                <ASDropdown
                            name={'employmentSector'}
                            label={'Employment sector'}
                            data={[{label: 'F&B', value: 'f&b'}, {
                                label: 'Financial and Insurance/ Takaful Activities',
                                value: 'Financial and Insurance/ Takaful Activities'
                            }]}/>
* */
