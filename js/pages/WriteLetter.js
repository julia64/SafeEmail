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
    Dimensions,
} from 'react-native';
import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';
import {
    KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import PopupDialog from 'react-native-popup-dialog';
const {
    height,
    width
} = Dimensions.get('window');
export default class WriteLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receiver: '',
            modalVisible: false
        };
    }
    addMore() {}
    render() {
        return (
            <View>
                <KeyboardAwareScrollView>
                    <View style={styles.container}>
                        <View style={styles.cell}>
                            <Text style={styles.tip}>收件人：</Text>
                            <TextInput
                                style={styles.textInput}
                                keyboardType='email-address'
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => {this.setState({receiver:text});}}
                                placeholderTextColor={$placeholderColor}
                                value={'周义兴、黄起山'}
                            />
                            <TouchableOpacity
                                style={styles.inputImg1}
                                onPress={()=>this.addMore()}
                            >
                                <Image
                                    style={{width:widthToDp(40), height:heightToDp(40)}}
                                    source={require('../../res/images/WriteLetter/add.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}/>
                        <View style={styles.cell}>
                            <Text style={styles.tip}>抄送/密送：</Text>
                            <TextInput
                                style={styles.textInput}
                                keyboardType='email-address'
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => {this.setState({account:text});}}
                                placeholderTextColor={$placeholderColor}
                            />
                            <TouchableOpacity
                                style={styles.inputImg1}
                                onPress={()=>this.addMore()}
                            >
                                <Image
                                    style={{width:widthToDp(40), height:heightToDp(40)}}
                                    source={require('../../res/images/WriteLetter/add.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}/>
                        <View style={styles.cell}>
                            <Text style={styles.tip}>主题：</Text>
                            <TextInput
                                style={styles.textInput}
                                keyboardType='email-address'
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => {this.setState({account:text});}}
                                placeholderTextColor={$placeholderColor}
                            />
                            <TouchableOpacity
                                style={styles.inputImg2}
                                onPress={() => {
                                    this.popupDialog.show();
                                }}
                            >
                                <Image
                                    style={{width:widthToDp(40), height:heightToDp(40)}}
                                    source={require('../../res/images/WriteLetter/attachment.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.attachmentText}>1</Text>
                        </View>
                        <View style={styles.line}/>
                        <View style={styles.wordCell}>
                            <TextInput
                                style={styles.wordInput}
                                keyboardType='email-address'
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => {this.setState({account:text});}}
                                placeholderTextColor={$placeholderColor}
                                placeholder={'正文...'}
                                multiline={true}

                            />
                        </View>
                        <PopupDialog
                            height = {heightToDp(200)}
                            width ={width - widthToDp(40)}
                            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                            dialogStyle={styles.innerContainer}
                        >
                            <View style={styles.inner}>
                                <TouchableOpacity
                                    style={styles.inputImg3}
                                >
                                    <View style={styles.modalView}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../res/images/WriteLetter/camera.png')}
                                        />
                                        <Text style={styles.modalText}>拍照</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.inputImg3}
                                >
                                    <View style={styles.modalView}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../res/images/WriteLetter/picture.png')}
                                        />
                                        <Text style={styles.modalText}>图片</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.inputImg3}
                                >
                                    <View style={styles.modalView}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../res/images/WriteLetter/file.png')}
                                        />
                                        <Text style={styles.modalText}>文件</Text>
                                    </View>

                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.inputImg3}
                                >
                                    <View style={styles.modalView}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../res/images/WriteLetter/downloadFile.png')}
                                        />
                                        <Text style={styles.modalText}>已下载文件</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </PopupDialog>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}
const $cellBGColor = '#fff';
const $tipFontColor = '#81858a';
const $receiverFontColor = '#0d81ff';
const $borderColor = '#cbcbcb';
const $placeholderColor = '#bfbfbf';
const $white = '#ffffff';
const $inputFontColor = '#000';
const $attachmentFontColor = '#f99d1e';
const $modalFontColot = '#31353b';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height
    },
    tip: {
        fontSize: widthToDp(34),
        fontFamily: 'PingFang-SC-Light',
        marginLeft: widthToDp(40),
        color: $tipFontColor,
        lineHeight: heightToDp(98),
    },
    textInput: {
        width: widthToDp(495),
        fontSize: widthToDp(34),
        color: $receiverFontColor,
        fontFamily: 'PingFang-SC-Light',
    },
    cell: {
        height: heightToDp(98),
        flexDirection: 'row',
        backgroundColor: $cellBGColor,
        opacity: 0.95,
    },
    wordCell: {
        height: height - heightToDp(98 * 3),
        backgroundColor: $cellBGColor,
    },
    line: {
        height: 1,
        backgroundColor: $borderColor,
        marginLeft: widthToDp(30),
        marginRight: widthToDp(30)
    },
    inputImg1: {
        position: 'absolute',
        right: widthToDp(30),
        top: heightToDp(30),
        zIndex: 2
    },
    inputImg2: {
        position: 'absolute',
        right: widthToDp(40),
        top: heightToDp(30),
        zIndex: 2
    },
    inputImg3: {
        marginTop: heightToDp(50),
        zIndex: 2,
        width: '25%',
    },
    modalText: {
        marginTop: heightToDp(25),
        fontFamily: 'PingFang-SC-Regular',
        fontSize: widthToDp(24),
        color: $modalFontColot,
        marginBottom: heightToDp(55)
    },
    wordInput: {
        width: width - widthToDp(60),
        fontSize: widthToDp(34),
        color: $inputFontColor,
        fontFamily: 'PingFang-SC-Light',
        marginLeft: widthToDp(30),
        textAlignVertical: 'top',
    },
    attachmentText: {
        fontFamily: 'PingFang-SC-Medium',
        fontSize: widthToDp(24),
        color: $attachmentFontColor,
        position: 'absolute',
        right: widthToDp(30),
        top: heightToDp(45),
        zIndex: 2
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: $white,
        position: 'absolute',
        bottom: heightToDp(180),
        left: widthToDp(20),
        flexDirection: 'row'

    },
    modalImage: {
        width: widthToDp(50),
        height: heightToDp(40),
    },
    inner: {
        marginLeft: widthToDp(40),
        flexDirection: 'row',
        marginRight: widthToDp(50),
    },
    modalView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: heightToDp(200)
    }


});