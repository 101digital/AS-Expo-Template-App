import React from 'react';
import { StyleSheet, View } from 'react-native';
import { screenWidth } from "../../utils/commonUtils";
import { colors } from "../../utils/colors";
import ASText from "../text";
var ASProgressBar = function (props) {
    var _a = props.progressBarTitle, progressBarTitle = _a === void 0 ? '' : _a, progressValue = props.progressValue;
    return (React.createElement(View, { style: styles.progressBarContainer },
        React.createElement(ASText, { style: styles.progressBarText }, progressBarTitle),
        React.createElement(View, { style: styles.progressBar },
            React.createElement(View, { style: [
                    styles.progressCurrent,
                    { width: "".concat(progressValue / 100 * 100, "%") },
                ] }))));
};
var styles = StyleSheet.create({
    progressBarContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressBarText: {
        fontSize: 16,
        paddingBottom: 4,
        fontWeight: '600',
        lineHeight: 20
    },
    progressBar: {
        backgroundColor: colors.offWhite,
        height: 5,
        borderRadius: 16,
        width: screenWidth / 1.8,
        minWidth: 180,
        marginTop: 5
    },
    progressCurrent: {
        backgroundColor: '#00BA88',
        height: 5,
        borderRadius: 16,
    },
    progressSection: {
        marginBottom: 16,
    },
});
export default ASProgressBar;
