import React from 'react';
import { ListRenderItem } from 'react-native';
export declare type ASListViewProps = {
    data: any[];
    renderItem: ListRenderItem<React.ReactNode>;
};
declare const ASListView: React.FC<ASListViewProps>;
export default ASListView;
