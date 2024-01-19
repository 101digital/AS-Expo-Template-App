import React from 'react';
import { StyleSheet, View } from 'react-native';
var ASColumn = function (props) {
    var _a = props || {}, children = _a.children, style = _a.style;
    return (React.createElement(View, { style: [styles.container, style] }, children));
};
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
});
export default ASColumn;
