import React from 'react';
import { SafeAreaView, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Text, TextInput } from 'react-native-paper'
import Svgs from '../../utills/svgs/Svgs';
import COLORS from '../../utills/colors/Color';
import STYLES from '../../STYLES/STYLES';
const TextInput1 = props => {

    return (

        <TextInput
            keyboardType={props.keyboardType}

            mode='outlined'
            style={[{

                backgroundColor: COLORS.whiteFFFFFF

            }, STYLES.fontSize15_grey707070_arial,
            { //height: 60, 
                //backgroundColor: COLORS.whiteFFFFFF
            }]}
            disabled={props.disabled}
            label={props.label}
            left={<TextInput.Icon name={() =>
                <SvgXml xml={props.xml}
                />
            } />}

            value={props.value}
            //  placeholderTextColor={COLORS.whiteFFFFFF}
            //placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            selectionColor={COLORS.grey707070}
            activeOutlineColor={COLORS.orangeFD941E}
        // activeUnderlineColor={COLORS.whiteFFFFFF}

        />

    )

};

TextInput1.propTypes = {

};

export default TextInput1;