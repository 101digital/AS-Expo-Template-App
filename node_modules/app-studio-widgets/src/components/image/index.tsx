import React from 'react';
import {DimensionValue, Image, ImageStyle, StyleProp} from 'react-native';
import {convertPercentageToPx} from '../../utils/commonUtils';

export type ASImageProps = {
    source: any //ImageSourcePropType | string ;
    style?: StyleProp<ImageStyle>;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    height?: DimensionValue
    width?: DimensionValue
    roundImageSize?: string | number
}

const ASImage: React.FC<ASImageProps> = (props: ASImageProps) => {
    const {source, width = 100, height = 100, style, resizeMode = 'cover', roundImageSize = 0, ...otherProps} = props
    const imageSource = typeof source === 'string' && source?.startsWith('http') ? {uri: source} : source
    const roundImageSizeValue = convertPercentageToPx(roundImageSize, true)

    return (
        <Image
            source={imageSource}
            style={[{
                width: roundImageSizeValue || width,
                height: roundImageSizeValue || height,
                borderRadius: roundImageSizeValue
            }, style]} // Default to full width and height
            resizeMode={resizeMode} // Default to 'cover'
            {...otherProps}
        />
    );
};

export default ASImage;

/*
                        <ASImage source={'https:i.imgur.com/oLgjoWx.png'} style={{width: '35%', height: '20%'}}
                         resizeMode={'contain'}/>
* */
