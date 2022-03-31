import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView, View, ScrollView, Alert, StyleSheet,
    TouchableOpacity, Image, Dimensions, FlatList
} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SvgXml } from 'react-native-svg'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

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
import LeftTextRightButton from '../../components/lefttextrightbutton/LeftTextRightButton';
import LeftTextBlueRightTextBlack from '../../components/lefttextbluerighttextblack/LeftTextBlueRightTextBlack';
import CustomHeaderBiggerWidth from '../../components/customheaderbiggerwidth/CustomHeaderBiggerWidth';
import CustomHeaderLeftCustomIconTextRightButton from '../../components/customheaderleftcustomicontextrightbutton/CustomHeaderLeftCustomIconTextRightButton';

const MyCashRegister = ({ navigation }) => {
    const refRBSheetMember = useRef();
    const refRBSheetSubscription = useRef();

    const [stateIsValidMember, setStateIsValidMember] = useState(true);
    const [stateIsValidSubscription, setStateIsValidSubscription] = useState(true);
    const [stateData, setStateData] = useState({

        member: "Select Member",
        subscription: "Select Subscription",


    });

    var [listManageCollection, setListManageCollection] = useState([
        {
            key: 1,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',

            amount: 3

        },
        {
            key: 2,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3
        },
        {
            key: 3,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3
        },
        {
            key: 4,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3
        },
        {
            key: 5,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3
        },
        {
            key: 6,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3
        },
        {
            key: 7,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3
        },
        {
            key: 8,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3
        },
        {
            key: 9,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3
        },
        {
            key: 10,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3
        },
        {
            key: 11,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3
        },
        {
            key: 12,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3
        },
    ]);




    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 110, }}>
                    <CustomHeaderLeftCustomIconTextRightButton
                        textText="MY CASH REGISTER"
                        textTextStyle={STYLES.fontSize18_whiteFFFFFF_Arial_Regular}
                        xml={Svgs.myCashRegister}
                        buttonText="300$"
                        buttonTextStyle={STYLES.fontSize20_whiteFFFFFF_Arial_Regular}
                        onPress={() => { navigation.goBack() }} />

                </View>
                <View style={{ marginHorizontal: '3%', marginTop: '4%' }}>


                    <View style={{
                        flexDirection: 'row',// paddingHorizontal: '5%',
                        // width: '90%',
                        //  alignSelf: 'center',
                        marginTop: '5%'
                    }}>
                        <View style={{
                            width: '15%', justifyContent: 'center',
                            // alignItems: 'center'
                            // backgroundColor: 'red'
                        }}>
                            <Text style={[STYLES.fontSize13_blue0090FF_Arial_Bold,
                            { textAlign: 'center' }]}>ID</Text>
                        </View>
                        <View style={{
                            width: '23%', justifyContent: 'center',
                            //  alignItems: 'center'
                            // backgroundColor: 'green'
                        }}>
                            <Text style={[STYLES.fontSize13_blue0090FF_Arial_Bold,
                            { textAlign: 'center' }]}>Customer Name</Text>
                        </View>

                        <View style={{
                            width: '23%', justifyContent: 'center',
                            //  alignItems: 'center'
                            //  backgroundColor: 'pink'
                        }}>
                            <Text style={[STYLES.fontSize13_blue0090FF_Arial_Bold,
                            { textAlign: 'center' }]}>Subscription Name</Text>
                        </View>
                        <View style={{
                            width: '23%', justifyContent: 'center',
                            //  alignItems: 'center'
                            //  backgroundColor: 'orange'
                        }}>
                            <Text style={[STYLES.fontSize13_blue0090FF_Arial_Bold,
                            { textAlign: 'center' }]}>Collection Date</Text>
                        </View>
                        <View style={{
                            width: '18%', justifyContent: 'center',
                            //  alignItems: 'center'
                            //  backgroundColor: 'orange'
                        }}>
                            <Text style={[STYLES.fontSize13_blue0090FF_Arial_Bold,
                            { textAlign: 'center' }]}>Amount</Text>
                        </View>


                    </View>
                    <View style={{ width: '100%', alignSelf: 'center' }}>
                        {
                            listManageCollection.map((data, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            flexDirection: 'row', height: 60,

                                            borderBottomColor: COLORS.grey707070_51,
                                            borderBottomWidth: 0.3,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>

                                        <View style={{
                                            width: '15%',
                                            //backgroundColor: 'red',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={[STYLES.fontSize13_black161923_Arial_Regular,
                                            { textAlign: 'center' }]}>{data.id}</Text>
                                        </View>
                                        <View style={{
                                            width: '23%', alignItems: 'center',
                                            // backgroundColor: 'green'
                                        }}>
                                            <Text style={[STYLES.fontSize13_black161923_Arial_Regular,
                                            { textAlign: 'center' }]}>{data.name}</Text>
                                        </View>
                                        <View style={{
                                            width: '23%', alignItems: 'center',
                                            // backgroundColor: 'blue'
                                        }}>
                                            <Text style={[STYLES.fontSize13_black161923_Arial_Regular,
                                            { textAlign: 'center' }]}>{data.sunscriptionName}</Text>
                                        </View>
                                        <View style={{
                                            width: '23%', alignItems: 'center',
                                            // backgroundColor: 'blue'
                                        }}>
                                            <Text style={[STYLES.fontSize13_black161923_Arial_Regular,
                                            { textAlign: 'center' }]}>{data.collectionDate}</Text>
                                        </View>
                                        <View style={{
                                            width: '18%', alignItems: 'center',
                                            // backgroundColor: 'blue'
                                        }}>
                                            <Text style={[STYLES.fontSize13_black161923_Arial_Regular,
                                            { textAlign: 'center' }]}>{data.amount}</Text>
                                        </View>


                                    </View>
                                )
                            })
                        }
                    </View>



                </View>
            </ScrollView>


        </SafeAreaView>
    );
};

MyCashRegister.propTypes = {

};

export default MyCashRegister;