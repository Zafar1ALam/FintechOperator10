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

const SeeReport = ({ navigation }) => {
    const refRBSheetMember = useRef();


    const [stateIsValidMember, setStateIsValidMember] = useState(true);

    const [stateData, setStateData] = useState({

        member: "Select Member",



    });

    var [listSubscription, setListSubscription] = useState([
        {
            key: 1,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
            amount: 3

        },
        {
            key: 2,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 3,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 4,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 5,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 6,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 7,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 8,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 9,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 10,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 11,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 12,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
    ]);


    var [listCashRegister, setListCashRegister] = useState([
        {
            key: 1,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
            amount: 3

        },
        {
            key: 2,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 3,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 4,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 5,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 6,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 7,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 8,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 9,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 10,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 11,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
        {
            key: 12,
            id: '01',
            name: "Customer",
            sunscriptionName: "sunscription ",
            collectionAmount: "1 $",
            collectionDate: '01-02-03',
            amount: 3,
            subscriptionName: "Subscription Name",
            duration: '3 month',
            code: '010001',
        },
    ]);
    const [listMember, setListMember] = useState([
        {
            id: 1,
            value: "Agency1",
        },
        {
            id: 2,
            value: "Agency2",
        },
        {
            id: 3,
            value: "Agency3",
        },
        {
            id: 4,
            value: "Agency4",
        },
        {
            id: 5,
            value: "Agency5",
        },
        {
            id: 6,
            value: "Agency6",
        }
    ]);



    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 110 }}>
                    <CustomHeaderBiggerWidth text="SEE REPORT"
                        xml={Svgs.report}

                        style1={STYLES.fontSize18_whiteFFFFFF_Arial_Regular}
                        onPress={() => { navigation.goBack() }} />
                </View>
                <View style={{ marginHorizontal: '5%', marginTop: '6%' }}>

                    <TouchableRipple style={{
                        flexDirection: 'row',
                        //backgroundColor: 'red',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderWidth: 1,
                        marginHorizontal: '3%',
                        height: 50,

                        paddingHorizontal: '5%',

                        borderColor: COLORS.grey707070
                    }} onPress={() => refRBSheetMember.current.open()}
                    >
                        <>
                            <View style={{
                                height: 50,
                                justifyContent: 'center'

                            }}>
                                <Text style={STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                                    {stateData.member}</Text>


                            </View>
                            <SvgXml xml={Svgs.arrowDown} style={{ marginRight: '3%' }} />

                        </>
                    </TouchableRipple>
                    {stateIsValidMember == false ? <Text style={{ color: 'red' }}>Enter Valid Member</Text> : null}

                    {/* Subscription flatlist */}
                    <View style={{ marginTop: '7%' }}>
                        <Text style={STYLES.fontSize17_blue0090FF_Arial_Bold}>
                            Subscriptions:
                        </Text>
                    </View>



                    <View style={{
                        flexDirection: 'row',// paddingHorizontal: '5%',

                        //  alignSelf: 'center',
                        marginTop: '5%'
                    }}>
                        <View style={{
                            width: '25%', justifyContent: 'center',
                            // alignItems: 'center'
                            //backgroundColor: 'red'
                        }}>
                            <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                            { textAlign: 'center' }]}>Code</Text>
                        </View>
                        <View style={{
                            width: '25%', justifyContent: 'center',
                            //  alignItems: 'center'
                            //backgroundColor: 'green'
                        }}>
                            <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                            { textAlign: 'center' }]}>Name</Text>
                        </View>

                        <View style={{
                            width: '25%', justifyContent: 'center',
                            //  alignItems: 'center'
                            //    backgroundColor: 'pink'
                        }}>
                            <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                            { textAlign: 'center' }]}>Duration</Text>
                        </View>
                        <View style={{
                            width: '25%', justifyContent: 'center',
                            //  alignItems: 'center'
                            //    backgroundColor: 'pink'
                        }}>
                            <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                            { textAlign: 'center' }]}>Collection Balance</Text>
                        </View>

                    </View>
                    <View style={{ width: '100%', alignSelf: 'center' }}>
                        {
                            listSubscription.map((data, index) => {
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
                                            width: '25%',
                                            //backgroundColor: 'red',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                            { textAlign: 'center' }]}>{data.code}</Text>
                                        </View>
                                        <View style={{
                                            width: '25%', alignItems: 'center',
                                            // backgroundColor: 'green'
                                        }}>
                                            <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                            { textAlign: 'center' }]}>{data.subscriptionName}</Text>
                                        </View>
                                        <View style={{
                                            width: '25%', alignItems: 'center',
                                            // backgroundColor: 'blue'
                                        }}>
                                            <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                            { textAlign: 'center' }]}>{data.duration}</Text>
                                        </View>
                                        <View style={{
                                            width: '25%', alignItems: 'center',
                                            // backgroundColor: 'blue'
                                        }}>
                                            <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                            { textAlign: 'center' }]}>{data.collectionAmount}</Text>
                                        </View>


                                    </View>
                                )
                            })
                        }
                    </View>

                    {/* Cash Register flatlist */}


                    <View style={{ marginTop: '7%' }}>
                        <Text style={STYLES.fontSize17_blue0090FF_Arial_Bold}>
                            Cash Register :
                        </Text>
                    </View>



                    <View style={{
                        flexDirection: 'row',// paddingHorizontal: '5%',

                        //  alignSelf: 'center',
                        marginTop: '5%'
                    }}>
                        <View style={{
                            width: '30%', justifyContent: 'center',
                            // alignItems: 'center'
                            //backgroundColor: 'red'
                        }}>
                            <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                            { textAlign: 'center' }]}>ID</Text>
                        </View>
                        <View style={{
                            width: '39%', justifyContent: 'center',
                            //  alignItems: 'center'
                            //backgroundColor: 'green'
                        }}>
                            <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                            { textAlign: 'center' }]}>Collection Date</Text>
                        </View>

                        <View style={{
                            width: '30%', justifyContent: 'center',
                            //  alignItems: 'center'
                            //    backgroundColor: 'pink'
                        }}>
                            <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                            { textAlign: 'center' }]}>Amount</Text>
                        </View>

                    </View>
                    <View style={{ width: '100%', alignSelf: 'center' }}>
                        {
                            listCashRegister.map((data, index) => {
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
                                            width: '33%',
                                            //backgroundColor: 'red',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                            { textAlign: 'center' }]}>{data.id}</Text>
                                        </View>
                                        <View style={{
                                            width: '33%', alignItems: 'center',
                                            // backgroundColor: 'green'
                                        }}>
                                            <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                            { textAlign: 'center' }]}>{data.collectionDate}</Text>
                                        </View>
                                        <View style={{
                                            width: '33%', alignItems: 'center',
                                            // backgroundColor: 'blue'
                                        }}>
                                            <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                            { textAlign: 'center' }]}>{data.amount}</Text>
                                        </View>



                                    </View>
                                )
                            })
                        }
                    </View>



                </View>
            </ScrollView>
            {/* Bottom sheet MEMBER */}
            <RBSheet
                // closeOnDragDown={true}
                closeOnPressMask={false}
                dragFromTopOnly={true}
                height={330}
                animationType="slide"
                ref={refRBSheetMember}


                // closeOnPressBack={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,0.84)',
                        //backgroundColor: "transparent"

                    },
                    container: {
                        //borderRadius: 40,

                        paddingVertical: "5%",
                        backgroundColor: COLORS.whiteFFFFFF,
                        marginHorizontal: '5%',
                        borderWidth: 1,
                        width: "100%",
                        alignSelf: "center",
                        borderTopLeftRadius: 41,
                        borderTopRightRadius: 41,
                        borderColor: COLORS.grey707070
                    },

                }}


            >

                <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                    <View style={{
                        flexDirection: 'row', justifyContent:
                            'space-between',
                        marginBottom: '5%'
                    }}>
                        <Text style={STYLES.fontSize27_black303033_Arial_Bold}>
                            SELECT Member</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetMember.current.close()}

                            style={{


                            }}>
                            <SvgXml xml={Svgs.crossBlue} />
                        </TouchableRipple>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={{
                            flex: 1, //backgroundColor: 'green',
                            marginTop: '3%',
                            paddingHorizontal: '2%',
                            justifyContent: 'space-between'
                        }}>
                            {listMember.map((list, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            // backgroundColor: COLORS.whiteFFFFFF,
                                            // paddingVertical: '4%',
                                            backgroundColor: COLORS.whiteFFFFFF,
                                            paddingVertical: '4%',

                                            borderBottomWidth: 1,
                                            borderBottomColor: COLORS.grey707070
                                            // borderBottomWidth: 1,
                                            // borderBottomColor: COLORS.black000000_20

                                        }}>
                                        <TouchableOpacity style={{
                                            //height: 40,
                                            //flex: 1,
                                            // backgroundColor: 'red',
                                            justifyContent: 'center'
                                        }} onPress={() => {
                                            refRBSheetMember.current.close()
                                            setStateData({
                                                ...stateData,
                                                member: list.value
                                            })
                                            setStateIsValidMember(true)

                                        }}>
                                            <Text style={[{
                                                alignSelf: 'center',
                                            }, STYLES.fontSize25_grey707070_Arial_Regular]}>{list.value}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                        </View>
                    </ScrollView>

                </View>


            </RBSheet>




        </SafeAreaView>
    );
};

SeeReport.propTypes = {

};

export default SeeReport;