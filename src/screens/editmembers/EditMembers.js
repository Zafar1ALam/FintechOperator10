import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView, View, ScrollView, Alert, StyleSheet,
    TouchableOpacity, Image
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
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'

import ButtonSvg from '../../components/buttonsvg/ButtonSvg';
const EditMembers = ({ navigation }) => {
    const refRBSheetCamera = useRef();
    const refRBSheetIdCardCamera = useRef();
    const refRBSheetAgency = useRef();
    const refRBSheetCity = useRef();



    const refRBSheetGender = useRef()
    const [stateImage, setStateImage] = useState(null);
    const [stateIdCardImage, setStateIdCardImage] = useState(null);
    const [stateIsValidImage, setStateIsValidImage] = useState(true);
    const [stateIsValidIdCardImage, setStateIsValidIdCardImage] = useState(true);
    const [stateIsValidFirstName, setStateIsValidFirstName] = useState(true);
    const [stateIsValidLastName, setStateIsValidLastName] = useState(true);
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidAgency, setStateIsValidAgency] = useState(true);
    const [stateIsValidBirthDay, setStateIsValidBirthDay] = useState(true);
    const [stateIsValidCity, setStateIsValidCity] = useState(true);
    const [stateIsValidExpiryDate, setStateIsValidExpiryDate] = useState(true);





    const [stateData, setStateData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: "Male",
        agency: "Agency name",
        birthDay: "",
        city: "",
        expiryDate: ""

    });

    const imageTakeFromCamera = () => {

        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setStateImage(image.path)
            console.log(image.path);
            console.log(image);
            setStateIsValidImage(true)
            console.log('lcamera');
        });
        refRBSheetCamera.current.close()
    }

    const imageTakeFromGallery = () => {

        console.log('gg')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            console.log('galery');
            setStateIsValidImage(true)
            setStateImage(image.path)
        });
        refRBSheetCamera.current.close()
    }

    const imageTakeFromIdCardCamera = () => {

        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setStateIdCardImage(image.path)
            setStateIsValidIdCardImage(true)
            console.log(image.path);
            console.log(image);
            console.log('id card camera');


        });
        refRBSheetIdCardCamera.current.close()
    }

    const imageTakeFromIdCardGallery = () => {

        console.log('gg')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateIsValidIdCardImage(true)
            setStateIdCardImage(image.path)
            console.log('id card gallery');
        });
        refRBSheetIdCardCamera.current.close()
    }



    const [listSelectGender, setListSelectGender] = useState([
        {
            id: 1,
            value: "Male",
        },
        {
            id: 2,
            value: "Female",
        }
    ]);

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
                birthDay: day + "." + month + "." + year
            })
            setStateIsValidBirthDay(true)


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
                expiryDate: day + "." + month + "." + year
            })
            setStateIsValidExpiryDate(true)


        }
    };



    const [listAgency, setListAgency] = useState([
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


    const [listCity, setListCity] = useState([
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

    const update = () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }

        if (stateImage == null) {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidImage(false)



        }

        if (stateData.firstName == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidFirstName(false)



        }
        if (stateData.lastName == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidLastName(false)

        }
        if (stateData.birthDay == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidBirthDay(false)



        }
        if (stateData.city == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidCity(false)

        }
        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }
        if (stateData.password == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPassword(false)



        }

        if (stateData.agency == 'Agency name') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidAgency(false)



        }
        if (stateIdCardImage == null) {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidIdCardImage(false)



        }
        if (stateData.expiryDate == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidExpiryDate(false)



        }
        if (stateImage != null && stateData.firstName != '' &&
            stateData.lastName != '' && stateData.birthDay != '' && stateData.city != '' &&
            stateData.email != '' && stateData.password != ''
            && stateData.agency != 'Agency name' && stateIdCardImage != null
            && stateData.expiryDate != '' && handleValidEmail(stateData.email)) {
            navigation.navigate("ManageMembers")
        }
    }
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 130 }}>
                    <CustomHeader text="Edit Members"
                        xml={Svgs.house}
                        onPress={() => { navigation.navigate("ManageMembers") }} />
                </View>
                <View style={{ marginTop: '10%' }}>


                    {stateImage === null ?
                        <TouchableRipple onPress={() => refRBSheetCamera.current.open()}
                            style={{
                                alignSelf: 'center', //backgroundColor: 'red'
                            }}    >
                            <>
                                <Image source={require('../../utills/images/camera.png')} />
                                <SvgXml xml={Svgs.plusWhite} style={{
                                    position: 'absolute',
                                    right: "1%",
                                    top: '35%'
                                }} />
                            </>
                        </TouchableRipple> :
                        <TouchableRipple onPress={() => refRBSheetCamera.current.open()}
                            style={{ alignSelf: 'center' }}>
                            <>
                                <Image style={{ height: 62.32, width: 62.32, borderRadius: 50, }}
                                    resizeMode='cover'
                                    source={{ uri: stateImage }} />

                            </>
                        </TouchableRipple>
                    }
                    <View style={{ alignItems: 'center' }}>
                        {stateIsValidImage == false ? <Text style={{ color: 'red' }}>Enter Valid Image</Text> : null}
                    </View>
                    <View style={{ marginHorizontal: '10%', marginTop: '5%' }}>
                        <TextInput1 xml={Svgs.humanSvg}
                            label="First Name"
                            onChangeText={(text) => {
                                setStateIsValidFirstName(true)
                                setStateData({
                                    ...stateData, firstName: text
                                })
                            }} />
                        {stateIsValidFirstName == false ? <Text style={{ color: 'red' }}>Enter Valid First Name</Text> : null}
                    </View>

                    <View style={{ marginHorizontal: '10%', marginTop: '3%' }}>
                        <TextInput1 xml={Svgs.humanSvg}
                            label="Last Name"
                            onChangeText={(text) => {
                                setStateIsValidLastName(true)
                                setStateData({
                                    ...stateData, lastName: text
                                })
                            }} />
                        {stateIsValidLastName == false ? <Text style={{ color: 'red' }}>Enter Valid Last Name</Text> : null}
                    </View>

                    <TouchableRipple style={{ marginHorizontal: '10%', marginTop: '3%' }}
                        onPress={showDatepicker}>
                        <TextInput1 xml={Svgs.calender}
                            disabled={true}
                            value={stateData.birthDay}
                            label="Birthday"
                        />
                    </TouchableRipple>

                    <View style={{ marginHorizontal: '10%' }}>
                        {stateIsValidBirthDay == false ? <Text style={{ color: 'red' }}>Enter Valid BirthDay</Text> : null}

                    </View>
                    <TouchableRipple
                        style={{ marginHorizontal: '10%', marginTop: '3%' }}
                        onPress={() => { refRBSheetCity.current.open() }}>
                        <TextInput1 xml={Svgs.city}
                            label="City"
                            disabled={true}
                            value={stateData.city
                            }
                        />

                    </TouchableRipple>
                    <View style={{ marginHorizontal: '10%' }}>
                        {stateIsValidCity == false ? <Text style={{ color: 'red' }}>Enter Valid City</Text> : null}
                    </View>
                    <View style={{ marginHorizontal: '10%', marginTop: '3%' }}>
                        <TextInput1 xml={Svgs.letter}
                            label="Email"
                            onChangeText={(text) => {
                                setStateIsValidEmail(true)
                                setStateData({
                                    ...stateData, email: text
                                })
                            }} />
                        {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}
                    </View>

                    <View style={{ marginHorizontal: '10%', marginTop: '3%' }}>
                        <TextInput1 xml={Svgs.lockSvg}
                            label="Password"
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                setStateIsValidPassword(true)
                                setStateData({
                                    ...stateData, password: text
                                })
                            }} />
                        {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Password</Text> : null}
                    </View>



                    <View style={{
                        flexDirection: 'row',
                        marginHorizontal: '10%',
                        marginTop: '5%',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={STYLES.fontSize20_grey707070_Arial_Regular}>Sex: </Text>
                        <TouchableRipple style={{
                            flexDirection: 'row',
                            //backgroundColor: 'red',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderWidth: 1,
                            width: '60%',
                            height: 50,
                            paddingHorizontal: '5%',

                            borderColor: COLORS.grey707070
                        }} onPress={() => refRBSheetGender.current.open()}
                        >
                            <>
                                <View style={{
                                    height: 50,
                                    justifyContent: 'center'

                                }}>
                                    <Text style={STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                                        {stateData.gender}</Text>


                                </View>
                                <SvgXml xml={Svgs.arrowDown} style={{ marginRight: '3%' }} />

                            </>
                        </TouchableRipple>

                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginHorizontal: '10%',
                        marginTop: '5%',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={STYLES.fontSize20_grey707070_Arial_Regular}>Agency: </Text>
                        <TouchableRipple style={{
                            flexDirection: 'row',
                            //backgroundColor: 'red',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderWidth: 1,
                            width: '60%',
                            height: 50,
                            paddingHorizontal: '5%',

                            borderColor: COLORS.grey707070
                        }} onPress={() => refRBSheetAgency.current.open()}
                        >
                            <>
                                <View style={{
                                    height: 50,
                                    justifyContent: 'center'

                                }}>
                                    <Text style={STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                                        {stateData.agency}</Text>


                                </View>
                                <SvgXml xml={Svgs.arrowDown} style={{ marginRight: '3%' }} />

                            </>
                        </TouchableRipple>

                    </View>
                    <View style={{ marginHorizontal: '10%' }}>
                        {stateIsValidAgency == false ? <Text style={{ color: 'red', alignSelf: 'center' }}>Add  Agency</Text> : null}
                    </View>

                    <View style={{
                        marginHorizontal: '10%',
                        marginTop: '5%',
                        alignItems: 'center'
                    }}>
                        <Text style={STYLES.fontSize24_grey1C1939_Arial_Bold}>Add National ID card</Text>

                        {stateIdCardImage === null ?
                            <TouchableRipple style={{
                                width: '100%',
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 19,
                                borderWidth: 1,
                                marginTop: '5%',
                                borderColor: COLORS.black1A1A1A
                            }}
                                onPress={() => {
                                    refRBSheetIdCardCamera.current.open()
                                }}
                            >

                                <SvgXml xml={Svgs.cameraSvgArrowUp} />
                            </TouchableRipple>
                            :

                            < TouchableRipple style={{
                                width: '100%',
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 19,
                                borderWidth: 1,
                                marginTop: '5%',
                                borderColor: COLORS.black1A1A1A
                            }}
                                onPress={() => refRBSheetIdCardCamera.current.open()}>
                                <>
                                    {console.log('pppppp')}
                                    <Image source={{ uri: stateIdCardImage }}
                                        style={{
                                            height: '100%', width: '100%', flex: 1,
                                            borderRadius: 19,
                                        }} />
                                </>
                            </TouchableRipple>
                        }
                    </View>
                    <View style={{ marginHorizontal: '10%' }}>
                        {stateIsValidIdCardImage == false ? <Text style={{ color: 'red', alignSelf: 'center' }}>Add  Id Card Image</Text> : null}
                    </View>

                    <TouchableRipple style={{ marginHorizontal: '10%', marginTop: '3%' }}
                        onPress={expiryShowDatepicker}>
                        <TextInput1 xml={Svgs.calender}
                            disabled={true}
                            value={stateData.expiryDate}
                            label="Enter Expiry Date"
                        />
                    </TouchableRipple>
                    <View style={{ marginHorizontal: '10%' }}>
                        {stateIsValidExpiryDate == false ? <Text style={{ color: 'red' }}>Enter Valid Expiry Date</Text> : null}
                    </View>
                    <View style={{
                        marginVertical: '5%',
                        marginHorizontal: '10%'
                    }}>
                        <ButtonSvg text="Update"

                            color={COLORS.blue0090FF}
                            xml={Svgs.minusWhite}

                            onPress={() => {
                                update()
                            }} />
                    </View>
                </View>

            </ScrollView>

            {/* Bottom sheet camera        */}
            <RBSheet
                closeOnPressMask={false}
                closeOnDragDown={false}
                height={220}
                animationType="slide"
                ref={refRBSheetCamera}



            >
                <View style={{
                    justifyContent: 'space-evenly', flex: 1,
                    paddingHorizontal: '5%'
                }}>
                    {/* <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>Add Photo! </Text> */}
                    <TouchableOpacity onPress={() => { imageTakeFromCamera() }}>
                        <Text style={STYLES.fontSize25_grey707070_Arial_Regular}>
                            Take Photo Camera </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { imageTakeFromGallery() }}>
                        <Text style={STYLES.fontSize25_grey707070_Arial_Regular}>
                            Take Photo Gallery </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => refRBSheetCamera.current.close()}>
                        <Text style={STYLES.fontSize25_grey707070_Arial_Regular}>Cancel </Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>


            {/* Bottom sheet id card camera        */}
            <RBSheet
                closeOnPressMask={false}
                closeOnDragDown={false}
                height={220}
                animationType="slide"
                ref={refRBSheetIdCardCamera}



            >
                <View style={{
                    justifyContent: 'space-evenly', flex: 1,
                    paddingHorizontal: '5%'
                }}>
                    {/* <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>Add Photo! </Text> */}
                    <TouchableOpacity onPress={() => { imageTakeFromIdCardCamera() }}>
                        <Text style={STYLES.fontSize25_grey707070_Arial_Regular}>
                            Take Photo Camera </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { imageTakeFromIdCardGallery() }}>
                        <Text style={STYLES.fontSize25_grey707070_Arial_Regular}>
                            Take Photo Gallery </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => refRBSheetIdCardCamera.current.close()}>
                        <Text style={STYLES.fontSize25_grey707070_Arial_Regular}>Cancel </Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>

            {/* Bottom sheet gender */}
            <RBSheet
                // closeOnDragDown={true}
                closeOnPressMask={false}
                dragFromTopOnly={true}
                height={230}
                animationType="slide"
                ref={refRBSheetGender}


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
                            SELECT GENDER</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetGender.current.close()}

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
                            {listSelectGender.map((list, index) => {
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
                                            refRBSheetGender.current.close()
                                            setStateData({
                                                ...stateData,
                                                gender: list.value
                                            })

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


            {/* Bottom sheet Agency */}
            <RBSheet
                // closeOnDragDown={true}
                closeOnPressMask={false}
                dragFromTopOnly={true}
                height={330}
                animationType="slide"
                ref={refRBSheetAgency}


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
                            SELECT Agency</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetAgency.current.close()}

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
                            {listAgency.map((list, index) => {
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
                                            refRBSheetAgency.current.close()
                                            setStateData({
                                                ...stateData,
                                                agency: list.value
                                            })
                                            setStateIsValidAgency(true)

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



            {/* Bottom sheet city */}
            <RBSheet
                // closeOnDragDown={true}
                closeOnPressMask={false}
                dragFromTopOnly={true}
                height={330}
                animationType="slide"
                ref={refRBSheetCity}


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
                            SELECT City</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetCity.current.close()}

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
                            {listCity.map((list, index) => {
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
                                            refRBSheetCity.current.close()
                                            setStateData({
                                                ...stateData,
                                                city: list.value
                                            })
                                            setStateIsValidCity(true)

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

            {
                show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )
            }

            {
                expiryShow && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={expiryDate}
                        mode={expiryMode}
                        is24Hour={true}
                        display="default"
                        onChange={onChangeExpireDate}
                    />
                )
            }

        </SafeAreaView >
    );

};

EditMembers.propTypes = {

};

export default EditMembers;