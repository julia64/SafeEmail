import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Modal,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';
import {
    KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
const {
    height,
    width
} = Dimensions.get('window');
const data = {
    title:'本周三SSL VPN7.6.3会议纪要',
    image:require('../../res/images/me.jpg'),
    fr:'周海绵',
    date:'1-28 22:00',
    to:['李开复','马云','马化腾','信号与系统','微机原理'],
    email:['alibaba@163.com','alibaba@163.com','mahuateng@163.com','alibaba@163.com','alibaba@163.com'],
    content:'你陪我步入蝉夏\n' +
    '越过城市喧嚣\n' +
    '歌声还在游走\n' +
    '你榴花般的双眸\n' +
    '不见你的温柔\n' +
    '丢失花间欢笑\n' +
    '岁月无法停留\n' +
    '流云的等候\n' +
    '我真的好想你\n' +
    '在每一个雨季\n' +
    '你选择遗忘的\n' +
    '是我最不舍的\n' +
    '纸短情长啊\n' +
    '道不尽太多涟漪\n' +
    '我的故事都是关于你呀\n' +
    '怎么会爱上了她\n' +
    '并决定跟她回家\n' +
    '放弃了我的所有我的一切无所谓\n' +
    '纸短情长啊\n' +
    '诉不完当时年少\n' +
    '我的故事还是关于你呀\n' +
    '你陪我步入蝉夏\n' +
    '越过城市喧嚣\n' +
    '歌声还在游走\n' +
    '你榴花般的双眸\n' +
    '不见你的温柔\n' +
    '丢失花间欢笑\n' +
    '岁月无法停留\n' +
    '流云的等候\n' +
    '我真的好想你\n' +
    '在每一个雨季\n' +
    '你选择遗忘的\n' +
    '是我最不舍的\n' +
    '纸短情长啊\n' +
    '道不尽太多涟漪\n' +
    '我的故事都是关于你呀\n' +
    '怎么会爱上了她\n' +
    '并决定跟她回家\n' +
    '放弃了我的所有我的一切无所谓\n' +
    '纸短情长啊\n' +
    '诉不完当时年少\n' +
    '我的故事还是关于你呀\n' +
    '我真的好想你',
    star:false
};
export default class EmailCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemChange:false,
            showDetails:false,
            modalVisible:false,
        };
        this.starUri = {
            star: require('../../res/images/emailbox/star_red.png'),
            notStar: require('../../res/images/emailbox/star_gray.png')
        };
        //标记星标文件
        this.changeAsterisk = () => {
            data.star = !data.star;
            this.setState({
                itemChange: !this.state.itemChange
            });
            this.setModalVisible(false);
            // console.log(item, id);
        };
    }
    getName(data){
        let length = data.to.length;
        let word='';
        if(length<2) return data.to;
        else{
            for(let i=0;i<length-1;i++){
                word = word + data.to[i];
                word = word + '、'
            }
            word = word + data.to[length-1];
            return word;
        }
    };
    renderTo(data){
        let renderTo =[];
        for(let i=0;i<data.to.length;i++){
            renderTo.push(
                <View style={{marginBottom:heightToDp(10)}}>
                    <Text key={i} style={styles.detailsWord}>
                        {data.to[i]}
                    </Text>
                    <Text key={i+data.to.length} style={styles.detailsWord}>
                        {data.email[i]}
                    </Text>
                </View>
            );
        }
        return renderTo;
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    };
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.top}>
                            <Text style={styles.title}>{data.title}</Text>
                            <TouchableOpacity
                                onPress={() => this.changeAsterisk()}
                                style={styles.star}
                            >
                                <Image
                                    style={{width:widthToDp(35),height:heightToDp(35)}}
                                    source={data.star?this.starUri.star:this.starUri.notStar}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.frInfo}>
                            <Image
                                source={data.image}
                                style={styles.image}
                            />
                            <View style={styles.frInfoWord}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.fr}>{data.fr}</Text>
                                    <Text style={styles.date}>{data.date}</Text>
                                </View>
                                <Text style={styles.to} numberOfLines={1}>发至  {this.getName(data)}</Text>

                            </View>
                            <TouchableOpacity
                                onPress={() => this.setState({showDetails:!this.state.showDetails})}
                                style={styles.showMore}
                            >
                                <Text style={styles.showMoreWord}>{this.state.showDetails?'隐藏':'详情'}</Text>
                            </TouchableOpacity>

                        </View>
                        {this.state.showDetails?(
                            <View style={styles.details}>
                                <Text style={styles.detailsWord}>收件人：</Text>
                                <View style={{flexDirection:'column'}}>
                                    {this.renderTo(data)}
                                </View>
                            </View>
                        ):null}
                        <Text style={styles.content}>
                            {data.content}
                        </Text>
                    </View>

                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.textInput}>
                        <Text style={styles.textInputWord}>回复全部</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.inputImg}>
                        <Image
                            style={{width:widthToDp(40), height:heightToDp(45)}}
                            source={require('../../res/images/ReadLetter/transmit.png')}
                        />
                        <Text style={styles.inputWord}>转发</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible(true)
                        }}
                        style={styles.inputImg}>
                        <Image
                            style={{width:widthToDp(40), height:heightToDp(45)}}
                            source={require('../../res/images/WriteLetter/more.png')}
                        />
                        <Text style={styles.inputWord}>更多</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType={'slide'}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setModalVisible(!this.state.modalVisible)}
                    transparent={true}
                >
                    <View style={styles.attachmentContainer}>
                        <View style={styles.innerContainer}>
                            <View style={styles.innerTop}>
                                <TouchableOpacity
                                    style={styles.moreImg}
                                    onPress={() => {
                                        this.setModalVisible(false)
                                    }}
                                >
                                    <View style={styles.modalView}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../res/images/ReadLetter/answer.png')}
                                        />
                                        <Text style={styles.modalText}>回复</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.moreImg}
                                >
                                    <View style={styles.modalView}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../res/images/ReadLetter/answerAll.png')}
                                        />
                                        <Text style={styles.modalText}>回复全部</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.moreImg}
                                >
                                    <View style={styles.modalView}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../res/images/ReadLetter/transmit.png')}
                                        />
                                        <Text style={styles.modalText}>转发</Text>
                                    </View>

                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.moreImg}
                                >
                                    <View style={styles.modalView}>

                                    </View>

                                </TouchableOpacity>
                            </View>
                            <View style={styles.line}/>
                            <View style={styles.innerTop}>
                                <TouchableOpacity
                                    style={styles.moreImg}
                                    onPress={() => {
                                        this.setModalVisible(false)
                                    }}
                                >
                                    <View style={styles.modalView}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../res/images/ReadLetter/unread.png')}
                                        />
                                        <Text style={styles.modalText}>标为未读</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.moreImg}
                                    onPress={() => this.changeAsterisk()}
                                >
                                    <View style={styles.modalView}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../res/images/ReadLetter/star.png')}
                                        />
                                        <Text style={styles.modalText}>{data.star?'取消星标':'标为星标'}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.moreImg}
                                >
                                    <View style={styles.modalView}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../res/images/ReadLetter/todo.png')}
                                        />
                                        <Text style={styles.modalText}>标为待办</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.moreImg}
                                >
                                    <View style={styles.modalView}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../res/images/ReadLetter/delete.png')}
                                        />
                                        <Text style={styles.modalText}>删除</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
const $borderColor = '#cbcbcb';
const $white = '#ffffff';
const $frFontColor = '#818181';
const $hideFontColor = '#0d81ff';
const $inputFontColot = '#cbcbcb';
const $attachmentFontColor = '#31353a';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:$white
    },
    top:{
        marginTop:heightToDp(25),
        marginLeft:widthToDp(30),
        flexDirection:'row'
    },
    title:{

        fontSize:widthToDp(34)
    },
    star:{
        position:'absolute',
        right:widthToDp(30),
        top:heightToDp(5)
    },
    frInfo:{
        marginTop:heightToDp(55),
        marginLeft:widthToDp(30),
        flexDirection:'row',
        height:heightToDp(160)
    },
    image:{
        width:widthToDp(100),
        height:widthToDp(100),
        borderRadius:widthToDp(50)
    },
    fr:{
        fontSize:widthToDp(32),

    },
    date:{
        fontSize:widthToDp(28),
        marginLeft:widthToDp(25),
        color:$frFontColor,
        marginTop:heightToDp(2)
    },
    frInfoWord:{
        marginLeft:widthToDp(20),
        flexDirection:'column',
    },
    to:{
        fontSize:widthToDp(28),
        color:$frFontColor,
        marginTop:heightToDp(15),
        width:width-widthToDp(280),
    },
    showMore:{
        position:'absolute',
        bottom:heightToDp(60),
        right:widthToDp(30)
    },
    showMoreWord:{
        fontFamily:"PingFang-SC-Regular",
        color:$hideFontColor,
        fontSize:widthToDp(28)
    },
    details:{
        flexDirection:'row',
        marginLeft:widthToDp(30)
    },
    detailsWord:{
        fontSize:widthToDp(28),
        color:$frFontColor,
    },
    content:{
        marginTop:heightToDp(10),
        marginLeft:widthToDp(30),
        marginRight:widthToDp(30),
        fontSize:widthToDp(32),
        lineHeight:heightToDp(55)
    },
    footer:{
        position:'absolute',
        left:0,
        bottom:0,
        width:width,
        height:heightToDp(130),
        borderTopWidth:1,
        borderTopColor:$borderColor,
        backgroundColor:$white,
        flexDirection:'row'
    },
    textInput:{
        width:widthToDp(550),
        paddingRight:widthToDp(30),
        flex:20,
        marginLeft:widthToDp(25),
    },
    textInputWord:{
        fontSize:widthToDp(34),
        fontFamily: 'PingFang-SC-Regular',
        color:$inputFontColot,
        lineHeight:heightToDp(140)
    },
    inputImg:{
        marginRight:widthToDp(40),
        marginTop:heightToDp(25)
    },
    inputWord:{
        marginTop:heightToDp(10)
    },
    attachmentContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'rgba(0, 0, 0, 0.5)'
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        height:heightToDp(350),
        width:width-widthToDp(40),
        backgroundColor:$white,
        position:'absolute',
        bottom:heightToDp(20),
        left:widthToDp(20),


    },
    modalImage:{
        width:widthToDp(32),
        height:heightToDp(29),
    },
    innerTop:{
        flexDirection:'row',
        height:heightToDp(175)
    },
    moreImg:{
        width:'25%',
        marginTop:heightToDp(45)
    },
    modalView:{
        alignItems: 'center',
        justifyContent:'center',

    },
    modalText:{
        fontFamily: 'PingFang-SC-Regular',
        fontSize: widthToDp(24),
        color:$attachmentFontColor,
        marginTop:heightToDp(25),
        marginBottom:heightToDp(55)
    },
    line:{
        height:heightToDp(1),
        backgroundColor:$borderColor,
        width:'100%',
    }
});