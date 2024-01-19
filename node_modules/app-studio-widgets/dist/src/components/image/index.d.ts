import React from 'react';
import { DimensionValue, ImageStyle, StyleProp } from 'react-native';
export declare type ASImageProps = {
    source: any;
    style?: StyleProp<ImageStyle>;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    height?: DimensionValue;
    width?: DimensionValue;
    roundImageSize?: string | number;
};
declare const ASImage: React.FC<ASImageProps>;
export default ASImage;
