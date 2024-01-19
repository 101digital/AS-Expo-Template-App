import React from 'react';
import {DimensionValue, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import {colors} from "../../utils/colors";

export type ASVerticalDividerProps = {
    style?: StyleProp<ViewStyle>;
    marginHorizontal?: DimensionValue
    height?: DimensionValue
}

const ASVerticalDivider: React.FC<ASVerticalDividerProps> = (props: ASVerticalDividerProps) => {
    const {style, marginHorizontal = 10, height = '100%'} = props || {}

    return (
        <View style={[styles.verticalDividerStyle, {marginHorizontal, height}, style]}/>
    )
}

const styles = StyleSheet.create({
    verticalDividerStyle: {
        backgroundColor: colors.black50,
        width: 1,
    },
});

export default ASVerticalDivider
