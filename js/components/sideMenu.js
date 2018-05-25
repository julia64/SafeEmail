/*
 * @Author: WZJ
 * @Date:   2018-05-16 16:38:51
 * @Last Modified by:   guoyu
 * @Last Modified time: 2018-05-25 15:34:02
 * @Description 导航栏右边确定按钮
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
    Platform
} from 'react-native';
import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';

export default class slideMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={styles.protraitContainer}>
                    <Image
                        source={require('../../res/images/me.jpg')}
                        style={styles.portrait}
                    />
                    <View style={{height: heightToDp(80)}}>
                        <Text style={styles.profileText}>阿星</Text>
                        <Text style={styles.profileText}>axing@sangfor.com.cn</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.editImgWrap}
                        onPress={()=>this.props.navigation.navigate('Profile')}
                    >
                        <Image
                            source={require('../../res/images/sideBar/edit.png')}
                            style={styles.editImg}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.container}
                    onPress={()=>{
                        console.log(this.props.navigation);
                        this.props.navigation.navigate('ReceiveEmail');
                    }}
                >
                    <View style={styles.imgWrap}>
                        <Image
                            source={require('../../res/images/sideBar/receive.png')}
                            style={{width:widthToDp(35),height:heightToDp(26)}}
                        />
                    </View>
                    <Text style={styles.text}>收件箱</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.container}
                    onPress={()=>this.props.navigation.navigate('UnReadEmail')}
                >
                    <View style={styles.imgWrap}>
                        <Image
                            source={require('../../res/images/sideBar/unread.png')}
                            style={{width:widthToDp(35),height:heightToDp(27)}}
                        />
                    </View>
                    <Text style={styles.text}>未读邮件</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.container}
                    onPress={()=>this.props.navigation.navigate('StarEmail')}
                >
                    <View style={styles.imgWrap}>
                        <Image
                            source={require('../../res/images/sideBar/star.png')}
                            style={{width:widthToDp(36),height:heightToDp(34)}}
                        />
                    </View>
                    <Text style={styles.text}>星标邮件</Text>
                </TouchableOpacity>
                <View style={styles.line}/>
                <TouchableOpacity
                    style={styles.container}
                    onPress={()=>this.props.navigation.navigate('TodoEvents')}
                >
                    <View style={styles.imgWrap}>
                        <Image
                            source={require('../../res/images/sideBar/todo.png')}
                            style={{width:widthToDp(33),height:heightToDp(30)}}
                        />
                    </View>
                    <Text style={styles.text}>待办事项</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.container}
                    onPress={()=>this.props.navigation.navigate('FinishEvents')}
                >
                    <View style={styles.imgWrap}>
                        <Image
                            source={require('../../res/images/sideBar/finish.png')}
                            style={{width:widthToDp(33),height:heightToDp(30)}}
                        />
                    </View>
                    <Text style={styles.text}>完成事项</Text>
                </TouchableOpacity>
                <View style={styles.line}/>
                <TouchableOpacity
                    style={styles.container}
                    onPress={()=>this.props.navigation.navigate('Trash')}
                >
                    <View style={styles.imgWrap}>
                        <Image
                            source={require('../../res/images/sideBar/draft.png')}
                            style={{width:widthToDp(31),height:heightToDp(33)}}
                        />
                    </View>
                    <Text style={styles.text}>草稿箱</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.container}
                    onPress={()=>this.props.navigation.navigate('SentEmail')}
                >
                    <View style={styles.imgWrap}>
                        <Image
                            source={require('../../res/images/sideBar/send.png')}
                            style={{width:widthToDp(29),height:heightToDp(33)}}
                        />
                    </View>
                    <Text style={styles.text}>已发送</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.container}
                    onPress={()=>this.props.navigation.navigate('DeletedEmail')}
                >
                    <View style={styles.imgWrap}>
                        <Image
                            source={require('../../res/images/sideBar/delete.png')}
                            style={{width:widthToDp(29),height:heightToDp(30)}}
                        />
                    </View>
                    <Text style={styles.text}>已删除</Text>
                </TouchableOpacity>
                <View style={styles.line}/>
                <TouchableOpacity
                    style={styles.container}
                    onPress={()=>this.props.navigation.navigate('Attachments')}
                >
                    <View style={styles.imgWrap}>
                        <Image
                            source={require('../../res/images/sideBar/attachment.png')}
                            style={{width:widthToDp(32),height:heightToDp(29)}}
                        />
                    </View>
                    <Text style={styles.text}>附件管理</Text>
                </TouchableOpacity>
                <View style={styles.line}/>
            </View>
        );
    }
}
//样式

const $textColor = '#31353b';
const $protraitBGColor = 'rgba(240,240,240,0.95)';
const $lineBGColor = '#e5e5e5';
const styles = StyleSheet.create({
    protraitContainer: {
        width: '100%',
        height: heightToDp(180),
        paddingTop: (Platform.OS === 'ios') ? heightToDp(30) : 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: $protraitBGColor
    },
    container: {
        width: '100%',
        height: heightToDp(100),
        flexDirection: 'row',
        alignItems: 'center',
    },
    portrait: {
        width: widthToDp(80),
        height: widthToDp(80),
        borderRadius: widthToDp(40),
        marginRight: widthToDp(25),
        marginLeft: widthToDp(30)
    },
    profileText: {
        fontSize: widthToDp(32),
        fontFamily: 'PingFang-SC-Medium',
        color: $textColor
    },
    editImgWrap: {
        width: widthToDp(35),
        height: heightToDp(35),
        position: 'absolute',
        right: widthToDp(30),
        bottom: heightToDp(30)
    },
    editImg: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: widthToDp(32),
        fontFamily: 'PingFang-SC-Light',
        color: $textColor
    },
    imgWrap: {
        width: widthToDp(50),
        height: heightToDp(100),
        justifyContent: 'center',
        marginLeft: widthToDp(30),
        marginRight: widthToDp(20)
    },
    line: {
        width: widthToDp(550),
        marginLeft: widthToDp(80),
        borderTopWidth: heightToDp(1),
        borderTopColor: $lineBGColor
    }
});

// export default writeEmailButton;