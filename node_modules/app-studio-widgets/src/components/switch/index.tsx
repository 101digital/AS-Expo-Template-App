import React, {useState} from 'react';
import {Switch, SwitchProps} from 'react-native';
import {colors} from "../../utils/colors";

export type ASSwitchProps = SwitchProps & {
    enableThumbColor?: string;
    disabledThumbColor?: string;
    onChange: (value: boolean) => void
}

const ASSwitch: React.FC<ASSwitchProps> = (props: ASSwitchProps) => {
    const {enableThumbColor = colors.offWhite, disabledThumbColor = colors.offWhite, onChange,...restProps} = props
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((previousState: boolean) => {
            onChange?.(!previousState)
            return !previousState
        });
    };

    return (
        <Switch
            trackColor={{false: colors.gray400, true: colors.green}}
            ios_backgroundColor={colors.black500}
            onValueChange={toggleSwitch}
            value={isEnabled}
            thumbColor={isEnabled ? enableThumbColor : disabledThumbColor}
            {...restProps}
        />
    );
};

export default ASSwitch;
