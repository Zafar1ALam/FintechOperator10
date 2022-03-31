import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView, View, ScrollView, Alert, StyleSheet,
    TouchableOpacity, Image, Dimensions
} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SvgXml } from 'react-native-svg'
import {
    Text, TouchableRipple, DataTable, TextInput,
    Button
} from 'react-native-paper'
import Svgs from '../../utills/svgs/Svgs';
import COLORS from '../../utills/colors/Color';
import TextInput1 from '../../components/TextInput1/TextInput1';
import STYLES from '../../STYLES/STYLES';
import Button1 from '../../components/Button1.js/Button1';
import RBSheet from 'react-native-raw-bottom-sheet';

import DateTimePicker from '@react-native-community/datetimepicker';
import CustomHeader from '../../components/customheader/CustomHeader';
import LeftTextRightText from '../../components/lefttextrighttext/LeftTextRightText';
import ButtonSvg from '../../components/buttonsvg/ButtonSvg';
const ViewAddMembers = ({ navigation }) => {
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 130 }}>
                    <CustomHeader text="Add Members"
                        xml={Svgs.house}
                        onPress={() => {
                            navigation.goBack()
                        }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '5%', paddingHorizontal: '10%'


                }}>
                    <Text style={STYLES.fontSize20_black000000_Arial_Bold}>
                        Full Name Here
                    </Text>
                    <View style={{
                        borderWidth: 1,
                        borderColor: COLORS.blue0090FF,
                        paddingHorizontal: '3%',
                        paddingVertical: '1%',
                        borderRadius: 30
                    }}>
                        <Text style={STYLES.fontSize20_blue0090FF_Arial_Bold}>
                            #003
                        </Text>
                    </View>
                </View>

                <View style={{ paddingHorizontal: '10%', marginTop: '5%' }}>
                    <LeftTextRightText text1="Created at :"
                        text2="01-01-2021" />
                </View>
                <View style={{ paddingHorizontal: '10%', marginTop: '5%' }}>
                    <LeftTextRightText text1="Birthday :"
                        text2="01-01-2021" />
                </View>
                <View style={{ paddingHorizontal: '10%', marginTop: '5%' }}>
                    <LeftTextRightText text1="City :"
                        text2="City Name here" />
                </View>
                <View style={{ paddingHorizontal: '10%', marginTop: '5%' }}>
                    <LeftTextRightText text1="Email :"
                        text2="email here" />
                </View>
                <View style={{ paddingHorizontal: '10%', marginTop: '5%' }}>
                    <LeftTextRightText text1="Password :"
                        text2="Password here" />
                </View>
                <View style={{ paddingHorizontal: '10%', marginTop: '5%' }}>
                    <LeftTextRightText text1="Phone No :"
                        text2="+92333333" />
                </View>
                <View style={{ paddingHorizontal: '10%', marginTop: '5%' }}>
                    <LeftTextRightText text1="Sex :"
                        text2="Male" />
                </View>


                <View style={{
                    marginHorizontal: '10%',
                    marginTop: '5%',

                }}>
                    <Text style={STYLES.fontSize20_grey1C1939_Arial_Regular}>National ID card</Text>




                    <View style={{
                        width: '100%',
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 19,
                        borderWidth: 1,
                        //   padding: '1%',
                        marginTop: '5%',
                        borderColor: COLORS.black1A1A1A
                    }}
                    >
                        <>
                            {console.log('pppppp')}
                            <Image source={require('../../utills/images/audioPlayerImage.png')}
                                style={{
                                    height: '100%', width: '100%', flex: 1,
                                    borderRadius: 19,
                                    borderWidth: 1,
                                }} />
                        </>
                    </View>

                </View>

                <View style={{ paddingHorizontal: '10%', marginTop: '5%' }}>
                    <LeftTextRightText text1="ID Expiry Date"
                        text2="01-01-2021" />
                </View>

                <View style={{
                    marginVertical: '5%',
                    marginHorizontal: '10%'
                }}>
                    <ButtonSvg text="Edit"

                        color={COLORS.blue0090FF}
                        xml={Svgs.minusWhite}

                        onPress={() => {
                            navigation.navigate("EditMembers")
                        }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

ViewAddMembers.propTypes = {

};

export default ViewAddMembers;