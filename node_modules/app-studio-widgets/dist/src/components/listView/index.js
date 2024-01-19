import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
var ASListView = function (props) {
    var data = props.data, renderItem = props.renderItem;
    var keyExtractor = function (item, index) {
        return "".concat(item.id || item.name || item.label || '', " - ").concat(index);
    };
    return (React.createElement(FlatList, { data: data, renderItem: renderItem, keyExtractor: keyExtractor }));
};
var styles = StyleSheet.create({
    container: {}
});
export default ASListView;
