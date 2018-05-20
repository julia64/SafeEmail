/*
 * @Author: guoyu
 * @Date:   2018-05-20 14:13:09
 * @Last Modified by:   guoyu
 * @Last Modified time: 2018-05-20 17:05:55
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    widthToDp
} from '../common/pxToDp';

const headerTitle = (props) => (
    <View>
        <View style={styles.container}>
            <Text style={props.style[1]}>{props.children}</Text>
            <Text style={styles.acount}>{'test@test.com'}</Text>
        </View>
    </View>
);

const $textFontColor = '#81858a';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    acount: {
        textAlign: 'center',
        fontSize: widthToDp(22),
        fontFamily: 'PingFang-SC-Light',
        color: $textFontColor
    }
});
export default headerTitle;