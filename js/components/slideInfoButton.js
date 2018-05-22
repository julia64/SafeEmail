/*
 * @Author: WZJ
 * @Date:   2018-05-16 15:37:43
 * @Last Modified by:   guoyu19961004
 * @Last Modified time: 2018-05-22 20:10:42
 * @Description 导航栏左边按钮组件
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
} from '../utils/pxToDp';

const slideInfoButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=>{
                    console.log('sdhjfaghj');
                }}
            >
                <Image
                    style={styles.image}
                    source={require('../../res/images/emailbox/info.png')}
                />
            </TouchableOpacity>
        </View>
    );
};
//样式
const styles = StyleSheet.create({
    container: {
        marginLeft: widthToDp(30)
    },
    image: {
        width: widthToDp(36),
        height: heightToDp(30),
        justifyContent: 'center'
    }
});

export default slideInfoButton;