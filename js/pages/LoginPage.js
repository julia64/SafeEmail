/**
 * 登录页面
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';

const {
    height,
    width
} = Dimensions.get('window');
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            secureTextEntry: true
        };
    }
    changeStatus() {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        });
    }
    deleteInput() {
        this.setState({
            password: ''
        });
    }
    render() {
        return (
            <View>
                <View style={styles.background}>
                    <Image
                        style={styles.background}
                        source={require('../../res/images/login-background.png')}
                    />
                </View>
                <View style={styles.container}>
                    <View style={styles.inner}>
                        <Text style={styles.title}>欢迎使用Awork邮箱</Text>
                        <View style={styles.account}>
                            <Text style={styles.tip}>账号</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder ='请输入账号'
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => {this.setState({account:text});}}
                                keyboardType='email-address'
                            />
                            <View style={styles.line}/>
                        </View>
                        <View style={styles.password}>
                            <Text style={styles.tip}>密码</Text>
                            <TextInput
                                ref ={()=>'textInput'}
                                returnKeyType='default'
                                style={styles.textInput}
                                placeholder='请输入密码'
                                // placeholderTextColor='#4D4D4D'
                                underlineColorAndroid='transparent'
                                secureTextEntry={this.state.secureTextEntry}
                                onChangeText={(text) => {this.setState({password:text});}}
                                value={this.state.password}
                            />
                            {
                                this.state.password ? (
                                    <TouchableOpacity
                                        style={styles.inputImg1}
                                        onPress={()=>this.deleteInput()}
                                    >
                                        <Image
                                            source={require('../../res/images/login/delete.png')}
                                        />
                                    </TouchableOpacity>
                                ):(null)
                            }
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
                                const {
                                    navigate
                                } = this.props.navigation;
                                navigate('ServerSetting',{
                                    account: this.state.account,
                                    password: this.state.password
                                });
                            }}
                        >
                            <Text style={styles.buttonText}>下一步</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

const $backgroundColor = '#050920';
// const $titleColor = '#ebecf0';
const $white = 'white';
const $black = 'black';
const $buttonBGC = 'rgba(13,129,255,0.8)';
const styles = StyleSheet.create({
    background: {
        backgroundColor: $backgroundColor,
        opacity: 0.65,
        width: width,
        height: height
    },
    container: {
        position: 'absolute',
        top: 0,
        left: widthToDp(60),
        width: widthToDp(620)
    },
    title: {
        fontSize: widthToDp(50),
        color: $white
        // fontFamily: 'MicrosoftYaHei'
    },
    inner: {
        marginTop: heightToDp(175)
    },
    account: {
        marginTop: heightToDp(88)
    },
    password: {
        marginTop: heightToDp(70)
    },
    tip: {
        fontSize: widthToDp(24),
        color: $white,
        fontFamily: 'PingFang-SC-Regular'
    },
    textInput: {
        marginTop: heightToDp(25),
        padding: 0,
        fontSize: widthToDp(32),
        color: $white
    },
    line: {
        height: 0.4,
        opacity: 0.5,
        backgroundColor: $black,
        marginTop: heightToDp(15),
    },
    inputImg1: {
        position: 'absolute',
        right: widthToDp(50),
        top: heightToDp(72),
        zIndex: 2
    },
    inputImg2: {
        position: 'absolute',
        right: 0,
        top: heightToDp(72),
        zIndex: 2
    },
    button: {
        height: heightToDp(80),
        width: widthToDp(620),
        borderRadius: widthToDp(10),
        backgroundColor: $buttonBGC,
        justifyContent: 'center',
        marginTop: heightToDp(70)
    },
    buttonText: {
        textAlign: 'center',
        color: $white,
        fontSize: widthToDp(30),
        fontFamily: 'PingFang-SC-Regular',
        opacity: 1
    },
});