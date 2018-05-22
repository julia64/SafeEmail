/*
 * @Author: WZJ
 * @Date:   2018-05-16 16:38:51
 * @Last Modified by:   guoyu19961004
 * @Last Modified time: 2018-05-22 20:08:03
 * @Description 导航栏右边确定按钮
 */
import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import {
    widthToDp
} from '../utils/pxToDp';
import emitter from '../utils/events';

const headerRightConfirm = () => (
    <View>
        <TouchableOpacity
            style={styles.container}
            onPress={()=>{
                emitter.emit('confirmButton');
            }}
        >
            <Text style={styles.text}>确定</Text>
        </TouchableOpacity>
    </View>
);
const $textColor = '#0d81ff';
//样式
const styles = StyleSheet.create({
    container: {
        marginRight: widthToDp(30)
    },
    text: {
        fontSize: widthToDp(32),
        color: $textColor,
        fontFamily: 'PingFang-SC-Regular'
    }
});

export default headerRightConfirm;