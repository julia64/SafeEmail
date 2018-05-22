import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    FlatList,
    ScrollView,
    RefreshControl,
    ListView
} from 'react-native';
import {
    widthToDp,
    heightToDp
} from '../common/pxToDp';
import {
    KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import SwipeitemView from '../components/swipeLeft';
const {
    width,
    height
} = Dimensions.get('window');
const data = [{
    key: '1',
    'name': '研发管理',
    'number':'10',
    checked:false,
}, {
    key: '2',
    'name': '长沙研发',
    'number':'80',
    checked:true,
}, {
    key: '3',
    'name': '安全产品线',
    'number':'10',
    checked:false,
}, {
    key: '4',
    'name': '信瑞研发',
    'number':'10',
    checked:false,
}, {
    key: '5',
    'name': '加速产品线',
    'number':'10',
    checked:false,
}];
const personalData = [{
    key: '1',
    'name': '马云',
    'job':'CEO',
    'email':'alibaba@163.com',
    'image':require('../../res/images/me.jpg'),
    checked:false,
}, {
    key: '2',
    'name': '马化腾',
    'job':'CEO',
    'email':'alibaba@163.com',
    'image':require('../../res/images/me.jpg'),
    checked:true,
}];
export default class SelectContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choose:true,
            dataSource1:data,
            dataSource2:personalData,
            itemChange:false,
        };
        this.checkUri = {
            checked: require('../../res/images/WriteLetter/checked.png'),
            unchecked: require('../../res/images/WriteLetter/unchecked.png')
        };
        //组织架构列表
        this._renderRow1 = (item, sectionId, rowId) => {
            let id = sectionId + '-' + rowId;
            return (
                    <View style={styles.row1}>
                        <TouchableOpacity
                            onPress={()=>this.changeCheckStatus(item)}
                        >
                            <Image
                                source={item.checked?this.checkUri.checked:this.checkUri.unchecked}
                                style={styles.checkBox1}
                            />
                        </TouchableOpacity>
                        <Text style={styles.itemName}>{item.name}</Text>
                        {item.checked?<Text style={styles.itemNumber}>{item.number}</Text>:null}
                        <TouchableOpacity
                            style={styles.cellRight}
                        >
                            <Image
                                source={require('../../res/images/WriteLetter/label-right.png')}

                            />
                        </TouchableOpacity>
                    </View>
            );
        };
        //最近联系人列表
        this._renderRow2 = (item, sectionId, rowId) => {
            let id = sectionId + '-' + rowId;
            return (
                <View style={styles.row2}>
                    <TouchableOpacity
                        onPress={()=>this.changeCheckStatus(item)}
                    >
                        <Image
                            source={item.checked?this.checkUri.checked:this.checkUri.unchecked}
                            style={styles.checkBox2}
                        />
                    </TouchableOpacity>
                    <Image
                        source={item.image}
                        style={styles.itemImage}
                    />
                    <View style={styles.information}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.itemJob}>{item.name}</Text>
                            {item.job&&item.job!==''?<Text style={styles.itemJob}>({item.job})</Text>:null}
                        </View>
                        <Text style={styles.itemEmail}>{item.email}</Text>
                    </View>

                </View>
            );
        };
    }
    _listView1() {
        return (
            <FlatList
                data={this.state.dataSource1}
                renderItem={({item,index}) => this._renderRow1(item,'',index)}
                ItemSeparatorComponent={() => (<View style={styles.line} />)}
                ListFooterComponent={() => (<View style={styles.line} />)}
                onEndReachedThreshold={50}
                initialNumToRender={7}
                renderScrollComponent={(props) => {
                    return <ScrollView scrollEnabled={this.state.scrollEnable} {...props}/>;
                }}
            />
        );
    }
    _listView2() {
        return (
            <FlatList
                data={this.state.dataSource2}
                renderItem={({item,index}) => this._renderRow2(item,'',index)}
                ItemSeparatorComponent={() => (<View style={styles.line} />)}
                ListFooterComponent={() => (<View style={styles.line} />)}
                onEndReachedThreshold={50}
                initialNumToRender={7}
                renderScrollComponent={(props) => {
                    return <ScrollView scrollEnabled={this.state.scrollEnable} {...props}/>;
                }}
            />
        );
    }
    changeCheckStatus(item){
        item.checked = !item.checked;
        this.setState({
            itemChange: !this.state.itemChange
        });
    }

    render() {
        let listView1 = this._listView1();
        let listView2 = this._listView2();
        return (
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.searchBox}>
                        <Image
                            style={styles.searchImage}
                            source={require('../../res/images/WriteLetter/search.png')}
                        />
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                            placeholder ='搜索姓名/拼音/角色'
                            placeholderTextColor={$placeholderColor}
                            onChangeText={(text) => {this.setState({area:text});}}
                        />
                    </View>
                    <View style={styles.break}>
                        <Text  style={styles.breakText}>组织构架</Text>
                    </View>
                    {listView1}
                    <View style={styles.break}>
                        <Text  style={styles.breakText}>最近联系人</Text>
                    </View>
                    {listView2}
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
const $backgroundColor = '#eeeeee';
const $borderColor = '#e5e5e5';
const $white = '#ffffff';
const $logoutFontColor = '#ee3939';
const $placeholderColor = '#b4b4b4';
const $breakTextColor = '#81858a';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:$white,
    },
    searchBox:{
        marginLeft:widthToDp(30),
        marginRight:widthToDp(30),
        backgroundColor:$backgroundColor,
        height:heightToDp(80),
        borderRadius:widthToDp(10),
        flexDirection:'row',
    },
    textInput:{
        fontSize:widthToDp(28),
        fontFamily: 'PingFang-SC-Regular',
        width:width-widthToDp(60)
    },
    searchImage:{
        width:widthToDp(30),
        height:heightToDp(30),
        marginLeft:widthToDp(20),
        marginTop:heightToDp(23),
        marginRight:widthToDp(15)
    },
    break: {
        height: heightToDp(60),
        backgroundColor: $backgroundColor,
        width:width,
    },
    breakText: {
        lineHeight: heightToDp(60),
        color: $breakTextColor,
        fontSize: widthToDp(24),
        fontFamily: 'PingFang-SC-Regular',
        marginLeft: widthToDp(35),
    },
    row1:{
        height:heightToDp(88),
        flexDirection:'row',
        width:width
    },
    row2:{
        height:heightToDp(110),
        flexDirection:'row',
        width:width
    },
    line:{
        height:1,
        backgroundColor:$borderColor,
        marginLeft:widthToDp(90)
    },
    checkBox1:{
        height:heightToDp(50),
        width:widthToDp(47),
        marginTop:heightToDp(20),
        marginLeft:widthToDp(20)
    },
    checkBox2:{
        height:heightToDp(50),
        width:widthToDp(47),
        marginTop:heightToDp(30),
        marginLeft:widthToDp(20)
    },
    itemName:{
        marginLeft:widthToDp(20),
        fontSize:widthToDp(34),
        lineHeight:heightToDp(88),
    },
    itemJob:{
        fontSize:widthToDp(34),
    },
    cellRight:{
        width:widthToDp(20),
        height:heightToDp(30),
        top:heightToDp(30),
        right:widthToDp(30),
        position:'absolute',
    },
    itemNumber:{
        fontSize: widthToDp(34),
        position:'absolute',
        top:heightToDp(20),
        right:widthToDp(75),
    },
    itemImage:{
        width:widthToDp(80),
        height:widthToDp(80),
        borderRadius:widthToDp(40),
        marginLeft:widthToDp(10),
        marginTop:heightToDp(10)
    },
    itemEmail:{
        fontSize: widthToDp(28),
        color:$placeholderColor,
    },
    information:{
        marginLeft:widthToDp(20),
        marginTop:widthToDp(10),
    }
});