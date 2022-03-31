import * as React from 'react';
import { View } from 'react-native'
import { Button, Text } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../../STYLES/STYLES';
import Svgs from '../../utills/svgs/Svgs';
const LeftTextRightText = props => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'

        }}>
            <Text style={STYLES.fontSize20_black000000_Arial_Bold}>
                {props.text1}
            </Text>
            <Text style={STYLES.fontSize20_black000000_Arial_Bold}>
                {props.text2}
            </Text>
        </View>
    );
};



export default LeftTextRightText;