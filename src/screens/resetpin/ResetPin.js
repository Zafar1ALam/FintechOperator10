
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
const ResetPin = ({ navigation }) => {
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidConfirmPassword, setStateIsValidConfirmPassword] = useState(true);
    const [stateIsValidPasswordConfirmPassword, setStateIsValidPasswordConfirmPassword] = useState(true)

    const [stateData, setStataData] = useState({

        password: '',
        confirmPassword: ''
    }
    )
    const passwordCheck = () => {
        if (stateData.password === stateData.confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    }
    const Continue = () => {

        if (stateData.password == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPassword(false)

        }

        if (stateData.confirmPassword == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidConfirmPassword(false)
        }

        if (!passwordCheck()) {
            //Alert.alert("Password and Confirm Password are not same")
            setStateIsValidPasswordConfirmPassword(false)
        }
        if (passwordCheck()) {
            //Alert.alert("Password and Confirm Password are not same")
            setStateIsValidPasswordConfirmPassword(true)
        }
        if (stateData.password != ''
            && stateData.confirmPassword != '' && passwordCheck()
        ) {
            navigation.navigate("SignIn")
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
                        navigation.navigate("SignIn")
                    }}
                >
                    <SvgXml xml={Svgs.arrowLeftSmall} />
                </TouchableRipple>

                <View style={{ alignItems: 'center', marginTop: '10%' }}>
                    <SvgXml xml={Svgs.logo} />
                </View>
                <View style={{ marginTop: '5%', alignItems: 'center' }}>
                    <Text style={STYLES.fontSize21_black1C1A1A_Arial_Bold}>Reset Pin</Text>
                </View >


                <View style={{ marginHorizontal: '10%', marginTop: '5%' }}>
                    <TextInput1 xml={Svgs.lockSvg}
                        label="New Pin"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            setStateIsValidPassword(true)
                            setStataData({
                                ...stateData, password: text
                            })
                        }} />
                    {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Pincode</Text> : null}
                </View>



                <View style={{ marginHorizontal: '10%', marginTop: '5%' }}>
                    <TextInput1 xml={Svgs.lockSvg}
                        label="Confirm New Pin"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            setStateIsValidConfirmPassword(true)
                            setStataData({
                                ...stateData, confirmPassword: text
                            })
                        }} />
                    {stateIsValidConfirmPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Confirm Password</Text> : null}
                    {stateIsValidPasswordConfirmPassword == false &&
                        stateIsValidConfirmPassword == true && stateIsValidConfirmPassword == true ? <Text style={{ color: 'red' }}>Password and  Confirm Password
                            are not same</Text> : null}
                </View>


                <View style={{
                    paddingHorizontal: '10%',// backgroundColor: 'red',
                    marginTop: '50%',
                }}>
                    <Button1 onPress={() => { Continue() }}
                        text="CONTINUE" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

ResetPin.propTypes = {

};

export default ResetPin;