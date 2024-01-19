import React from 'react';
import {FlatList, StyleSheet,ListRenderItem} from 'react-native';

export type ASListViewProps = {
    data: any[]
    renderItem: ListRenderItem<React.ReactNode>
}

const ASListView: React.FC<ASListViewProps> = (props: ASListViewProps) => {
    const {
        data,
        renderItem
    } = props;

    const keyExtractor = (item: any, index: number) => {
        return `${item.id || item.name || item.label || ''} - ${index}`
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default ASListView;
