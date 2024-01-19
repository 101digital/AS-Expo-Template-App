import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
export declare type ASExpandableTextProps = {
    initialLines: number;
    text: string;
    textStyle?: StyleProp<TextStyle>;
    readMoreTextStyles?: StyleProp<TextStyle>;
};
declare const ASExpandableText: React.FC<ASExpandableTextProps>;
export default ASExpandableText;
