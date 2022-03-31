import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView, View, ScrollView, Alert, StyleSheet,
    TouchableOpacity
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SvgXml } from 'react-native-svg'
import { Text, TouchableRipple, DataTable } from 'react-native-paper'
import Svgs from '../../utills/svgs/Svgs';
import COLORS from '../../utills/colors/Color';
import TextInput1 from '../../components/TextInput1/TextInput1';
import STYLES from '../../STYLES/STYLES';
import Button1 from '../../components/Button1.js/Button1';
import style from './style';
import Box from '../../components/Box/Box'
import CustomHeader from '../../components/customheader/CustomHeader';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import ButtonSvg from '../../components/buttonsvg/ButtonSvg';
const ManageMembers = ({ navigation }) => {
    const [stateTable, setStateTable] = useState({
        tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
        tableData: [
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd']
        ]
    })


    const tableHead = ['Name', 'Phone No', 'Subscription Accounts', 'Action']
    const tableData = [
        ['Customer', '70724233', 'Manage', '4'],
        ['Customer', '70724233', 'Manage', '4'],
        ['Customer', '70724233', 'Manage', '4'],
        ['Customer', '70724233', 'Manage', '4'],
    ]
    const widthArr = ["25%", "25%", "25%", "25%"]
    var [listAccount, setListAccount] = useState([
        {
            id: 1,
            Name: 'Customer',
            PhoneNo: '70724233',
            Subscription_Accounts: 'Manage',
        },
        {
            id: 2,
            Name: 'Customer',
            PhoneNo: '70724233',
            Subscription_Accounts: 'Manage',
        },
        {
            id: 3,
            Name: 'Customer',
            PhoneNo: '70724233',
            Subscription_Accounts: 'Manage',
        },
        {
            id: 4,
            Name: 'Customer',
            PhoneNo: '70724233',
            Subscription_Accounts: 'Manage',
        },
        {
            id: 5,
            Name: 'Customer',
            PhoneNo: '70724233',
            Subscription_Accounts: 'Manage',
        },
        {
            id: 6,
            Name: 'Customer',
            PhoneNo: '70724233',
            Subscription_Accounts: 'Manage',
        },
        {
            id: 7,
            Name: 'Customer',
            PhoneNo: '70724233',
            Subscription_Accounts: 'Manage',
        },
        {
            id: 8,
            Name: 'Customer',
            PhoneNo: '70724233',
            Subscription_Accounts: 'Manage',
        },
        {
            id: 9,
            Name: 'Customer',
            PhoneNo: '70724233',
            Subscription_Accounts: 'Manage',
        },
    ]);
    const _alertIndex = (index) => {
        Alert.alert(`This is row ${index + 1}`);
    }
    const element = (data, index) => (
        <TouchableOpacity onPress={() => navigation.navigate('Members')}>
            <View style={style.btn}>
                {/* <Text style={styles.btnText}>button</Text> */}
                <Ionicons name={'eye'}
                    size={25} color={'orange'}
                />
            </View>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 130 }}>
                    <CustomHeader text="Manage members"
                        xml={Svgs.house}
                        onPress={() => { navigation.goBack() }}
                    />
                </View>




                {/* <Table borderStyle={{ borderColor: 'transparent' }}>
                <Row data={tableHead} style={styles.head}
                    widthArr={widthArr}
                    textStyle={styles.text} />
                {
                    tableData.map((rowData, id) => (
                        <TableWrapper key={id} style={styles.row}>
                            {
                                rowData.map((cellData, cellIndex) => (
                                    <Cell key={cellIndex}
                                        data={cellIndex === 3 ?
                                            element(cellData, index) : cellData}
                                        textStyle={styles.text1} />
                                ))
                            }
                        </TableWrapper>
                    ))
                }
            </Table> */}

                <View style={{
                    flexDirection: 'row',// paddingHorizontal: '5%',
                    width: '90%', alignSelf: 'center',
                    marginTop: '5%'
                }}>
                    <View style={{
                        width: '25%', justifyContent: 'center',
                        // alignItems: 'center'
                        // backgroundColor: 'red'
                    }}>
                        <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                        { textAlign: 'center' }]}>Name</Text>
                    </View>
                    <View style={{
                        width: '25%', justifyContent: 'center',
                        //  alignItems: 'center'
                        //backgroundColor: 'green'
                    }}>
                        <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                        { textAlign: 'center' }]}>Phone No</Text>
                    </View>

                    <View style={{
                        width: '30%', justifyContent: 'center',
                        //  alignItems: 'center'
                        //    backgroundColor: 'pink'
                    }}>
                        <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                        { textAlign: 'center' }]}>Subscription Accounts</Text>
                    </View>
                    <View style={{
                        width: '20%', justifyContent: 'center',
                        //  alignItems: 'center'
                        //   backgroundColor: 'orange'
                    }}>
                        <Text style={[STYLES.fontSize16_blue0090FF_Arial_Bold,
                        { textAlign: 'center' }]}>Action</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    {
                        listAccount.map((data, index) => {
                            return (
                                <View key={index}
                                    style={{
                                        flexDirection: 'row', height: 60,

                                        borderBottomColor: COLORS.grey707070_51,
                                        borderBottomWidth: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>

                                    <View style={{
                                        width: '25%',
                                        //backgroundColor: 'red',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                        { textAlign: 'center' }]}>{data.Name}</Text>
                                    </View>
                                    <View style={{
                                        width: '25%', alignItems: 'center',
                                        // backgroundColor: 'green'
                                    }}>
                                        <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                        { textAlign: 'center' }]}>{data.PhoneNo}</Text>
                                    </View>
                                    <View style={{
                                        width: '30%', alignItems: 'center',
                                        // backgroundColor: 'blue'
                                    }}>
                                        <Text style={[STYLES.fontSize14_black161923_Arial_Regular,
                                        { textAlign: 'center' }]}>{data.Subscription_Accounts}</Text>
                                    </View>

                                    <View style={{
                                        width: '20%', alignItems: 'center',
                                        // backgroundColor: 'pink'
                                    }}>
                                        <TouchableRipple
                                            style={{ paddingHorizontal: '2%', paddingVertical: '2%' }}
                                            onPress={() => { navigation.navigate("ViewAddMembers") }}>


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
                            navigation.navigate("AddMembers")
                        }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

ManageMembers.propTypes = {

};

export default ManageMembers;


// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//     head: { height: 40, backgroundColor: '#f1f8ff' },
//     text: { margin: 6 }
// });