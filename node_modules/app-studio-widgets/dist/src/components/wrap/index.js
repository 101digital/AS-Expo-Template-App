import React from 'react';
import { StyleSheet, View } from 'react-native';
var ASWrap = function (props) {
    var children = props.children, _a = props.direction, direction = _a === void 0 ? 'row' : _a, style = props.style, itemMargin = props.itemMargin;
    return (React.createElement(View, { style: [styles.container, { flexDirection: direction }, style] }, !!itemMargin ? React.Children.map(children, function (child, index) { return (React.createElement(View, { key: index, style: [styles.item, { margin: itemMargin || 5 }] }, child)); }) : children));
};
var styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        margin: 5,
    },
});
export default ASWrap;
// NOTE:  ASWrapper Example
/*
                <ASWrapper direction="column" style={{ backgroundColor: 'blue', maxHeight:50 }}>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                </ASWrapper>

                <ASWrapper direction="row" style={{ backgroundColor: 'darkgreen' }}>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                </ASWrapper>
* */
