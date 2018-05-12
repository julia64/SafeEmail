import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import pxToDp from '../common/pxToDp';

//获取设备的宽度和高度
let {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

export default class NavBar extends Component {
    componentWillMount() {
        //通过属性得知哪个导航按钮是当前的导航也，这个导航按钮将用灰色背景
        this.buttonColors = this.props.naviBarStatus.map(
            function(aNumber) {
                if (aNumber == 0) return '#ffffff';
                return '#0d81ff';
            }
        );
        this.buttonTextColors = this.props.naviBarStatus.map(
            function(aNumber) {
                if (aNumber == 0) return '#31353b';
                return '#ffffff';
            }
        );
    }

    //四个按钮被按下时处理函数
    _naviTab0Pressed() {
        this.props.onNaviBarPress(0);
    }

    _naviTab1Pressed() {
        this.props.onNaviBarPress(1);
    }

    _naviTab2Pressed() {
        this.props.onNaviBarPress(2);
    }


    render() {
        return (
            //根View
            <View style={styles.naviRow}>
                <TouchableHighlight onPress={this._naviTab0Pressed.bind(this)}>
                    <View style={[styles.button,{backgroundColor:this.buttonColors[0]}]}>
                        <Text style={[styles.textStyle,{color:this.buttonTextColors[0]}]}>
                            EXCHANGE
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._naviTab1Pressed.bind(this)}>
                    <View style={[styles.button,{backgroundColor:this.buttonColors[1]}]}>
                        <Text style={[styles.textStyle,{color:this.buttonTextColors[1]}]}>
                            IMAP
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._naviTab2Pressed.bind(this)}>
                    <View style={[styles.button,{backgroundColor:this.buttonColors[2]}]}>
                        <Text style={[styles.textStyle,{color:this.buttonTextColors[2]}]}>
                            POP
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

//样式
const styles = StyleSheet.create({
    naviRow: {
        flexDirection: 'row',
        height:pxToDp(89),
        backgroundColor:'#ffffff',
        opacity:0.95
    },
    button: {
        width: deviceWidth / 3, //导航栏每个标签宽度为屏幕1/4
        height: pxToDp(89),
        justifyContent: 'center'
    },
    textStyle: {
        fontWeight: '200',
        fontSize:pxToDp(30),
        textAlign: 'center'
    }
});