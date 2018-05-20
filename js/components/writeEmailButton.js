/*
 * @Author: WZJ
 * @Date:   2018-05-16 16:38:51
 * @Last Modified by:   guoyu
 * @Last Modified time: 2018-05-20 15:53:20
 * @Description 导航栏右边确定按钮
 */
import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    widthToDp,
    heightToDp
} from '../common/pxToDp';

const writeEmailButton = ({
    navigation
}) => (
    <View>
        <TouchableOpacity
            style={styles.container}
            onPress={()=>{
                console.log(navigation);
            }}
        >
            <Image
                style={styles.image}
                source={require('../../res/images/emailbox/write_email.png')}
            />
        </TouchableOpacity>
    </View>
);
//样式
const styles = StyleSheet.create({
    container: {
        marginRight: widthToDp(30)
    },
    image: {
        width: widthToDp(36),
        height: heightToDp(36),
        justifyContent: 'center'
    }
});

export default writeEmailButton;