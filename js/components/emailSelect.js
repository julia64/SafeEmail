/*
 * @Author: guoyu
 * @Date:   2018-05-23 14:39:29
 * @Last Modified by:   guoyu
 * @Last Modified time: 2018-05-23 16:37:10
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

const emailSelect = ({
    navigation
}) => (
    <View>
        <TouchableOpacity
            style={styles.container}
            onPress={()=>{
                emitter.emit('emailSelect');
            }}
        >
            <Text style={styles.text}>{navigation.getParam('selectAll',false)?'取消全选':'全选'}</Text>
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

export default emailSelect;