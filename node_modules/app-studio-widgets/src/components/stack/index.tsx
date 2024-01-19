import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

export type ASStackProps= {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>
}

const ASStack: React.FC<ASStackProps> = (props: ASStackProps) => {
    const {children, style} = props
    return <View style={[style, styles.container]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
});

export default ASStack;

// NOTE:  ASStack Example
/*
            <ASStack>
                <ASImage style={{top:5}}  source={'https:i.imgur.com/oLgjoWx.png'}   roundImageSize={'30%'}   />
                 <ASText style={{bottom:20}}>Text on top</ASText>
            </ASStack>
* */
