import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, ScrollView, Alert } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Text, TouchableRipple } from 'react-native-paper'
import Svgs from '../../utills/svgs/Svgs';
import COLORS from '../../utills/colors/Color';
import TextInput1 from '../../components/TextInput1/TextInput1';
import STYLES from '../../STYLES/STYLES';
import Button1 from '../../components/Button1.js/Button1';
import TextInputwithoutSVG from '../../components/textinputwithoutsvg/TextInputwithoutSVG';
const ForgotPin = ({ navigation }) => {


    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);


    const [stateData, setStataData] = useState({

        email: '',

    }
    )
    const handleValidEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (reg.test(val)) {
            console.log('true')
            return true;

        }
        else {
            console.log('false')
            return false;
        }
    }



    const sendCode = () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }



        if (stateData.email != ''

            && handleValidEmail(stateData.email)) {

            // Alert.alert("All valid Data")
            navigation.navigate("Verification")
        }





    }
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableRipple style={{
                    marginLeft: '2%', marginTop: '2%',
                    paddingHorizontal: '3%',
                    paddingVertical: '3%',
                    alignSelf: 'flex-start'
                }}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <SvgXml xml={Svgs.arrowLeftSmall} />
                </TouchableRipple>
                <View style={{ alignItems: 'center', marginTop: '15%' }}>
                    <SvgXml xml={Svgs.logo} />
                </View>
                <View style={{ marginTop: '8%', alignItems: 'center' }}>
                    <Text style={STYLES.fontSize16_grey1C1939_Arial_Bold}>Forget Pin?</Text>
                </View >

                <View style={{ marginTop: '8%', alignItems: 'center' }}>
                    <Text style={STYLES.fontSize13_black1C1A1A_Arial_Regular}>Enter Phone No for Verification Code</Text>
                </View >

                <View style={{ marginHorizontal: '10%', marginTop: '5%' }}>
                    <TextInputwithoutSVG
                        label="Enter Email"
                        onChangeText={(text) => {
                            setStateIsValidEmail(true)
                            setStataData({
                                ...stateData, email: text
                            })
                        }} />
                    {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}
                </View>


                <View style={{
                    paddingHorizontal: '10%',// backgroundColor: 'red',
                    marginTop: '50%',
                }}>
                    <Button1
                        text="SEND CODE"
                        onPress={() => { sendCode() }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

ForgotPin.propTypes = {

};

export default ForgotPin;