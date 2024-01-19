import React from 'react';
import { StyleSheet, View } from 'react-native';
var ASRow = function (props) {
    var _a = props || {}, children = _a.children, style = _a.style;
    return (React.createElement(View, { style: [styles.container, style] }, children));
};
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});
export default ASRow;
// Note: ASRow Example
/*
                <ASRow>
                    <ASText style={{textAlign: 'center'}}>Welcome to App Studio</ASText>
                    <ASVerticalDivider/>
                    <ASText style={{color: 'red'}}>Testing component</ASText>
                </ASRow>
* */
