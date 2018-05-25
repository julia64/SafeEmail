import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    TextInput,
    FlatList
} from 'react-native';
import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';
import SwipeitemView from '../components/swipeLeft';
import RepeatItem from '../components/repeatItem';
import PopupDialog from 'react-native-popup-dialog';
const {
    height,
    width
} = Dimensions.get('window');
const defaultRepeat = [{
    content:'好的，我确认后再给您回复！'
},{
    content:'非常感谢您提供的信息！'
},{
    content:'同意，请落实执行！'
},{
    content:'太棒了，热烈祝贺！'
},{
    content:'抱歉，我在外地出差，具体事宜还请联系部门负责人。'
}];
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
            itemChange: false,
            showDetails: false,
            fullScreen: false,
            dataSource:defaultRepeat,
            addConfirm:'',
            repeatAll:true,
        };
        this._dataRow = {};
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
            this.more.dismiss();
        };
        this.rowRightButtons = (item) => {
            return [{
                id: 1,
                text: '删除',
                width: widthToDp(130),
                textWidth: widthToDp(100),
                bgColor: $deleteFontColor,
                color: $white,
                fontSize: widthToDp(36),
                underlayColor: $deleteFontColor,
                onPress: (event, id) => {
                    //删除这封邮件
                    const rowId = parseInt(id.split('-')[1], 10);
                    this.state.dataSource.splice(rowId, 1);
                },
            }];
        };
        //收件箱列表
        this.renderViewRow = (item, sectionId, rowId) => {
            let rightBtn = this.rowRightButtons(item);
            let id = sectionId + '-' + rowId;
            return (
                <SwipeitemView
                    root={this}
                    ref={(row) => this._dataRow[id] = row}
                    id={id}
                    boxbgColor='$white'
                    animationType='timing'
                    rightBtn={rightBtn}
                >
                    <RepeatItem
                        info={item}
                        data={this.state.dataSource}
                        id={id}
                        onPress={() => {
                            console.log(this.props.navigation);
                        }}
                        changeAsterisk={()=>{
                            item.star = !item.star;
                            this.setState({
                                itemChange: !this.state.itemChange
                            });
                        }}
                    />
                </SwipeitemView>
            );
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
                <View key={i} style={{marginBottom:heightToDp(10)}}>
                    <Text style={styles.detailsWord}>
                        {data.to[i]}
                    </Text>
                    <Text style={styles.detailsWord}>
                        {data.email[i]}
                    </Text>
                </View>
            );
        }
        return renderTo;
    };
    repeatAll(){
        this.setState({
           repeatAll:true
        });
        this.more.dismiss();
        this.repeat.show();
    };
    repeatOne(){
        this.setState({
            repeatAll:false
        });
        this.more.dismiss();
        this.repeat.show();
    };
    showAdd(){
        this.repeat.dismiss();
        this.add.show();
    };
    addConfirm(){
        if(this.state.addConfirm===''){
            this.add.dismiss();
        }else{
            defaultRepeat.push({content:this.state.addConfirm });
            this.add.dismiss();
            this.repeat.show();
        }
    }
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
                    <TouchableOpacity
                        style={styles.textInput}
                        onPress={()=>this.repeatAll()}
                    >
                        <Text style={styles.textInputWord}>回复全部</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.inputImg}
                    >
                        <Image
                            style={{width:widthToDp(40), height:heightToDp(45)}}
                            source={require('../../res/images/ReadLetter/transmit.png')}
                        />
                        <Text style={styles.inputWord}>转发</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.more.show();
                        }}
                        style={styles.inputImg}>
                        <Image
                            style={{width:widthToDp(40), height:heightToDp(45)}}
                            source={require('../../res/images/WriteLetter/more.png')}
                        />
                        <Text style={styles.inputWord}>更多</Text>
                    </TouchableOpacity>
                </View>
                <PopupDialog
                    height = {heightToDp(400)}
                    width ={width - widthToDp(40)}
                    ref={(more) => { this.more = more; }}
                    dialogStyle={styles.innerContainer}
                >
                    <View>
                        <View style={styles.innerTop}>
                            <TouchableOpacity
                                style={styles.moreImg}
                                onPress={()=>this.repeatOne()}
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
                                onPress={()=>this.repeatAll()}
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
                </PopupDialog>
                {this.state.fullScreen?(
                    <PopupDialog
                        height = {height}
                        width ={width}
                        ref={(repeat) => { this.repeat = repeat; }}
                        dialogStyle={styles.repeatStyle}
                    >
                        <View>
                            <View style={styles.repeatInfo}>
                                <Image
                                    source={data.image}
                                    style={styles.image}
                                />
                                <View style={styles.frInfoWord}>
                                    <Text style={styles.fr}>{data.fr}</Text>
                                    {this.state.repeatAll?(
                                        <Text style={styles.to} numberOfLines={1}>抄送{this.getName(data)}</Text>
                                    ):null}
                                </View>
                                <TouchableOpacity
                                    style={styles.fullImage}
                                    onPress={()=>this.setState({fullScreen:!this.state.fullScreen})}
                                >
                                    <Image
                                        source={require('../../res/images/ReadLetter/fullScreen.png')}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View>
                                {this.state.repeatAll?(
                                    <TextInput
                                        style={styles.textInputRepeat}
                                        underlineColorAndroid='transparent'
                                        placeholderTextColor={$placeholderColor}
                                        placeholder={'回复全部...'}
                                        multiline = {true}
                                        numberOfLines = {4}
                                    />
                                ):(
                                    <TextInput
                                        style={styles.textInputRepeat}
                                        underlineColorAndroid='transparent'
                                        placeholderTextColor={$placeholderColor}
                                        placeholder={'回复...'}
                                        multiline = {true}
                                        numberOfLines = {4}
                                    />
                                )}

                                <TouchableOpacity
                                    style={styles.keyboard}
                                >
                                    <Image
                                        style={styles.keyboardImg}
                                        source={require('../../res/images/ReadLetter/keyboard.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.answer}
                                >
                                    <Text style={styles.anserText}>回复</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.scrollFullView}>
                                <ScrollView
                                    showsVerticalScrollIndicator={true}
                                >
                                    <FlatList
                                        data={this.state.dataSource}
                                        renderItem={({item,index}) => this.renderViewRow(item,'',index)}
                                        ItemSeparatorComponent={() => (<View style={styles.line} />)}
                                        ListFooterComponent={() => (<View style={styles.line} />)}
                                        onEndReachedThreshold={0.2}
                                        initialNumToRender={7}
                                        renderScrollComponent={(props) => {
                                            return <ScrollView scrollEnabled={this.state.scrollEnable} {...props}/>;
                                        }}
                                    />
                                </ScrollView>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.add}
                                    onPress={()=>this.showAdd()}
                                >
                                    <Image
                                        style={styles.addImg}
                                        source={require('../../res/images/ReadLetter/add.png')}
                                    />
                                    <Text style={styles.addText}>添加常用语</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </PopupDialog>
                ):(
                    <PopupDialog
                        height = {heightToDp(1100)}
                        width ={width}
                        ref={(repeat) => { this.repeat = repeat; }}
                        dialogStyle={styles.repeatStyle}
                    >
                        <View>
                            <View style={styles.repeatInfo}>
                                <Image
                                    source={data.image}
                                    style={styles.image}
                                />
                                <View style={styles.frInfoWord}>
                                    <Text style={styles.fr}>{data.fr}</Text>
                                    {this.state.repeatAll?(
                                        <Text style={styles.to} numberOfLines={1}>抄送{this.getName(data)}</Text>
                                    ):null}
                                </View>
                                <TouchableOpacity
                                    style={styles.fullImage}
                                    onPress={()=>this.setState({fullScreen:!this.state.fullScreen})}
                                >
                                    <Image
                                        source={require('../../res/images/ReadLetter/fullScreen.png')}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View>
                                {this.state.repeatAll?(
                                    <TextInput
                                        style={styles.textInputRepeat}
                                        underlineColorAndroid='transparent'
                                        placeholderTextColor={$placeholderColor}
                                        placeholder={'回复全部...'}
                                        multiline = {true}
                                        numberOfLines = {4}
                                    />
                                ):(
                                    <TextInput
                                        style={styles.textInputRepeat}
                                        underlineColorAndroid='transparent'
                                        placeholderTextColor={$placeholderColor}
                                        placeholder={'回复...'}
                                        multiline = {true}
                                        numberOfLines = {4}
                                    />
                                )}

                                <TouchableOpacity
                                    style={styles.keyboard}
                                >
                                    <Image
                                        style={styles.keyboardImg}
                                        source={require('../../res/images/ReadLetter/keyboard.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.answer}
                                >
                                    <Text style={styles.anserText}>回复</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.scrollView}>
                                <ScrollView
                                    showsVerticalScrollIndicator={true}
                                >
                                    <FlatList
                                        data={this.state.dataSource}
                                        renderItem={({item,index}) => this.renderViewRow(item,'',index)}
                                        ItemSeparatorComponent={() => (<View style={styles.line} />)}
                                        ListFooterComponent={() => (<View style={styles.line} />)}
                                        onEndReachedThreshold={0.2}
                                        initialNumToRender={7}
                                        renderScrollComponent={(props) => {
                                            return <ScrollView scrollEnabled={this.state.scrollEnable} {...props}/>;
                                        }}
                                    />
                                </ScrollView>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.add}
                                    onPress={()=>this.showAdd()}
                                >
                                    <Image
                                        style={styles.addImg}
                                        source={require('../../res/images/ReadLetter/add.png')}
                                    />
                                    <Text style={styles.addText}>添加常用语</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </PopupDialog>
                )}
                <PopupDialog
                    height = {heightToDp(350)}
                    width ={widthToDp(520)}
                    ref={(add) => { this.add = add; }}
                    dialogStyle={styles.inner}
                >
                    <View style={styles.innerView}>
                        <Text style={styles.modalTitle}>添加常用语</Text>
                        <TextInput
                            style={styles.addCommon}
                            underlineColorAndroid='transparent'
                            placeholderTextColor={$placeholderColor}
                            placeholder={'常用语...'}
                            onChangeText={(text) => {this.setState({addConfirm:text});}}
                        />
                        <View style={styles.allLine}>
                            <TouchableOpacity
                                style={styles.cancelTouch}
                                onPress={()=>this.add.dismiss()}
                            >
                                <Text style={styles.cancel}>取消</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.submitTouch}
                                onPress={()=>this.addConfirm()}
                            >
                                <Text style={styles.submit}>确认</Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                </PopupDialog>
            </View>
        )
    };
};
const $borderColor = '#cbcbcb';
const $white = '#ffffff';
const $frFontColor = '#818181';
const $hideFontColor = '#0d81ff';
const $inputFontColot = '#cbcbcb';
const $attachmentFontColor = '#31353a';
const $placeholderColor = '#81858a';
const $deleteFontColor = '#f63f3f';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:$white,
        paddingBottom:heightToDp(130)
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
    repeatInfo:{
        marginLeft:widthToDp(30),
        flexDirection:'row',
        height:heightToDp(160),
        width:width-widthToDp(30),
        marginTop:heightToDp(30)
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
        backgroundColor: $white,
        position: 'absolute',
        bottom: heightToDp(400),
        left: widthToDp(20),
        flexDirection: 'row'
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
    },
    repeatStyle:{
        backgroundColor: $white,
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        borderRadius: 0,
    },
    fullImage:{
        position:'absolute',
        right:widthToDp(30),
        top:heightToDp(30)
    },
    textInputRepeat:{
        marginLeft:widthToDp(30),
        textAlignVertical: 'top',
        fontSize:widthToDp(28)
    },
    answer:{
        borderRadius: 5,
        backgroundColor:$hideFontColor,
        position:'absolute',
        bottom:0,
        right:widthToDp(30),
    },
    anserText:{
        color:$white,
        paddingLeft:widthToDp(32),
        paddingRight:widthToDp(30),
        paddingTop:widthToDp(15),
        paddingBottom:widthToDp(15),
        fontSize:widthToDp(30)
    },
    keyboard:{
        position:'absolute',
        bottom:0,
        right:widthToDp(180),
        borderRadius: 5,
        backgroundColor:$white,
        borderColor:$borderColor,
        borderWidth:1
    },
    keyboardImg:{
        margin:widthToDp(15),
        width:widthToDp(51),
        height:heightToDp(39)
    },
    add:{
        position:'absolute',
        bottom:0,
        left:0,
        width:width,
        flexDirection:'row',
        paddingTop:heightToDp(30),
        marginBottom:heightToDp(50),
        borderTopColor:$borderColor,
        borderTopWidth:heightToDp(1),
        height:heightToDp(200),
        backgroundColor:$white

    },
    addImg:{
        marginLeft:widthToDp(30),

    },
    addText:{
        color:$hideFontColor,
        fontSize:widthToDp(28),
        marginLeft:widthToDp(10),
        lineHeight:heightToDp(35)
    },
    scrollView:{
        paddingBottom:heightToDp(250),
        height:heightToDp(700)
    },
    scrollFullView:{
        paddingBottom:heightToDp(250),
    },
    inner: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: $white,
        position:'absolute',
        top:heightToDp(200)
    },
    innerView:{
        justifyContent:'center',
        alignItems:'center',
    },
    modalTitle:{
        fontSize:widthToDp(34),
        fontWeight:'900',
        marginTop:heightToDp(50),
        textAlign:'center',
    },
    addCommon:{
        borderRadius: 10,
        width:widthToDp(450),
        borderColor:$borderColor,
        marginTop:heightToDp(30),
        borderWidth:heightToDp(1),
        height:heightToDp(80)
    },
    allLine:{
        flexDirection:'row',
        marginTop:heightToDp(25),
        width:'100%',

    },
    submit:{
        textAlign:'center',
        fontSize:widthToDp(34),
        color:$hideFontColor,
        fontWeight:'900',
        lineHeight:heightToDp(110)
    },
    cancel:{
        color:$hideFontColor,
        textAlign:'center',
        fontSize:widthToDp(34),
        lineHeight:heightToDp(110)

    },
    submitTouch:{
        width:'50%',
        borderTopColor:$borderColor,
        borderTopWidth:heightToDp(1),
        height:heightToDp(110),
        color:$hideFontColor,
        alignItems:'center',

    },
    cancelTouch:{
        width:'50%',
        borderTopColor:$borderColor,
        borderTopWidth:heightToDp(1),
        borderRightColor:$borderColor,
        borderRightWidth:heightToDp(1),
        height:heightToDp(110),
        alignItems:'center'
    }
});