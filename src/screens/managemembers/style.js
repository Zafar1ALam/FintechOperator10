import {
    Dimensions,
    StyleSheet
} from 'react-native';
const { height } = Dimensions.get("screen");

import COLORS from '../../utills/colors/Color';
const style = StyleSheet.create({

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
        fontWeight: 'bold', color: COLORS.blue0090FF,
        textAlign: 'center'
    },
    container1: {
        flex: 0,
        marginHorizontal: '25%',
        padding: '5%', paddingLeft: '15%',
        backgroundColor: '#fff'
    },
    head: {
        height: 80, backgroundColor: COLORS.whiteFFFFFF,
        alignItems: 'center'
        , color: 'black', width: '100%',
        alignSelf: 'center', //justifyContent: 'center'
        justifyContent: 'space-evenly',
        paddingHorizontal: '1%'

    },
    text: {
        textAlign: 'center'
    },
    // text: { margin: 6 },
    text1: { margin: '12%', color: 'black', fontWeight: '400', alignSelf: 'center' },
    row: {
        flexDirection: 'row', backgroundColor: 'white',
        borderBottomWidth: 1, borderBottomColor: COLORS.grey707070_51,
        width: '100%', alignSelf: 'center',
        justifyContent: 'space-between'
    },
    btn: { width: 58, height: 30, alignSelf: "center" },
    btnText: { textAlign: 'center', color: 'black', textAlign: 'center' }

});

style.propTypes = {

};

export default style;