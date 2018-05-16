import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import pxToDp from '../common/pxToDp';



//获取设备的宽度和高度
const {
    width: deviceWidth
} = Dimensions.get('window');

export default class NavBar extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            //根View
            <View style={styles.button}>
            </View>
        );
    }
}

const $white = '#ffffff';
//样式
const styles = StyleSheet.create({
    // naviRow: {
    //     flexDirection: 'row',
    //     height: pxToDp(89),
    //     backgroundColor: $white,
    //     opacity: 0.95
    // },
    button: {
        width: deviceWidth / 3, //导航栏每个标签宽度为屏幕1/4
        height: pxToDp(89),
        backgroundColor: $white,
        justifyContent: 'center'
    },
    textStyle: {
        fontWeight: '200',
        fontSize: pxToDp(30),
        textAlign: 'center'
    }
});