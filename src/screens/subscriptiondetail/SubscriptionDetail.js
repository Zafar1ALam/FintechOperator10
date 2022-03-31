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
import styles from './styles';
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

const SubscriptionDetail = ({ navigation }) => {
    const refRBSheetAction = useRef();

    const [listSubscription, setListSubscription] = useState([
        {
            code: '010001',
            name: "Product name",
            duration: "3 month",
            collectionBalance: "30 $",
            id: 1
        },
        {
            code: '010001',
            name: "Product name",
            duration: "3 month",
            collectionBalance: "30 $",
            id: 2
        },
        {
            code: '010001',
            name: "Product name",
            duration: "3 month",
            collectionBalance: "30 $",
            id: 3
        },
        {
            code: '010001',
            name: "Product name",
            duration: "3 month",
            collectionBalance: "30 $",
            id: 4
        },
        {
            code: '010001',
            name: "Product name",
            duration: "3 month",
            collectionBalance: "30 $",
            id: 5
        },
        {
            code: '010001',
            name: "Product name",
            duration: "3 month",
            collectionBalance: "30 $",
            id: 6
        },
        {
            code: '010001',
            name: "Product name",
            duration: "3 month",
            collectionBalance: "30 $",
            id: 7
        },
        {
            code: '010001',
            name: "Product name",
            duration: "3 month",
            collectionBalance: "30 $",
            id: 8
        },
        {
            code: '010001',
            name: "Product name",
            duration: "3 month",
            collectionBalance: "30 $",
            id: 9
        },
        {
            code: '010001',
            name: "Product name",
            duration: "3 month",
            collectionBalance: "30 $",
            id: 10
        },



    ]);


    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 130 }}>
                    <CustomHeader text="Subscription Detail" xml={Svgs.subscription}
                        onPress={() => { navigation.goBack() }} />
                </View>


                <View style={{
                    flexDirection: 'row',
                    //justifyContent: 'space-between',
                    paddingHorizontal: '5%',
                    marginTop: '3%'

                }}>
                    <View style={{ width: '35%' }}>
                        <Text style={STYLES.fontSize20_blue0090FF_Arial_Bold}>
                            Customer NAME :
                        </Text>
                    </View>
                    <View style={{ width: '65%' }}>
                        <Text style={STYLES.fontSize20_black000000_Arial_Regular}>
                            Customer Name Here
                        </Text>
                    </View>
                </View>

                <View style={{ paddingHorizontal: '5%', marginTop: '7%' }}>
                    <Text style={STYLES.fontSize20_blue0090FF_Arial_Bold}>
                        Subscriptions:
                    </Text>
                </View>



                <View style={{
                    flexDirection: 'row',// paddingHorizontal: '5%',
                    width: '90%', alignSelf: 'center'
                }}>
                    <View style={{
                        width: '17%', justifyContent: 'center',
                        // alignItems: 'center'
                        // backgroundColor: 'red'
                    }}>
                        <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                        { textAlign: 'center' }]}>Code</Text>
                    </View>
                    <View style={{
                        width: '21%', justifyContent: 'center',
                        //  alignItems: 'center'
                        //backgroundColor: 'green'
                    }}>
                        <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                        { textAlign: 'center' }]}>Name</Text>
                    </View>
                    <View style={{
                        width: '20%', justifyContent: 'center',
                        //alignItems: 'center'
                        //     backgroundColor: 'blue'
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
                    <View style={{
                        width: '17%', justifyContent: 'center',
                        //  alignItems: 'center'
                        //   backgroundColor: 'orange'
                    }}>
                        <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                        { textAlign: 'center' }]}>Action</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    {
                        listSubscription.map((data, index) => {
                            return (
                                <View key={index}
                                    style={{
                                        flexDirection: 'row', height: 60,

                                        borderBottomColor: COLORS.grey707070_51,
                                        borderBottomWidth: 0.4,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>

                                    <View style={{
                                        width: '17%',
                                        //backgroundColor: 'red',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                        { textAlign: 'center' }]}>{data.code}</Text>
                                    </View>
                                    <View style={{
                                        width: '21%', alignItems: 'center',
                                        // backgroundColor: 'green'
                                    }}>
                                        <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                        { textAlign: 'center' }]}>{data.name}</Text>
                                    </View>
                                    <View style={{
                                        width: '20%', alignItems: 'center',
                                        // backgroundColor: 'blue'
                                    }}>
                                        <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                        { textAlign: 'center' }]}>{data.duration}</Text>
                                    </View>
                                    <View style={{
                                        width: '25%', alignItems: 'center',
                                        //  backgroundColor: 'orange'
                                    }}>
                                        <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                        { textAlign: 'center' }]}>{data.collectionBalance}</Text>
                                    </View>
                                    <View style={{ width: '17%', alignItems: 'center', }}>
                                        <TouchableRipple style={{
                                            paddingHorizontal: '2%', paddingVertical: '2%'
                                            // backgroundColor: 'pink'
                                        }}
                                            onPress={() => { refRBSheetAction.current.open() }}>
                                            <SvgXml xml={Svgs.eye} />
                                        </TouchableRipple>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>

                <View style={{
                    marginVertical: '5%',
                    marginHorizontal: '10%'
                }}>
                    <ButtonSvg text="Add"
                        xml={Svgs.plusCircleWhite}
                        color={COLORS.orangeFD941E}
                        onPress={() => {
                            navigation.navigate("AddSubscription")
                        }} />
                </View>
            </ScrollView>


            {/* Bottom sheet Action        */}
            <RBSheet
                closeOnPressMask={false}
                closeOnDragDown={false}
                height={420}
                animationType="slide"
                ref={refRBSheetAction}



            >
                <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                    <View style={{
                        flexDirection: 'row', justifyContent:
                            'space-between',
                        marginBottom: '5%',
                        marginTop: '5%'
                    }}>
                        <Text style={STYLES.fontSize24_orangeFD941E_Arial_Bold}>
                            CUSTOMER NAME</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetAction.current.close()}

                            style={{


                            }}>
                            <SvgXml xml={Svgs.crossBlue} />
                        </TouchableRipple>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <LeftTextRightButton text="OPEN" />
                        </View>


                        <View style={{
                            paddingVertical: '5%', borderBottomWidth: 1,
                            borderBottomColor: COLORS.grey707070_51
                        }}>
                            <LeftTextBlueRightTextBlack text1="Duration"
                                text2="1 Month" />
                        </View>
                        <View style={{
                            paddingVertical: '5%', borderBottomWidth: 1,
                            borderBottomColor: COLORS.grey707070_51
                        }}>
                            <LeftTextBlueRightTextBlack text1="Code :"
                                text2="01010101" />
                        </View>
                        <View style={{
                            paddingVertical: '5%', borderBottomWidth: 1,
                            borderBottomColor: COLORS.grey707070_51
                        }}>
                            <LeftTextBlueRightTextBlack text1="Code :"
                                text2="01010101" />
                        </View>
                        <View style={{
                            paddingVertical: '5%', borderBottomWidth: 1,
                            borderBottomColor: COLORS.grey707070_51
                        }}>
                            <LeftTextBlueRightTextBlack text1="Product Name :"
                                text2="Product Name Here" />
                        </View>
                        <View style={{
                            paddingVertical: '5%', borderBottomWidth: 1,
                            borderBottomColor: COLORS.grey707070_51
                        }}>
                            <LeftTextBlueRightTextBlack text1="Starting Date :"
                                text2="01-01-2021" />
                        </View>
                        <View style={{
                            paddingVertical: '5%', borderBottomWidth: 1,
                            borderBottomColor: COLORS.grey707070_51
                        }}>
                            <LeftTextBlueRightTextBlack text1="Ending Date :"
                                text2="01-01-2021" />

                        </View>
                        <View style={{
                            paddingVertical: '5%', borderBottomWidth: 1,
                            borderBottomColor: COLORS.grey707070_51
                        }}>
                            <LeftTextBlueRightTextBlack text1="Total Amount:"
                                text2="100 $" />

                        </View>

                        <View style={{
                            marginVertical: '5%',
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}>
                            <View style={{ width: '45%', }}>
                                <ButtonSvg text="Cash Register"
                                    xml={Svgs.minusCircleWhite}
                                    color={COLORS.blue0090FF}
                                    onPress={() => {
                                        //  add()
                                    }} />
                            </View>
                            <View style={{ width: '45%', }}>
                                <ButtonSvg text="Delete"
                                    xml={Svgs.crossWhite}
                                    color={COLORS.orangeFD941E}
                                    onPress={() => {
                                        refRBSheetAction.current.close()
                                    }} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </RBSheet>
        </SafeAreaView>
    );
};



SubscriptionDetail.propTypes = {

};

export default SubscriptionDetail;