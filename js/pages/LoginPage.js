import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Navigator,
    Image,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';
import pxToDp from '../common/pxToDp';
import ServerSetting from './ServerSetting'
import Settings from './Settings'

const {height, width} = Dimensions.get('window');
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText:'',
            secureTextEntry:true
        };
    }
    changeStatus(){
        this.setState({secureTextEntry:!this.state.secureTextEntry})
    }
    deleteInput(){
        this.setState({
            inputText:''
        });
    }
    render() {
        return (
            <View>
                <View style={styles.background}>
                    <Image
                        style={{width:width,height:height}}
                        source={require('../../res/images/login-background.png')}
                    />
                </View>
                <View style={styles.container}>
                    <View style={styles.inner}>
                        <Text style={styles.title}>欢迎使用Awork邮箱</Text>
                        <View style={styles.username}>
                            <Text style={styles.tip}>账号</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder ="请输入账号"
                                underlineColorAndroid='transparent'
                            />
                            <View style={styles.line}/>
                        </View>
                        <View style={styles.password}>
                            <Text style={styles.tip}>密码</Text>
                            <TextInput
                                ref = 'textInput'
                                returnKeyType = "default"
                                style={styles.textInput}
                                placeholder ="请输入密码"
                                placeholderTextColor = "#4D4D4D"
                                underlineColorAndroid='transparent'
                                secureTextEntry = {this.state.secureTextEntry}
                                onChangeText={(text) => {this.setState({inputText:text})}}
                                value = {this.state.inputText}
                            />
                            <TouchableOpacity
                                style={styles.inputImg1}
                                onPress={()=>this.deleteInput()}
                            >
                                <Image
                                    source={require('../../res/images/login/delete.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={()=>this.changeStatus()}
                                style={styles.inputImg2}
                            >
                                <Image
                                    source={require('../../res/images/login/hide.png')}
                                />
                            </TouchableOpacity>
                            <View style={styles.line}/>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>{
                                this.props.navigator.push({
                                    component:Settings,
                                    params: {
                                        ...this.props
                                    }
                                })
                            }}
                        >
                            <Text style={styles.buttonText}>下一步</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:"#050920",
        opacity:0.65,
    },
    container:{
        position:"absolute",
        top:0,
        left:0,
    },
    title:{
        fontSize:pxToDp(50),
        color:"#ebecf0",
        fontFamily:"MicrosoftYaHei",


    },
    inner:{
        marginTop:pxToDp(175),
        marginLeft:pxToDp(60)
    },
    username:{
        marginTop:pxToDp(88),
    },
    password:{
        marginTop:pxToDp(70),
    },
    tip:{
        fontSize:pxToDp(24),
        color:"#ffffff",
        fontFamily:"PingFang-SC-Regular"
    },
    textInput:{
        marginTop:pxToDp(25),
        padding: 0,
        fontSize:pxToDp(32),
        color:"#ffffff",
        opacity:0.3
    },
    line:{
        height: 0.4,
        opacity:0.5,
        backgroundColor: "black",
        marginTop:pxToDp(15),
    },
    inputImg1:{
        position:'absolute',
        right:pxToDp(50),
        top:pxToDp(72),
        zIndex:2
    },
    inputImg2:{
        position:'absolute',
        right:0,
        top:pxToDp(72),
        zIndex:2
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