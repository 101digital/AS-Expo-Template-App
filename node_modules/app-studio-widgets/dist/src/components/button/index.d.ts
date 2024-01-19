import React from 'react';
import { TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
export declare type ASButtonProps = TouchableOpacityProps & {
    label?: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    children?: React.ReactNode;
    simpleTextButton?: boolean;
    touchableContainer?: boolean;
};
declare const ASButton: React.FC<ASButtonProps>;
export default ASButton;
