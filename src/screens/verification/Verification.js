
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, ScrollView } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Text, TouchableRipple } from 'react-native-paper'
import Svgs from '../../utills/svgs/Svgs';
import COLORS from '../../utills/colors/Color';
import TextInput1 from '../../components/TextInput1/TextInput1';
import STYLES from '../../STYLES/STYLES';
import Style from './Style'
import Button1 from '../../components/Button1.js/Button1';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import TextInputwithoutSVG from '../../components/textinputwithoutsvg/TextInputwithoutSVG';



const CELL_COUNT = 4;

const Verification = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    const [stateIsValidOTPCode, setStateIsValidOTPCode] = useState(true)


    const verify = () => {


        // console.log(value)
        // console.log(routeOtp)

        // console.log(typeof (value))
        // console.log(typeof (routeOtp))
        // var otpnumber = parseInt(value)
        // console.log(typeof (otpnumber))
        // console.log(typeof (routeOtp))
        if (value.length == 4) {
            setStateIsValidOTPCode(true)
        }

        if (value.length != 4) {
            //  console.log(stateData.password + 'password')
            setStateIsValidOTPCode(false)
        }



        if (value.length == 4) {
            navigation.navigate("ResetPin")
            // if (otpnumber === routeOtp) {
            //     navigation.navigate("ResetPassword",
            //         {

            //             routeEmail: routeEmail

            //         })
            // }
            // else {
            //     Alert.alert("plz enter valid otp code")
            //     navigation.navigate("ForgetPassword")
            // }
        }
    }
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>

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
            <View style={{ alignItems: 'center', marginTop: '15%' }}>
                <SvgXml xml={Svgs.logo} />
            </View>
            <View style={{ marginTop: '2%', alignItems: 'center' }}>
                <Text style={STYLES.fontSize21_black1C1A1A_Arial_Bold}>Verification</Text>
            </View >

            <View style={{ marginTop: '1%', alignItems: 'center' }}>
                <Text style={STYLES.fontSize13_black1C1A1A_Arial_Regular}>Enter Code Below</Text>
            </View >


            <CodeField
                ref={ref}
                {...prop}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={Style.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    value == '' ?

                        <Text
                            key={index}
                            style={[Style.cell, isFocused && Style.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}



                            {symbol || (isFocused ? <Cursor /> : null)}

                        </Text>
                        : <Text
                            key={index}
                            style={[Style.cell, isFocused && Style.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}

                            {symbol || (isFocused ? <Cursor /> : null)}

                        </Text>

                )}
            />




            <View style={{ marginLeft: '15%' }}>
                {stateIsValidOTPCode == false ? <Text style={{ color: 'red' }}>Enter Valid Otp Code</Text> : null}
            </View>

            <View style={{
                paddingHorizontal: '10%',// backgroundColor: 'red',
                flex: 1, justifyContent: 'flex-end',
                marginBottom: '10%'
            }}>
                <Button1 onPress={() => {
                    verify()
                }}
                    text="VERIFY" />
            </View>

        </SafeAreaView>
    );
};

Verification.propTypes = {

};

export default Verification;