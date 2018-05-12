import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import NavBar from './NavBar';
import pxToDp from "../common/pxToDp";
import HomePage from "./HomePage";

export default class Page1 extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.onNavBarPress = this.onNavBarPress.bind(this);
        // 不同的Page,需要修改下面的这个数组, 通过数组控制导航栏条目显示状态
        this.navStatus = [1, 0, 0];
        this.state = {
            inputText:'',
            choose:true,
            uri:require('../../res/images/login/button-right.png')
        };
    }
    deleteInput(){
        this.setState({
            inputText:''
        });
    }

    onNavBarPress(aNumber) {
        //不同的page需要修改下面这个switch的处理逻辑
        switch (aNumber) {
            case 0:
                return;
            case 1:
                //通过replace切换
                this.props.navigator.replace({
                    name: 'Page2'
                });
                return;
            case 2:
                this.props.navigator.replace({
                    name: 'Page3'
                });
                return;
        }
    }
    choose(){
        this.setState({choose:!this.state.choose});
        this.state.choose===true?this.setState({uri:require('../../res/images/login/button-right.png')}):this.setState({uri:require('../../res/images/login/button-left.png')});
    }
    render() {
        return (
            <View style={styles.container}>
                <NavBar naviBarStatus={this.navStatus}
                         onNaviBarPress={this.onNavBarPress}/>
                <View style={styles.break1}/>
                <View style={styles.cell}>
                    <Text style={styles.tip}>账号</Text>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => {this.setState({inputText:text})}}
                        value = {this.state.inputText}
                        placeholderTextColor={'#bfbfbf'}
                    />
                    <TouchableOpacity
                        style={styles.inputImg1}
                        onPress={()=>this.deleteInput()}
                    >
                        <Image
                            style={{width:pxToDp(30), height:pxToDp(30)}}
                            source={require('../../res/images/login/close.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.break2}>
                    <Text  style={styles.breakText}>服务器</Text>
                </View>
                <View style={styles.cell}>
                    <Text style={styles.tip}>服务器</Text>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        placeholder ="mail.example.com"
                        placeholderTextColor={'#bfbfbf'}
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.cell}>
                    <Text style={styles.tip}>域</Text>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        placeholder ="选填"
                        placeholderTextColor={'#bfbfbf'}
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.cell}>
                    <Text style={styles.tip}>用户名</Text>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        placeholder ="选填"
                        placeholderTextColor={'#bfbfbf'}
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.cell}>
                    <Text style={styles.tip}>密码</Text>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        secureTextEntry = {true}
                        placeholderTextColor={'#bfbfbf'}
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.cell}>
                    <Text style={styles.tip}>端口</Text>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        value={'143'}
                        placeholderTextColor={'#bfbfbf'}
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.cell}>
                    <Text style={styles.tip}>SSL</Text>
                    <TouchableOpacity
                            style={styles.inputImg2}
                            onPress={()=>this.choose()}
                    >
                        <Image
                            style={{width:pxToDp(85), height:pxToDp(50)}}
                            source={this.state.uri}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    break1 :{
        height:pxToDp(40),
        backgroundColor:'#efeff4',
        borderColor:'#e5e5e5',
        borderWidth:1,
        borderStyle:'solid'
    },
    cell:{
        height:pxToDp(88),
        flexDirection:'row',
        backgroundColor:'#ffffff',
        opacity:0.95
    },
    tip:{
        fontSize:pxToDp(32),
        fontFamily:"PingFang-SC-Regular",
        marginLeft:pxToDp(35),
        color:'#31353b',
        lineHeight:pxToDp(88),
        width:pxToDp(160)
    },
    break2 :{
        height:pxToDp(70),
        backgroundColor:'#efeff4',
        borderColor:'#e5e5e5',
        borderWidth:1,
        borderStyle:'solid',

    },
    breakText: {
        lineHeight: pxToDp(70),
        color: '#81858a',
        fontSize: pxToDp(24),
        fontFamily: 'PingFang-SC-Regular',
        marginLeft: pxToDp(35),
    },
    textInput:{
        width:pxToDp(500),
        fontSize:pxToDp(32),
        color:'#000000'
    },
    inputImg1:{
        position:'absolute',
        right:pxToDp(30),
        top:pxToDp(30),
        zIndex:2,

    },
    inputImg2:{
        position:'absolute',
        right:pxToDp(10),
        top:pxToDp(13),
        zIndex:2,
        width:pxToDp(100)
    },
    line:{
        height:pxToDp(1),
        backgroundColor:'#e5e5e5',
        marginLeft:pxToDp(30)
    },
    button: {
        height: pxToDp(80),
        width: pxToDp(450),
        borderRadius: pxToDp(10),
        backgroundColor: '#0d81ff',
        justifyContent: 'center',
        opacity:0.8,
        marginTop:pxToDp(70)
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize:pxToDp(30),
        fontFamily:"PingFang-SC-Regular",
        opacity:1,
    },
});