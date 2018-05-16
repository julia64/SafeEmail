/*
 * @Author: WZJ
 * @Date:   2018-05-16 15:37:43
 * @Last Modified by:   WZJ
 * @Last Modified time: 2018-05-16 16:25:33
 */
import React from 'react';
import {
	StyleSheet,
	View,
	Image
} from 'react-native';
import {
	widthToDp,
	heightToDp
} from '../common/pxToDp';
const headerBackImage = () => (
	<View style={styles.container}>
    	<Image
    		style={styles.image}
    		source={require('../../res/images/emailbox/back.png')}
    	/>
	</View>
)
//样式
const styles = StyleSheet.create({
	container: {
		marginLeft: widthToDp(30)
	},
	image: {
		width: widthToDp(18),
		height: heightToDp(33),
		justifyContent: 'center'
	}
});

export default headerBackImage;