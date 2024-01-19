import React from 'react';
import { DimensionValue, StyleProp, ViewStyle } from 'react-native';
export declare type ASWrapperDirection = 'row' | 'column';
export declare type ASWrapProps = {
    children: React.ReactNode;
    direction?: ASWrapperDirection;
    style?: StyleProp<ViewStyle>;
    itemMargin?: DimensionValue;
};
declare const ASWrap: React.FC<ASWrapProps>;
export default ASWrap;
