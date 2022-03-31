import React from 'react';
import { SafeAreaView, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Text, TextInput, Card } from 'react-native-paper'
import Svgs from '../../utills/svgs/Svgs';
import COLORS from '../../utills/colors/Color';
import STYLES from '../../STYLES/STYLES';
import { TouchableRipple } from 'react-native-paper';
const LeftTextBlueRightTextBlack = props => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'

        }}>
            <Text style={STYLES.fontSize15_blue0090FF_Arial_Bold}>
                {props.text1}
            </Text>
            <Text style={STYLES.fontSize16_black000000_Arial_Regular}>
                {props.text2}
            </Text>
        </View>);
};

LeftTextBlueRightTextBlack.propTypes = {

};

export default LeftTextBlueRightTextBlack;