import * as React from 'react';
import { Button } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Svgs from '../../utills/svgs/Svgs';
const Buttonicon = props => {
    return (
        <Button icon={() => <SvgXml
            xml={props.xml} />}
            mode="contained" onPress={() => console.log('Pressed')}>
            {props.text}
        </Button>
    );
};

Buttonicon.propTypes = {

};

export default Buttonicon;