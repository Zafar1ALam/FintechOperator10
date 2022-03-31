import React from 'react';
import { SafeAreaView, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Text, TextInput, Card } from 'react-native-paper'
import Svgs from '../../utills/svgs/Svgs';
import COLORS from '../../utills/colors/Color';
import STYLES from '../../STYLES/STYLES';
import { TouchableRipple } from 'react-native-paper';
const CustomHeader = props => {
    return (
        <View style={{
            backgroundColor: COLORS.blue0090FF, height: '100%',
            justifyContent: 'center'
        }}>
            <TouchableRipple style={{
                alignSelf: 'flex-start',
                paddingVertical: '3%',
                marginLeft: '1%',
                paddingHorizontal: '2%', marginTop: '2%'
            }}
                onPress={props.onPress}
            >
                <SvgXml xml={Svgs.arrowLeftBig} />
            </TouchableRipple>

            <View style={{
                flexDirection: 'row', justifyContent: 'center',
                marginBottom: '7%',
                alignItems: 'center', flex: 1,
                width: '61%', alignSelf: 'center'
            }}>
                <SvgXml xml={props.xml} style={{ marginRight: '10%' }} />
                <Text style={[STYLES.fontSize27_whiteFFFFFF_Arial_Bold,
                { textAlign: 'center' }]}>{props.text}</Text>
            </View>
        </View>
    );
};

CustomHeader.propTypes = {

};

export default CustomHeader;