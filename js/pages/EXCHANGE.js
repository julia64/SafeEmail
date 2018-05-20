/**
 * EXCHANGE协议页面
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import {
    widthToDp,
    heightToDp
} from '../common/pxToDp';
import emitter from '../utils/events';

export default class EXCHANGE extends Component {
    // 构造
    constructor(props) {
        super(props);
        this.state = {
            account: props.navigation.getParam('account', ''),
            password: props.navigation.getParam('password', ''),
            server: '',
            area: '',
            username: '',
            port: '143',
            ssl: true,
            protocol: 'exchange'
        };
        this.sslUri = {
            choose: require('../../res/images/login/button-right.png'),
            notChoose: require('../../res/images/login/button-left.png')
        };
        this.deleteInput = () => {
            this.setState({
                account: ''
            });
        };
        this.chooseSSL = () => {
            this.setState({
                ssl: !this.state.ssl
            });
        };
    }
    componentDidMount() {
        const {
            navigate,
            isFocused
        } = this.props.navigation;
        this.eventEmitter = emitter.addListener('saveEmailInfo', () => {
            if (isFocused()) {
                navigate('HomePage', this.state);
            }
        });
    }
    componentWillUnmount() {
        emitter.removeListener(this.eventEmitter);
    }
    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.break1}/>
                    <View style={styles.cell}>
                        <Text style={styles.tip}>账号</Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType='email-address'
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => {this.setState({account:text});}}
                            value = {this.state.account}
                            placeholderTextColor={'#bfbfbf'}
                        />
                        {
                            this.state.account ? (
                                <TouchableOpacity
                                    style={styles.inputImg1}
                                    onPress={()=>this.deleteInput()}
                                >
                                    <Image
                                        style={{width:widthToDp(30), height:heightToDp(30)}}
                                        source={require('../../res/images/login/close.png')}
                                    />
                                </TouchableOpacity>): (null)
                        }
                    </View>
                    <View style={styles.break2}>
                        <Text  style={styles.breakText}>服务器</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.tip}>服务器</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                            placeholder ='mail.example.com'
                            placeholderTextColor={'#bfbfbf'}
                            onChangeText={(text) => {this.setState({server:text});}}
                        />
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.cell}>
                        <Text style={styles.tip}>域</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                            placeholder ='选填'
                            placeholderTextColor={'#bfbfbf'}
                            onChangeText={(text) => {this.setState({area:text});}}
                        />
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.cell}>
                        <Text style={styles.tip}>用户名</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                            placeholder ='选填'
                            placeholderTextColor={'#bfbfbf'}
                            onChangeText={(text) => {this.setState({username:text});}}
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
                            onChangeText={(text) => {this.setState({password:text});}}
                            value = {this.state.password}
                        />
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.cell}>
                        <Text style={styles.tip}>端口</Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType='numeric'
                            underlineColorAndroid='transparent'
                            value={this.state.port}
                            placeholderTextColor={'#bfbfbf'}
                            onChangeText={(text) => {this.setState({port:text});}}
                        />
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.cell}>
                        <Text style={styles.tip}>SSL</Text>
                        <TouchableOpacity
                            style={styles.inputImg2}
                            activeOpacity={1}
                            onPress={()=>this.chooseSSL()}
                        >
                            <Image
                                style={{width:widthToDp(85), height:heightToDp(50)}}
                                source={this.state.ssl?this.sslUri.choose:this.sslUri.notChoose}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}
const $containerBGColor = '#efeff4';
const $cellBGColor = '#fff';
const $tipFontColor = '#31353b';
const $breakTextColor = '#81858a';
const $inputFontColor = '#000';
const $borderColor = '#e5e5e5';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: $containerBGColor
    },
    break1: {
        height: heightToDp(40),
        backgroundColor: $containerBGColor,
        borderColor: $borderColor,
        borderWidth: 1,
        borderStyle: 'solid'
    },
    cell: {
        height: heightToDp(88),
        flexDirection: 'row',
        backgroundColor: $cellBGColor,
        opacity: 0.95,
    },
    tip: {
        fontSize: widthToDp(32),
        fontFamily: 'PingFang-SC-Regular',
        marginLeft: widthToDp(35),
        color: $tipFontColor,
        lineHeight: heightToDp(88),
        width: widthToDp(160)
    },
    break2: {
        height: heightToDp(70),
        backgroundColor: $containerBGColor,
        borderColor: $borderColor,
        borderWidth: 1,
        borderStyle: 'solid'
    },
    breakText: {
        lineHeight: heightToDp(70),
        color: $breakTextColor,
        fontSize: widthToDp(24),
        fontFamily: 'PingFang-SC-Regular',
        marginLeft: widthToDp(35),
    },
    textInput: {
        width: widthToDp(495),
        fontSize: widthToDp(32),
        color: $inputFontColor
    },
    inputImg1: {
        position: 'absolute',
        right: widthToDp(30),
        top: heightToDp(30),
        zIndex: 2
    },
    inputImg2: {
        position: 'absolute',
        right: widthToDp(10),
        top: heightToDp(13),
        zIndex: 2,
        width: widthToDp(100)
    },
    line: {
        height: 1,
        backgroundColor: $borderColor,
        marginLeft: widthToDp(30)
    }
});