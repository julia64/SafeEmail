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
    Text,
    Platform
} from 'react-native';
import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';

import SwipeitemView from '../components/swipeLeft';
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

//获取邮件Index值函数
// const getEmailIndexByKeyValue = (keyValue, emailData) => {
//     return emailData.findIndex((element) => {
//         return element.key === keyValue;
//     });
// };

export default class Attachments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: data,
            isLoading: false,
            scrollEnable: true,
            hasIdOpen: false,
            isShowToTop: false,
            itemChange: false,
            isSelect: false,
            selectAll: false
        };
        this._dataRow = {};
        this.openRowId = '';
        this.selectNumber = 1;
        this.emailKeys = [];
        this.onLoad = () => {
            setTimeout(() => {
                this.setState({
                    isLoading: false
                });
            }, 2000);
        };
        //右侧滑动按钮设置
        this.rowRightButtons = (item) => {
            return [{
                id: 1,
                text: item.todo ? '取消待办' : '标为待办',
                width: widthToDp(130),
                textWidth: widthToDp(100),
                bgColor: $blueColor,
                color: $textColor,
                fontSize: widthToDp(36),
                underlayColor: $blueColor,
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
                bgColor: $textColor,
                textWidth: widthToDp(100),
                color: $white,
                fontSize: widthToDp(36),
                underlayColor: $textColor,
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
        //全选列表
        this.renderSelectRow = (item, sectionId, rowId) => {
            let id = sectionId + '-' + rowId;
            return (
                <EmailItem
                    info={item}
                    id={id}
                    isSelect={true}
                    onPress={() => {
                        item.select = !item.select;
                        if (item.select) {
                            this.selectNumber++;
                            this.emailKeys.push(item.key);
                            console.log(this.emailKeys);
                        } else {
                            this.selectNumber--;
                            this.emailKeys.splice(this.emailKeys.indexOf(item.key),1);
                            console.log(this.emailKeys);
                        }
                        this.setState({
                            itemChange: !this.state.itemChange,
                            selectAll: this.selectNumber === this.state.dataSource.length
                        });
                    }}
                    onLongPress={()=>null}
                />
            );
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
                    boxbgColor='#fff'
                    animationType='timing'
                    rightBtn={rightBtn}
                >
                    <EmailItem
                        info={item}
                        id={id}
                        onLongPress={()=>{
                            item.select = true;
                            this.emailKeys.push(item.key);
                            this.setState({
                                isSelect: true
                            });
                        }}
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
        this.selectSolution = (type) => {
            if (type === 'delete') {
                if (this.state.selectAll) {
                    this.setState({
                        dataSource: [],
                        isSelect: false,
                        selectAll: false
                    });
                    this.emailKeys = [];
                    this.selectNumber = 1;
                } else if (this.emailKeys.length) {
                    this.setState({
                        dataSource: this.state.dataSource.filter((element) => !this.emailKeys.some((val) => (val === element.key))),
                        isSelect: false
                    });
                    this.emailKeys = [];
                    this.selectNumber = 1;
                } else {
                    console.log('未选择');
                }
            } else {
                if (this.state.selectAll) {
                    this.setState({
                        dataSource: this.state.dataSource.map((element) => {
                            element[type] = true;
                            element.select = false;
                            return element;
                        }),
                        isSelect: false,
                        selectAll: false
                    });
                    this.emailKeys = [];
                    this.selectNumber = 1;
                } else if (this.emailKeys.length) {
                    this.setState({
                        dataSource: this.state.dataSource.map((element) => {
                            //存在可key相等则返回TRUE,反之FALSE
                            if (this.emailKeys.some((val) => (val === element.key))) {
                                element[type] = true;
                            }
                            element.select = false;
                            return element;
                        }),
                        isSelect: false
                    });
                    this.emailKeys = [];
                    this.selectNumber = 1;
                } else {
                    console.log('未选择');
                }
            }
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrap}>
                    {this.state.isSelect?(
                        <View style={styles.header}>
                            <TouchableOpacity
                                style={styles.leftWrap}
                                onPress={()=>{
                                    this.emailKeys = [];
                                    this.setState({
                                        dataSource: this.state.dataSource.map((element) => {
                                            element.select = false;
                                            return element;
                                        }),
                                        isSelect: false,
                                        selectAll: false
                                    });
                                }}
                            >
                                <Image
                                    style={styles.backImage}
                                    source={require('../../res/images/emailbox/back.png')}
                                />
                            </TouchableOpacity>
                            <View style={styles.headerTitleWrap}>
                                <Text style={styles.headerTitle}>已选择{this.selectNumber}个文件</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.rightWrap}
                                onPress={()=>{
                                    this.emailKeys = [];
                                    if (this.state.selectAll) {
                                        //取消全选操作
                                        this.setState({
                                            dataSource: this.state.dataSource.map((element) => {
                                                element.select = false;
                                                return element;
                                            }),
                                            selectAll: false
                                        });
                                        this.selectNumber = 0;
                                    } else {
                                        //全选操作
                                        this.setState({
                                            dataSource: this.state.dataSource.map((element) => {
                                                element.select = true;
                                                this.emailKeys.push(element.key);
                                                return element;
                                            }),
                                            selectAll: true
                                        });
                                        this.selectNumber = this.state.dataSource.length;
                                    }
                                }}
                            >
                                <Text style={styles.headerText}>{this.state.selectAll?'取消全选':'全选'}</Text>
                            </TouchableOpacity>
                        </View>
                    ):(
                        <View style={styles.header}>
                            <TouchableOpacity
                                style={{marginLeft: widthToDp(30)}}
                                onPress={()=>this.props.navigation.openDrawer()}
                            >
                                <Image
                                    style={styles.image}
                                    source={require('../../res/images/emailbox/info.png')}
                                />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.headerTitle}>附件管理</Text>
                            </View>
                            <TouchableOpacity
                                style={{marginRight: widthToDp(30)}}
                                onPress={()=>this.props.navigation.navigate('WriteLetter')}
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
                        ListFooterComponent={() => (<View style={[styles.line,{marginBottom: heightToDp(100)}]} />)}
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
                {this.state.isSelect?(
                    <View style={bottomStyles.container}>
                        <TouchableOpacity onPress={()=>this.selectSolution('read')}>
                            <Text style={bottomStyles.text}>标为已读</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.selectSolution('star')}>
                            <Text style={bottomStyles.text}>标为星标</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.selectSolution('todo')}>
                            <Text style={bottomStyles.text}>标为待办</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.selectSolution('delete')}>
                            <Text style={bottomStyles.text}>删除</Text>
                        </TouchableOpacity>
                    </View>
                ):null}
            </View>
        );
    }
}
const $white = '#fff';
const $lineBGColor = '#e5e5e5';
const $black = '#000';
const $textFontColor = '#81858a';
const $headerBGColor = 'rgba(240,240,240,0.95)';
const $headerBorderColor = '#A7A7AA';
const $textColor = '#0d81ff';
const $bottomTextColor = '#31353b';
const $deleteFontColor = '#f63f3f';
const $blueColor = '#badaff';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: $white,
        flex: 1
    },
    headerWrap: {
        width: '100%',
        height: Platform.OS === 'ios' ? 64 : 54,
        backgroundColor: $headerBGColor,
        borderBottomWidth: 0.5,
        borderBottomColor: $headerBorderColor
    },
    header: {
        width: '100%',
        height: 44,
        marginTop: Platform.OS === 'ios' ? 20 : 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTitleWrap: {
        width: '100%'
    },
    leftWrap: {
        height: 44,
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        left: widthToDp(30),
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightWrap: {
        height: 44,
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        right: widthToDp(30),
        flexDirection: 'row',
        alignItems: 'center',
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
const bottomStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingLeft: widthToDp(30),
        paddingRight: widthToDp(30),
        height: heightToDp(100),
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: $white
    },
    text: {
        fontSize: widthToDp(28),
        fontFamily: 'PingFang-SC-Regular',
        color: $bottomTextColor,
        justifyContent: 'center'
    }
});