import React from 'react';
import { SafeAreaView, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Text, TextInput, Card } from 'react-native-paper'
import Svgs from '../../utills/svgs/Svgs';
import COLORS from '../../utills/colors/Color';
import STYLES from '../../STYLES/STYLES';
import { TouchableRipple } from 'react-native-paper';

const LeftTextRightButton = props => {
    return (
        <View style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: COLORS.grey707070_51
            , justifyContent: 'space-between',
            paddingBottom: '5%'
        }}>

            <View>
                <Text style={STYLES.fontSize16_blue0090FF_Arial_Bold}>Status</Text>

            </View>
            <TouchableRipple style={{
                borderRadius: 20, backgroundColor: COLORS.orangeFD941E,
                paddingHorizontal: '2%', paddingVertical: '1%'
            }}>
                <Text style={STYLES.fontSize8_whiteFFFFFF_Arial_Bold}>{props.text}</Text>
            </TouchableRipple>

        </View>
    );
};

LeftTextRightButton.propTypes = {

};

export default LeftTextRightButton;