import React from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';
export declare type ASTextProps = TextProps & {
    children: string | undefined | number | React.ReactNode;
    style?: StyleProp<TextStyle>;
};
declare const ASText: React.FC<ASTextProps>;
export default ASText;
