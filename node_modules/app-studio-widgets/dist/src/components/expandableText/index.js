import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from "../../utils/colors";
import ASText from "../text";
var ASExpandableText = function (props) {
    var _a = props.initialLines, initialLines = _a === void 0 ? 1 : _a, text = props.text, textStyle = props.textStyle, readMoreTextStyles = props.readMoreTextStyles;
    var _b = React.useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var toggleExpansion = function () {
        setIsExpanded(!isExpanded);
    };
    return (React.createElement(View, null,
        React.createElement(ASText, { numberOfLines: isExpanded ? undefined : initialLines, style: [styles.textStyle, textStyle] }, text),
        text.length > initialLines && (React.createElement(TouchableOpacity, { onPress: toggleExpansion },
            React.createElement(ASText, { style: [styles.readMoreTextStyle, readMoreTextStyles] }, isExpanded ? 'Read less' : 'Read more')))));
};
var styles = StyleSheet.create({
    textStyle: {
        color: colors.black,
    },
    readMoreTextStyle: {
        color: colors.gray400,
        fontSize: 12
    }
});
export default ASExpandableText;
// NOTE:  ASExpandableText Example
/*
         <ASExpandableText initialLines={1}
                           text={'Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum '}/>

* */
