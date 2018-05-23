import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    RefreshControl,
    ScrollView,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import SwipeitemView from '../components/swipeLeft';
import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';
import EmailItem from '../components/emailItem';

const data = [{
    'key': '1',
    'email': 'f.lee@taylor.edu',
    'name': '张三张',
    'description': '本周五下午在十大黄金分割阿萨德股份将黄瓜大环境股份黄金时代感几乎覆盖圣诞节后果房间号公司环境',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    'star': true,
    'read': true,
    'forward': true,
    'todo': true,
    'attachment': true,
    'select': false
}, {
    'key': '2',
    'email': 'f.lee@taylor.edu',
    'name': '张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    star: false,
    read: true,
    forward: true,
    todo: true,
    attachment: true,
    'select': false
}, {
    'key': '3',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    'star': true,
    'read': false,
    'forward': true,
    'todo': true,
    'attachment': true,
    'select': false
}, {
    'key': '4',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    'star': false,
    'read': false,
    'forward': true,
    'todo': false,
    'attachment': false,
    'select': false
}, {
    key: '5',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    'star': false,
    'read': true,
    'forward': true,
    'todo': false,
    'attachment': true,
    'select': false
}, {
    'key': '6',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    'star': true,
    'read': false,
    'forward': false,
    'todo': false,
    'attachment': false,
    'select': false
}, {
    'key': '7',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    'star': true,
    'read': true,
    'forward': false,
    'todo': false,
    'attachment': false,
    'select': false
}, {
    'key': '8',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    'star': true,
    'read': true,
    'forward': false,
    'todo': false,
    'attachment': false,
    'select': false
}, {
    'key': '9',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    'star': true,
    'read': true,
    'forward': false,
    'todo': false,
    'attachment': false,
    'select': false
}, {
    'key': '10',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    'star': true,
    'read': true,
    'forward': false,
    'todo': false,
    'attachment': false,
    'select': false
}, {
    'key': '11',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    'star': true,
    'read': true,
    'forward': false,
    'todo': false,
    'attachment': false,
    'select': false
}, {
    'key': '12',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    'star': true,
    'read': true,
    'forward': false,
    'todo': false,
    'attachment': false,
    'select': false
}];

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: props.navigation.getParam('data', data),
            isLoading: false,
            scrollEnable: true,
            hasIdOpen: false,
            isShowToTop: false,
            itemChange: false,
            isSelect: true
        };
        this._dataRow = {};
        this.openRowId = '';
        this.selectNumber = 1;
        this.onLoad = () => {
            setTimeout(() => {
                this.setState({
                    isLoading: false
                });
            }, 2000);
        };
        this.selectEmail = () => {
            this.setState({
                isSelect: true
            });
        }
        //右侧滑动按钮设置
        this.rowRightButtons = (item) => {
            return [{
                id: 1,
                text: item.todo ? '取消待办' : '标为待办',
                width: widthToDp(130),
                textWidth: widthToDp(100),
                bgColor: '#badaff',
                color: '#0d81ff',
                fontSize: widthToDp(36),
                underlayColor: '#badaff',
                onPress: () => {
                    //标为/取消代办
                    item.todo = !item.todo;
                    this.setState({
                        itemChange: !this.state.itemChange
                    });
                },
            }, {
                id: 2,
                text: item.read ? '标为未读' : '标为已读',
                width: widthToDp(130),
                bgColor: '#0d81ff',
                textWidth: widthToDp(100),
                color: '#fff',
                fontSize: widthToDp(36),
                underlayColor: '#0d81ff',
                onPress: () => {
                    //标为已读/未读
                    item.read = !item.read;
                    this.setState({
                        itemChange: !this.state.itemChange
                    });
                }
            }, {
                id: 3,
                text: '删除',
                width: widthToDp(130),
                textWidth: widthToDp(100),
                bgColor: '#f63f3f',
                color: '#fff',
                fontSize: widthToDp(36),
                underlayColor: '#f63f3f',
                onPress: (event, id) => {
                    //删除这封邮件
                    const rowId = parseInt(id.split('-')[1], 10);
                    this.state.dataSource.splice(rowId, 1);
                },
            }];
        };
        //List列表
        this.renderSelectRow = (item, sectionId, rowId) => {
            let id = sectionId + '-' + rowId;
            return (
                <EmailItem
                    info={item}
                    id={id}
                    emailKeys={this.emailKeys}
                    isSelect={true}
                />
            );
        };
        this.renderViewRow = (item, sectionId, rowId) => {
            let rightBtn = this.rowRightButtons(item);
            let id = sectionId + '-' + rowId;
            return (
                <SwipeitemView
                    root={this}
                    ref={(row) => this._dataRow[id] = row}
                    id={id}
                    boxbgColor='#fff'
                    animationType='timing'
                    rightBtn={rightBtn}
                >
                    <EmailItem
                        info={item}
                        data={this.state.dataSource}
                        id={id}
                        selectEmail={this.selectEmail}
                    />
                </SwipeitemView>
            );
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrap}>
                {this.state.isSelect?(
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={{marginLeft: widthToDp(30)}}
                            onPress={()=>this.setState({isSelect: false})}
                        >
                            <Image
                                style={styles.backImage}
                                source={require('../../res/images/emailbox/back.png')}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.headerTitle}>已选择{this.selectNumber}封</Text>
                        </View>
                        <TouchableOpacity
                            style={{marginRight: widthToDp(30)}}
                            onPress={()=>{
                                console.log(this.props.navigation);
                            }}
                        >
                            <Text style={styles.headerText}>{this.state.selectAll?'取消全选':'全选'}</Text>
                        </TouchableOpacity>
                    </View>
                ):(
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={{marginLeft: widthToDp(30)}}
                            onPress={()=>{
                                console.log('侧边栏');
                            }}
                        >
                            <Image
                                style={styles.image}
                                source={require('../../res/images/emailbox/info.png')}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.headerTitle}>收件箱</Text>
                            <Text style={styles.account}>{this.props.navigation.getParam('account','test@test.com')}</Text>
                        </View>
                        <TouchableOpacity
                            style={{marginRight: widthToDp(30)}}
                            onPress={()=>{
                                console.log(this.props.navigation);
                            }}
                        >
                            <Image
                                style={styles.image}
                                source={require('../../res/images/emailbox/write_email.png')}
                            />
                        </TouchableOpacity>
                    </View>
                )}
                </View>
                {this.state.isSelect?(
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item,index}) => this.renderSelectRow(item,'',index)}
                        ItemSeparatorComponent={() => (<View style={styles.line} />)}
                        ListFooterComponent={() => (<View style={styles.line} />)}
                        onEndReachedThreshold={0.2}
                        initialNumToRender={7}
                        scrollEnabled={true}
                    />
                ):(
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
                        refreshControl = {
                            <RefreshControl
                                refreshing={this.state.isLoading}
                                onRefresh={() => this.onLoad()}
                                colors={['#ffffff', '#ffffff', '#ffffff']}
                                progressBackgroundColor='#099fde'
                            />
                        }
                    />
                )}
                {this.state.isShowToTop ? <ScrollView root={this}/> : null}
            </View>
        );
    }
}
const $white = 'white';
const $lineBGColor = '#e5e5e5';
const $black = '#000';
const $textFontColor = '#81858a';
const $headerBGColor = 'rgba(240,240,240,0.95)';
const $headerBorderColor = '#A7A7AA';
const $textColor = '#0d81ff';
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: $white,
        flex: 1
    },
    headerWrap: {
        width: '100%',
        height: 64,
        backgroundColor: $headerBGColor,
        borderBottomWidth: 0.5,
        borderBottomColor: $headerBorderColor
    },
    header: {
        width: '100%',
        height: 44,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    backImage: {
        width: widthToDp(18),
        height: heightToDp(33),
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: widthToDp(34),
        fontFamily: 'PingFang-SC-Regular',
        color: $black,
        justifyContent: 'center',
        fontWeight: '300',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    },
    headerText: {
        fontSize: widthToDp(32),
        color: $textColor,
        fontFamily: 'PingFang-SC-Regular'
    },
    account: {
        textAlign: 'center',
        fontSize: widthToDp(22),
        fontFamily: 'PingFang-SC-Light',
        color: $textFontColor,
    },
    image: {
        width: widthToDp(36),
        height: heightToDp(36),
        justifyContent: 'center'
    },
    line: {
        height: 1,
        backgroundColor: $lineBGColor
    },
});