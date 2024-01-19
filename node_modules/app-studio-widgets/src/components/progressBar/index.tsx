import React from 'react';
import {StyleSheet, View} from 'react-native';
import {screenWidth} from "../../utils/commonUtils";
import {colors} from "../../utils/colors";
import ASText from "../text";

export type ASProgressBarProps = {
    progressBarTitle: string,
    progressValue: number;
}

const ASProgressBar: React.FC<ASProgressBarProps> = (props: ASProgressBarProps) => {
    const {progressBarTitle = '', progressValue} = props

    return (
        <View style={styles.progressBarContainer}>
            <ASText style={styles.progressBarText}>{progressBarTitle}</ASText>
            <View style={styles.progressBar}>
                <View
                    style={[
                        styles.progressCurrent,
                        {width: `${progressValue / 100 * 100}%`},
                    ]}
                />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    progressBarContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressBarText: {
        fontSize: 16,
        paddingBottom: 4,
        fontWeight: '600',
        lineHeight: 20
    },
    progressBar: {
        backgroundColor: colors.offWhite,
        height: 5,
        borderRadius: 16,
        width: screenWidth / 1.8,
        minWidth: 180,
        marginTop: 5
    },
    progressCurrent: {
        backgroundColor: '#00BA88',
        height: 5,
        borderRadius: 16,
    },
    progressSection: {
        marginBottom: 16,
    },
})

export default ASProgressBar;
