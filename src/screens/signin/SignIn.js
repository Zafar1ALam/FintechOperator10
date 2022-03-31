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
import SplashScreen from 'react-native-splash-screen'
const SignIn = ({ navigation }) => {
    SplashScreen.hide()
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);

    const [stateData, setStataData] = useState({

        email: '',
        password: '',
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



    const login = () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }
        if (stateData.password == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPassword(false)

        }


        if (stateData.email != '' && stateData.password != ''

            && handleValidEmail(stateData.email)) {
            navigation.navigate("Welcome")


        }





    }

    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'center', marginTop: '25%' }}>
                    <SvgXml xml={Svgs.logo} />
                </View>
                <View style={{ marginTop: '2%', alignItems: 'center' }}>
                    <Text style={STYLES.fontSize16_grey1C1939_Arial_Bold}>OPERATOR LOGIN</Text>
                </View >

                <View style={{ marginHorizontal: '10%', marginTop: '5%' }}>
                    <TextInput1 label="Email" xml={Svgs.humanSvg}
                        onChangeText={(text) => {
                            setStateIsValidEmail(true)
                            setStataData({
                                ...stateData, email: text
                            })
                        }} />
                    {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}

                </View>
                <View style={{ marginHorizontal: '10%', marginTop: '5%' }}>
                    <TextInput1 xml={Svgs.lockSvg}
                        label="Pincode"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            setStateIsValidPassword(true)
                            setStataData({
                                ...stateData, password: text
                            })
                        }} />
                    {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Pincode</Text> : null}
                </View>

                <TouchableRipple style={{
                    marginTop: '2%',
                    marginHorizontal: '10%', alignSelf: 'flex-end'
                }} onPress={() => {
                    navigation.navigate("ForgotPin")
                }}>
                    <Text>Forget Pin?</Text>
                </TouchableRipple>

                <View style={{
                    paddingHorizontal: '10%',// backgroundColor: 'red',
                    marginTop: '50%',
                }}>
                    <Button1 onPress={() => { login() }}
                        text="SIGNIN" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

SignIn.propTypes = {

};

export default SignIn;