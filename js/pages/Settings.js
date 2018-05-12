import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Navigator,
    Image,
    View,
    ListView,
    RefreshControl,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import pxToDp from "../common/pxToDp";
import HomePage from "./HomePage";
import ServerSetting from './ServerSetting'
export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choose:true,
            uri:require('../../res/images/login/button-right.png')
        };
    }
    choose(){
        this.setState({choose:!this.state.choose});
        this.state.choose===true?this.setState({uri:require('../../res/images/login/button-right.png')}):this.setState({uri:require('../../res/images/login/button-left.png')});
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.break1}/>
                <View style={styles.cell}>
                    <Text style={styles.tip}>邮箱账号</Text>
                    <TextInput
                        style={styles.textInput1}
                        underlineColorAndroid='transparent'
                        value={'25998@sangfor.com.cn'}
                        placeholderTextColor={'#bfbfbf'}
                    />
                </View>
                <View style={styles.cell}>
                    <Text style={styles.tip}>发件人名称</Text>
                    <TextInput
                        style={styles.textInput2}
                        underlineColorAndroid='transparent'
                        value={'阿星'}
                        placeholderTextColor={'#bfbfbf'}
                    />
                    <TouchableOpacity
                        style={styles.inputImg1}
                    >
                        <Image
                            style={{width:pxToDp(30), height:pxToDp(30)}}
                            source={require('../../res/images/login/arrow-right.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cell}>
                    <Text style={styles.tip}>邮箱签名</Text>
                    <TextInput
                        style={styles.textInput2}
                        underlineColorAndroid='transparent'
                        placeholder={'未设置'}
                        placeholderTextColor={'#bfbfbf'}
                    />
                    <TouchableOpacity
                        style={styles.inputImg1}
                    >
                        <Image
                            style={{width:pxToDp(30), height:pxToDp(30)}}
                            source={require('../../res/images/login/arrow-right.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.break2}/>
                <View style={styles.cell}>
                    <Text style={styles.tip}>新邮件提醒</Text>
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
                <View style={styles.cell}>
                    <Text style={styles.tip}>服务器设置</Text>
                    <TouchableOpacity
                        style={styles.inputImg1}
                        onPress={()=>{
                            this.props.navigator.push({
                                component:ServerSetting,
                                params: {
                                    ...this.props
                                }
                            })
                        }}
                    >
                        <Image
                            style={{width:pxToDp(30), height:pxToDp(30)}}
                            source={require('../../res/images/login/arrow-right.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
                <View style={styles.cell}>
                    <Text style={styles.tip}>清除缓存</Text>
                    <Text style={styles.text1}>2.3M</Text>
                </View>
                <View style={styles.break2}/>
                <View style={styles.logoutView}>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigator.push({
                                component:HomePage,
                                params: {
                                    ...this.props
                                }
                            })
                        }}
                    >
                        <Text style={styles.logout}>退出登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
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
    text1:{
        position:'absolute',
        fontSize:pxToDp(32),
        color:'#81858a',
        right:pxToDp(30),
        fontFamily: 'PingFang-SC-Regular',
        lineHeight:pxToDp(88),
    },
    textInput1:{
        width:pxToDp(500),
        fontSize:pxToDp(32),
        color:'#81858a',
        textAlign:'right',
        paddingRight:pxToDp(90),
        fontFamily: 'PingFang-SC-Regular',
    },
    textInput2:{
        width:pxToDp(500),
        fontSize:pxToDp(32),
        color:'#81858a',
        textAlign:'right',
        paddingRight:pxToDp(130),
        fontFamily: 'PingFang-SC-Regular',
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
    logoutView:{
        justifyContent: 'center',
        alignItems:'center',
        height:pxToDp(88),
        flexDirection:'row',
        backgroundColor:'#ffffff',
        opacity:0.95
    },
    logout:{
        fontSize:pxToDp(32),
        fontFamily:"PingFang-SC-Regular",
        textAlign:'center',
        color:'#ee3939',
        lineHeight:pxToDp(88),
    }
});