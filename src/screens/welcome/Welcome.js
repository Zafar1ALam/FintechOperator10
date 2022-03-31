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
import Box from '../../components/Box/Box'
const Welcome = ({ navigation }) => {
    const [stateName, setStateName] = useState("Subtain");


    // useEffect(() => {
    //     getMyObject()
    // }, [])
    // const getMyObject = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('ownerName')
    //         if (jsonValue != null) {
    //             return (
    //                 setStateName(jsonValue)
    //                 //  console.log('appname'),
    //             )
    //         }
    //         else {
    //             return (
    //                 null
    //             )
    //         }
    //     } catch (e) {
    //         alert(e)
    //     }
    // }
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[{
                    backgroundColor: COLORS.blue0090FF,
                    //    height: '20%',
                    height: 120,
                    justifyContent: 'center', paddingLeft: '10%'
                }]}>
                    <Text style={STYLES.fontSize27_whiteFFFFFF_Arial_Bold}>Welcome , {stateName}</Text>

                </View>
                <View style={{
                    // backgroundColor: 'green',
                    paddingHorizontal: '7%',
                    //justifyContent: 'space-between',
                    //height: '80%',
                    paddingVertical: '5%'
                }}>
                    <View style={{
                        flexDirection: 'row', //width: '70%',
                        marginTop: '5%', justifyContent: 'space-between'
                    }}>
                        <Box xml={Svgs.manageMember} text="MANAGE MEMEBER"
                            onPress={() => navigation.navigate("ManageMembers")} />
                        <Box xml={Svgs.manageSubscription} text="MANAGE SUBSCRIPTION"
                            onPress={() => navigation.navigate("Subscription")} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: '5%', justifyContent: 'space-between'
                    }}>
                        <Box xml={Svgs.myCashRegister} text="MANAGE CASH CASHIER"
                            onPress={() => navigation.navigate("ManageCashRegister")} />
                        <Box xml={Svgs.manageColloection} text="MANAGE COLLECTION"
                            onPress={() => navigation.navigate("ManageCollection")} />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: '5%', justifyContent: 'space-between'
                    }}>
                        <Box xml={Svgs.myCashRegister} text="MY CASH REGISTER"
                            onPress={() => navigation.navigate("MyCashRegister")} />
                        <Box xml={Svgs.report} text="REPORT"
                            onPress={() => navigation.navigate("SeeReport")} />
                    </View>

                </View>
                <View style={{

                    //  backgroundColor: 'green',
                    marginTop: '5%',
                    paddingHorizontal: '5%',
                    marginBottom: '5%'
                }}>

                    {/* <View style={{
                    marginBottom: '7%',
                    // backgroundColor: 'pink'
                }}> */}
                    <Button1 text="LOGOUT"
                        onPress={() => navigation.navigate("SignIn")} />

                    {/* </View> */}

                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

Welcome.propTypes = {

};

export default Welcome;