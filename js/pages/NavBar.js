import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import {
    widthToDp,
    heightToDp
} from '../common/pxToDp';



//获取设备的宽度和高度
const {
    width: deviceWidth
} = Dimensions.get('window');

export default class NavBar extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log(this.props.navigation.state);
        return (
            //根View
            <View style={styles.button}>
                <Text style={styles.textStyle}>测试啥进度和加快</Text>
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
        height: heightToDp(89),
        backgroundColor: $white,
        justifyContent: 'center'
    },
    textStyle: {
        fontWeight: '200',
        fontSize: widthToDp(30),
        textAlign: 'center'
    }
});