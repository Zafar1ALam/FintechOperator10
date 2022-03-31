import {
    Dimensions,
    StyleSheet
} from 'react-native';
const { height } = Dimensions.get("screen");

import COLORS from '../../utills/colors/Color';


const style = StyleSheet.create({
    input: {
        //width: '89%',

        backgroundColor: COLORS.whiteFFFFFF
        //backgroundColor: COLORS.black000000,
        //  height: "100%",
        // padding: 5
    },

})


style.propTypes = {

};

export default style;