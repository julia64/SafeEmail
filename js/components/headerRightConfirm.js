/*
 * @Author: WZJ
 * @Date:   2018-05-16 16:38:51
 * @Last Modified by:   WZJ
 * @Last Modified time: 2018-05-16 17:31:38
 */
import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text
} from 'react-native';
import {
	widthToDp,
	heightToDp
} from '../common/pxToDp';

const headerRightConfirm = () => (
	<View>
		<TouchableOpacity
			style={styles.container}
			onPress={()=>{
				console.log(this.props);
			    const {
			        navigate
			    } = this.props.navigation;
			}}
		>
			<Text style={styles.text}>确定</Text>
		</TouchableOpacity>
	</View>
)
//样式
const styles = StyleSheet.create({
	container: {
		marginRight: widthToDp(30)
	},
	text: {
		fontSize: widthToDp(32),
		color: '#0d81ff',
		fontFamily: 'PingFang-SC-Regular'
	}
});

export default headerRightConfirm;