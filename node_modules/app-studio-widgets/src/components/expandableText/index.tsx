import React from 'react';
import {StyleProp, StyleSheet, TextStyle, TouchableOpacity, View} from 'react-native';
import {colors} from "../../utils/colors";
import ASText from "../text";

export type ASExpandableTextProps ={
    initialLines: number;
    text: string;
    textStyle?: StyleProp<TextStyle>;
    readMoreTextStyles?: StyleProp<TextStyle>;
}

const ASExpandableText: React.FC<ASExpandableTextProps> = (props: ASExpandableTextProps) => {
    const {initialLines = 1, text, textStyle, readMoreTextStyles} = props
    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View>
            <ASText
                numberOfLines={isExpanded ? undefined : initialLines}
                style={[styles.textStyle, textStyle]}>{text}</ASText>
            {text.length > initialLines && (
                <TouchableOpacity onPress={toggleExpansion}>
                    <ASText
                        style={[styles.readMoreTextStyle, readMoreTextStyles]}>{isExpanded ? 'Read less' : 'Read more'}</ASText>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: colors.black,
    },
    readMoreTextStyle: {
        color: colors.gray400,
        fontSize: 12
    }
})

export default ASExpandableText

// NOTE:  ASExpandableText Example
/*
         <ASExpandableText initialLines={1}
                           text={'Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum '}/>

* */
