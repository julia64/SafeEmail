/*
 * @Author: guoyu
 * @Date:   2018-05-20 14:13:09
 * @Last Modified by:   guoyu19961004
 * @Last Modified time: 2018-05-22 20:08:06
 */
import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    widthToDp
} from '../utils/pxToDp';
const headerTitle = (props) => (
    <View style={styles.container}>
        <Text style={props.style[1]}>{props.children}</Text>
        <Text style={styles.account}>{'test@test.com'}</Text>
    </View>
);

const $textFontColor = '#81858a';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    account: {
        textAlign: 'center',
        fontSize: widthToDp(22),
        fontFamily: 'PingFang-SC-Light',
        color: $textFontColor,
    }
});
export default headerTitle;