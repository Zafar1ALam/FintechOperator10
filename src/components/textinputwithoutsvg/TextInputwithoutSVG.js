import * as React from 'react';
import STYLES from '../../STYLES/STYLES'
import { TextInput, useTheme } from 'react-native-paper';
import COLORS from '../../utills/colors/Color';
const TextInputwithoutSVG = props => {

    return (
        <TextInput

            keyboardType={props.keyboardType}
            value={props.value}
            disabled={props.disabled}

            activeOutlineColor={COLORS.orangeFD941E}
            // outlineColor={ }
            mode='outlined'
            selectionColor={COLORS.grey707070}
            // onFocus={outlineColor = "red"}
            style={[STYLES.fontSize15_grey707070_arial,
            {
                backgroundColor: COLORS.whiteFFFFFF
                // borderColor:colo
                //flex: 1,
                //height: 60,
                //paddingVertical: '10%',
                //backgroundColor: COLORS.whiteFFFFFF
                //backgroundColor: 'red'
            }]}
            //activeUnderlineColor="green"


            label={props.label}

            onChangeText={props.onChangeText}

        />
    );
};

TextInputwithoutSVG.propTypes = {

};

export default TextInputwithoutSVG;