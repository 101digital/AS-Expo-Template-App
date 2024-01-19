import React from 'react';
import {DimensionValue, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import {colors} from "../../utils/colors";

export type ASDividerProps = {
    style?: StyleProp<ViewStyle>;
    marginVertical?: DimensionValue
    width?: DimensionValue
}

const ASDivider: React.FC<ASDividerProps> = (props: ASDividerProps) => {
    const {style, marginVertical = 10, width = '100%'} = props || {}

    return (
        <View style={[styles.dividerStyle, {marginVertical, width}, style]}/>
    )
}

const styles = StyleSheet.create({
    dividerStyle: {
        backgroundColor: colors.black50,
        height: 1,
    },
});

export default ASDivider
