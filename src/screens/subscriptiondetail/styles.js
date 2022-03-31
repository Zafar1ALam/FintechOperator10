import {
    Dimensions,
    StyleSheet
} from 'react-native';



import Colors from '../../utills/colors/Color';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //paddingVertical:wp('5%'),
        // paddingHorizontal:wp('5%')
    },
    buttonview:
    {
        //backgroundColor:'red',
        flex: 1,
        justifyContent: 'flex-end',
        //marginBottom:'15%'
        //margin:wp('10%')
    },
    DataTabletext:
    {
        fontWeight: 'bold', color: Colors.headercolor,
        textAlign: 'center'
    },
    container1: {
        flex: 0,
        marginHorizontal: '25%',
        padding: '5%', paddingLeft: '15%',
        backgroundColor: '#fff'
    },
    head: { width: '100%', height: 80, backgroundColor: '#F1F8FF', color: 'black' },
    text: { margin: '12%', color: Colors.headercolor, fontWeight: '500' },
    text1: { margin: '12%', color: 'black', fontWeight: '400' },
    row: { flexDirection: 'row', backgroundColor: 'white', },
    btn: { width: 58, height: 30, alignSelf: "center" },
    btnText: { textAlign: 'center', color: 'black', textAlign: 'center' }
});
export default styles;