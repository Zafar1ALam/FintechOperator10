import React from 'react';
import { SafeAreaView, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Text, TextInput, Card } from 'react-native-paper'
import Svgs from '../../utills/svgs/Svgs';
import COLORS from '../../utills/colors/Color';
import STYLES from '../../STYLES/STYLES';
import { TouchableRipple } from 'react-native-paper';

const Box = props => {
    return (
        <Card style={{
            borderWidth: 1, width: '48%',
            alignItems: 'center',
            // backgroundColor: 'red',
            justifyContent: 'center',
            //  height: '50%',
            //   height: '50%',

            borderColor: COLORS.blue0090FF, //paddingHorizontal: '5%',
            paddingVertical: '5%'
        }} onPress={props.onPress}>

            <View style={{
                backgroundColor: COLORS.blue0090FF,
                borderRadius: 10,// paddingHorizontal: '10%',
                // paddingVertical: '10%', 
                alignSelf: 'center',
                width: 60, height: 62,
                alignItems: 'center', justifyContent: 'center'
            }}>
                <SvgXml xml={props.xml} />
            </View>
            <Text style={[STYLES.fontSize18_grey1C1939_Arial_Regular,
            { marginTop: '10%', textAlign: 'center' }]}>{props.text}</Text>

        </Card>
    );
};

Box.propTypes = {

};

export default Box;