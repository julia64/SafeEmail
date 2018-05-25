import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';
import HomePage from "./HomePage";
export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choose: true,
            uri: require('../../res/images/login/button-right.png')
        };
    }
    choose() {
        this.setState({
            choose: !this.state.choose
        });
        this.state.choose === true ? this.setState({
            uri: require('../../res/images/login/button-right.png')
        }) : this.setState({
            uri: require('../../res/images/login/button-left.png')
        });
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
                            style={{width:widthToDp(30), height:heightToDp(30)}}
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
                            style={{width:widthToDp(30), height:heightToDp(30)}}
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
                            style={{width:widthToDp(85), height:heightToDp(50)}}
                            source={this.state.uri}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
                <View style={styles.cell}>
                    <Text style={styles.tip}>服务器设置</Text>
                    <TouchableOpacity
                        style={styles.inputImg1}>
                        <Image
                            style={{width:widthToDp(30), height:heightToDp(30)}}
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
                    <TouchableOpacity>
                        <Text style={styles.logout}>退出登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const $backgroundColor = '#efeff4';
const $borderColor = '#e5e5e5';
const $white = '#ffffff';
const $breakFontColor = '#81858a';
const $logoutFontColor = '#ee3939';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    break1: {
        height: heightToDp(40),
        backgroundColor: $backgroundColor,
        borderColor: $borderColor,
        borderWidth: 1,
        borderStyle: 'solid'
    },
    cell: {
        height: heightToDp(88),
        flexDirection: 'row',
        backgroundColor: $white,
        opacity: 0.95
    },
    tip: {
        fontSize: widthToDp(32),
        fontFamily: "PingFang-SC-Regular",
        marginLeft: widthToDp(35),
        color: '#31353b',
        lineHeight: heightToDp(88),
        width: widthToDp(200)
    },
    break2: {
        height: heightToDp(70),
        backgroundColor: $backgroundColor,
        borderColor: $borderColor,
        borderWidth: 1,
        borderStyle: 'solid',

    },
    breakText: {
        lineHeight: heightToDp(70),
        color: $breakFontColor,
        fontSize: widthToDp(24),
        fontFamily: 'PingFang-SC-Regular',
        marginLeft: widthToDp(35),
    },
    text1: {
        position: 'absolute',
        fontSize: widthToDp(32),
        color: $breakFontColor,
        right: widthToDp(30),
        fontFamily: 'PingFang-SC-Regular',
        lineHeight: heightToDp(88),
    },
    textInput1: {
        width: widthToDp(500),
        fontSize: widthToDp(32),
        color: $breakFontColor,
        textAlign: 'right',
        paddingRight: widthToDp(30),
        fontFamily: 'PingFang-SC-Regular',
    },
    textInput2: {
        width: widthToDp(500),
        fontSize: widthToDp(32),
        color: $breakFontColor,
        textAlign: 'right',
        paddingRight: widthToDp(70),
        fontFamily: 'PingFang-SC-Regular',
    },
    inputImg1: {
        position: 'absolute',
        right: widthToDp(30),
        top: heightToDp(30),
        zIndex: 2,

    },
    inputImg2: {
        position: 'absolute',
        right: widthToDp(10),
        top: heightToDp(13),
        zIndex: 2,
        width: widthToDp(100)
    },
    line: {
        height: heightToDp(1),
        backgroundColor: $borderColor,
        marginLeft: widthToDp(30)
    },
    logoutView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: heightToDp(88),
        flexDirection: 'row',
        backgroundColor: $white,
        opacity: 0.95
    },
    logout: {
        fontSize: widthToDp(32),
        fontFamily: "PingFang-SC-Regular",
        textAlign: 'center',
        color: $logoutFontColor,
        lineHeight: heightToDp(88),
    }
});