import React from 'react';
import { SafeAreaView, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Text, TextInput, TouchableRipple } from 'react-native-paper'
import Svgs from '../../utills/svgs/Svgs';
import COLORS from '../../utills/colors/Color';
import STYLES from '../../STYLES/STYLES';

const ButtonSvg = props => {
    return (
        <TouchableRipple style={{
            backgroundColor: props.color,
            paddingVertical: '6%', justifyContent: 'center',
            alignItems: 'center',

            flexDirection: 'row'
        }} onPress={props.onPress}>
            <>
                <SvgXml xml={props.xml} style={{ marginRight: '5%' }} />
                {/* <Image source={require('../utilities/svgs/camera.svg')} resizeMode={'cover'}
                    style={{ height: 40, width: 40 }} /> */}
                <Text style={STYLES.fontSize19_whiteFFFFFF_Arial_Regular}>{props.text}</Text>
            </>
        </TouchableRipple>
    );
};

ButtonSvg.propTypes = {

};

export default ButtonSvg;