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

const Subscription = ({ navigation }) => {
    const [listSubscription, setListSubscription] = useState([
        {
            code: '010001',
            label: "Customer 2",
            noOfSub: "3",
            id: 1
        },
        {
            code: '010001',
            label: "Customer 2",
            noOfSub: "3",
            id: 2
        },
        {
            code: '010001',
            label: "Customer 2",
            noOfSub: "3",
            id: 3
        },
        {
            code: '010001',
            label: "Customer 2",
            noOfSub: "3",
            id: 4
        },
        {
            code: '010001',
            label: "Customer 2",
            noOfSub: "3",
            id: 5
        },
        {
            code: '010001',
            label: "Customer 2",
            noOfSub: "3",
            id: 6
        },
        {
            code: '010001',
            label: "Customer 2 ",
            noOfSub: "3",
            id: 7
        },
        {
            code: '010001',
            label: "Customer 2",
            noOfSub: "3",
            id: 8
        },
        {
            code: '010001',
            label: "Customer 2",
            noOfSub: "3",
            id: 9
        },
        {
            code: '010001',
            label: "Customer 2",
            noOfSub: "3",
            id: 10
        },



    ]);
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 130 }}>
                    <CustomHeader
                        text="Subscription"
                        xml={Svgs.subscription}
                        onPress={() => { navigation.goBack() }} />
                </View>
                <DataTable style={{ marginTop: '5%' }}>
                    <DataTable.Header style={{
                        borderBottomWidth: 0
                    }}>
                        <DataTable.Title style={{
                            //backgroundColor: 'red'
                            justifyContent: 'center'
                        }}>

                            <View style={{

                            }}>
                                <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                                {
                                    textAlign: 'center',
                                    alignSelf: 'stretch',// backgroundColor: 'green'
                                }]}>Code</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }} >
                            <Text style={STYLES.fontSize16_blue0090FF_Arial_Bold}
                            >Label</Text>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }} >
                            <Text style={STYLES.fontSize16_blue0090FF_Arial_Bold}
                                numberOfLines={2}>no of Sub</Text>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }} >
                            <Text style={STYLES.fontSize16_blue0090FF_Arial_Bold}>Action</Text>
                        </DataTable.Title>

                    </DataTable.Header>
                    {
                        listSubscription.map((records) => {
                            return (
                                <View key={records.id}>
                                    <DataTable.Row
                                        style={{ borderBottomWidth: 0, height: 70 }}>
                                        <DataTable.Cell style={{ justifyContent: 'center' }}>
                                            <Text style={STYLES.fontSize14_black161923_Arial_Regular}>{records.code}</Text></DataTable.Cell>
                                        <DataTable.Cell style={{ justifyContent: 'center' }} >
                                            <Text style={STYLES.fontSize14_black161923_Arial_Regular}>{records.label}</Text></DataTable.Cell>
                                        <DataTable.Cell style={{ justifyContent: 'center' }} ><Text
                                            style={STYLES.fontSize14_black161923_Arial_Regular}>{records.noOfSub}</Text></DataTable.Cell>

                                        <DataTable.Cell style={{
                                            //  backgroundColor: 'green',
                                            //  justifyContent: 'space-evenly'
                                            justifyContent: 'center'
                                        }}>

                                            <TouchableRipple style={{
                                                paddingHorizontal: '1%', paddingVertical: '2%'

                                            }} onPress={() => { navigation.navigate("SubscriptionDetail") }}>
                                                <SvgXml xml={Svgs.eye} />
                                            </TouchableRipple>


                                        </DataTable.Cell>


                                    </DataTable.Row>
                                    <View style={{
                                        width: '85%',
                                        alignSelf: 'center',
                                        borderBottomWidth: 1,
                                        borderBottomColor: COLORS.grey707070_51
                                    }}></View>
                                </View>
                            )
                        })
                    }



                </DataTable>
            </ScrollView>
        </SafeAreaView>
    );
};

Subscription.propTypes = {

};

export default Subscription;