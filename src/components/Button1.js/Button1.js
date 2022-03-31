import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Text, TouchableRipple } from 'react-native-paper'
import Svgs from '../../utills/svgs/Svgs';
import COLORS from '../../utills/colors/Color';
import TextInput1 from '../../components/TextInput1/TextInput1';
import STYLES from '../../STYLES/STYLES';

const Button1 = props => {
    return (
        <TouchableRipple style={{
            borderRadius: 29,
            backgroundColor: COLORS.orangeFD941E,
            paddingHorizontal: '5%',
            alignItems: 'center',
            paddingVertical: '5%'

        }} onPress={props.onPress}>
            <Text style={STYLES.fontSize20_whiteFFFFFF_Arial_Regular}>{props.text}</Text>
        </TouchableRipple>

    );
};

Button1.propTypes = {

};

export default Button1;