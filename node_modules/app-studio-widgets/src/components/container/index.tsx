import React, {ReactNode} from 'react';
import {ScrollView, ScrollViewProps, StyleProp, StyleSheet, ViewStyle} from 'react-native'
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

export type ASContainerProps = SafeAreaViewProps & {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    isScrollable?: boolean
    scrollViewContentContainerStyle?: StyleProp<ViewStyle> | undefined
    scrollViewProps?: ScrollViewProps
}

const ASContainer: React.FC<ASContainerProps> = (props: ASContainerProps) => {
    const {
        children,
        style,
        isScrollable = true,
        scrollViewContentContainerStyle,
        scrollViewProps,
        ...restProps
    } = props || {}

    return (
        <SafeAreaView {...restProps} style={[styles.container, style]}>
            {isScrollable ? (
                    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} {...scrollViewProps}
                                contentContainerStyle={[styles.scrollViewStyle, scrollViewContentContainerStyle]}>
                        {children}
                    </ScrollView>
                ) :
                children
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollViewStyle: {
        flexGrow: 1
    }
});

export default ASContainer
