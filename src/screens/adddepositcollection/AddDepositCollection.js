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
import TextInputwithoutSVG from '../../components/textinputwithoutsvg/TextInputwithoutSVG';
import { NavigationContainer } from '@react-navigation/native';

const AddDepositCollection = ({ navigation }) => {

    const refRBSheetMember = useRef();

    const refRBSheetSubscription = useRef();


    const [stateIsValidMember, setStateIsValidMember] = useState(true);
    const [stateIsValidAmount, setStateIsValidAmount] = useState(true);
    const [stateIsValidFirstName, setStateIsValidFirstName] = useState(true);
    const [stateIsValidDuration, setStateIsValidDuration] = useState(true);
    const [stateIsValidSubscription, setStateIsValidSubscription] = useState(true);
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidStartingDate, setStateIsValidStartingDate] = useState(true);
    const [stateIsValidEndingDate, setStateIsValidEndingDate] = useState(true);
    const [stateIsValidProduct, setStateIsValidProduct] = useState(true);

    const [stateData, setStateData] = useState({
        member: "Select Member",
        code: '',
        duration: 'Duration',
        status: "Open",
        startingDate: '',
        endingDate: '',
        Product: 'Select Product',
        subscription: "Select Subscription",
        amount: ""
    })

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };



    const [expiryDate, setExpiryDate] = useState(new Date(1598051730000));
    const [expiryMode, setExpiryMode] = useState('date');
    const [expiryShow, setExpiryShow] = useState(false);
    const expiryShowMode = (currentMode) => {
        setExpiryShow(true);
        setExpiryMode(currentMode);
    };

    const expiryShowDatepicker = () => {
        expiryShowMode('date');
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);



        let date = new Date();
        date = selectedDate

        if (date != undefined) {
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            let day = date.getDate().toString().padStart(2, "0");

            let q = year + '-' + month + '-' + day
            console.log(typeof (year + '-' + month + '-' + day))

            setStateData({
                ...stateData,
                startingDate: day + "." + month + "." + year
            })
            setStateIsValidStartingDate(true)


        }
    };

    const onChangeExpireDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setExpiryShow(Platform.OS === 'ios');
        setExpiryDate(currentDate);



        let date = new Date();
        date = selectedDate

        if (date != undefined) {
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            let day = date.getDate().toString().padStart(2, "0");

            let q = year + '-' + month + '-' + day
            console.log(typeof (year + '-' + month + '-' + day))

            setStateData({
                ...stateData,
                endingDate: day + "." + month + "." + year
            })
            setStateIsValidEndingDate(true)


        }
    };

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

    const [listSubscription, setListSubscription] = useState([
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

    const [listSelectStatus, setListSelectStatus] = useState([
        {
            id: 1,
            value: "Open",
        },
        {
            id: 2,
            value: "Close",
        }
    ]);
    const [listProduct, setListProduct] = useState([
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


    const add = () => {


        if (stateData.member == "Select Member") {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidMember(false)



        }
        if (stateData.subscription == "Select Subscription") {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidSubscription(false)



        }



        if (stateData.amount == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidAmount(false)
        }

        if (stateData.member != "Select Member" &&


            stateData.subscription != 'Select Subscription') {
            console.log("All valid record")
            navigation.goBack()
        }


    }
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            {/* <ScrollView> */}
            <View style={{ height: 130 }}>
                <CustomHeader text="ADD/DEPOSIT COLLECTION"
                    xml={Svgs.manageColloection}
                    onPress={() => {
                        navigation.goBack()
                    }} />
            </View >

            <View style={{
                marginHorizontal: '5%',
                marginTop: '7%'
            }}>
                <TouchableRipple style={{
                    flexDirection: 'row',
                    //backgroundColor: 'red',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderWidth: 1,
                    marginTop: '5%',
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
                            <Text style={STYLES.fontSize15_grey707070_Arial_Regular}>
                                {stateData.member}</Text>


                        </View>
                        <SvgXml xml={Svgs.arrowDown} style={{ marginRight: '3%' }} />

                    </>
                </TouchableRipple>

                {stateIsValidMember == false ? <Text style={{ color: 'red' }}>Enter Valid Member</Text> : null}


                <TouchableRipple style={{
                    flexDirection: 'row',
                    //backgroundColor: 'red',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderWidth: 1,
                    marginTop: '5%',
                    height: 50,

                    paddingHorizontal: '5%',

                    borderColor: COLORS.grey707070
                }} onPress={() => refRBSheetSubscription.current.open()}
                >
                    <>
                        <View style={{
                            height: 50,
                            justifyContent: 'center'

                        }}>
                            <Text style={STYLES.fontSize15_grey707070_Arial_Regular}>
                                {stateData.subscription}</Text>


                        </View>
                        <SvgXml xml={Svgs.arrowDown} style={{ marginRight: '3%' }} />

                    </>
                </TouchableRipple>
                {stateIsValidSubscription == false ? <Text style={{ color: 'red' }}>Enter Valid Subscription</Text> : null}



                <View style={{ marginTop: '5%' }}>
                    <TextInputwithoutSVG
                        keyboardType='numeric'
                        label="Enter Amount"

                        onChangeText={(text) => {
                            setStateIsValidAmount(true)
                            setStateData({
                                ...stateData, amount: text
                            })
                        }} />
                    {stateIsValidAmount == false ? <Text style={{ color: 'red' }}>Enter Valid Amount</Text> : null}


                </View>



            </View>
            <View style={{
                marginVertical: '5%',
                marginHorizontal: '10%', flex: 1,
                justifyContent: 'flex-end',

            }}>
                <ButtonSvg text="Add"
                    xml={Svgs.plusCircleWhite}
                    color={COLORS.orangeFD941E}
                    onPress={() => {
                        add()
                    }} />
            </View>
            {/* </ScrollView> */}


            {/* Bottom sheet Member */}
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
                            SELECT MEMBER</Text>

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





            {/* Bottom sheet Subscription */}
            <RBSheet
                // closeOnDragDown={true}
                closeOnPressMask={false}
                dragFromTopOnly={true}
                height={330}
                animationType="slide"
                ref={refRBSheetSubscription}


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
                            SELECT Subscrition</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetSubscription.current.close()}

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
                            {listSubscription.map((list, index) => {
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
                                            refRBSheetSubscription.current.close()
                                            setStateData({
                                                ...stateData,
                                                subscription: list.value
                                            })
                                            setStateIsValidSubscription(true)

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

AddDepositCollection.propTypes = {

};

export default AddDepositCollection;