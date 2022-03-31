// import React, { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
// import {
//     SafeAreaView, View, ScrollView, Alert, StyleSheet,
//     TouchableOpacity, Image, Dimensions, FlatList
// } from 'react-native'
// import ImagePicker from 'react-native-image-crop-picker';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import { SvgXml } from 'react-native-svg'
// import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

// import {
//     Text, TouchableRipple, DataTable, TextInput,
//     Button
// } from 'react-native-paper'
// import Svgs from '../../utills/svgs/Svgs';
// import COLORS from '../../utills/colors/Color';
// import TextInput1 from '../../components/TextInput1/TextInput1';
// import STYLES from '../../STYLES/STYLES';
// import Button1 from '../../components/Button1.js/Button1';
// import RBSheet from 'react-native-raw-bottom-sheet';

// import DateTimePicker from '@react-native-community/datetimepicker';
// import CustomHeader from '../../components/customheader/CustomHeader';
// import LeftTextRightText from '../../components/lefttextrighttext/LeftTextRightText';
// import ButtonSvg from '../../components/buttonsvg/ButtonSvg';
// import LeftTextRightButton from '../../components/lefttextrightbutton/LeftTextRightButton';
// import LeftTextBlueRightTextBlack from '../../components/lefttextbluerighttextblack/LeftTextBlueRightTextBlack';
// import CustomHeaderBiggerWidth from '../../components/customheaderbiggerwidth/CustomHeaderBiggerWidth';

// const AgencyNameManageOperators = props => {
//     const [listSubscription, setListSubscription] = useState([
//         {
//             code: '010001',
//             label: "Customer 2",
//             noOfSub: "3",
//             id: 1
//         },
//         {
//             code: '010001',
//             label: "Customer 2",
//             noOfSub: "3",
//             id: 2
//         },
//         {
//             code: '010001',
//             label: "Customer 2",
//             noOfSub: "3",
//             id: 3
//         },
//         {
//             code: '010001',
//             label: "Customer 2",
//             noOfSub: "3",
//             id: 4
//         },
//         {
//             code: '010001',
//             label: "Customer 2",
//             noOfSub: "3",
//             id: 5
//         },
//         {
//             code: '010001',
//             label: "Customer 2",
//             noOfSub: "3",
//             id: 6
//         },
//         {
//             code: '010001',
//             label: "Customer 2 ",
//             noOfSub: "3",
//             id: 7
//         },
//         {
//             code: '010001',
//             label: "Customer 2",
//             noOfSub: "3",
//             id: 8
//         },
//         {
//             code: '010001',
//             label: "Customer 2",
//             noOfSub: "3",
//             id: 9
//         },
//         {
//             code: '010001',
//             label: "Customer 2",
//             noOfSub: "3",
//             id: 10
//         },



//     ]);
//     return (
//         <SafeAreaView style={STYLES.withoutpaddingcontainer}>
//             <ScrollView>
//                 <View style={{ height: 130 }}>
//                     <CustomHeaderBiggerWidth
//                         width="70%"
//                         text="Agency Name Manage Operators" xml={Svgs.humanSvg} />
//                 </View>

//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// AgencyNameManageOperators.propTypes = {

// };

// export default AgencyNameManageOperators;