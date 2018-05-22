import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    RefreshControl,
    ScrollView
} from 'react-native';
import SwipeitemView from '../components/swipeLeft';
import {
    widthToDp
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
    'attachment': true
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
    attachment: true
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
    'attachment': true
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
    'attachment': false
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
    'attachment': true
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
    'attachment': false
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
    'attachment': false
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
    'attachment': false
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
    'attachment': false
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
    'attachment': false
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
    'attachment': false
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
    'attachment': false
}];

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this._dataRow = {};
        this.openRowId = '';
        this.state = {
            dataSource: props.navigation.getParam('data', data),
            isLoading: false,
            scrollEnable: true,
            hasIdOpen: false,
            isShowToTop: false,
            itemChange: false
        };
        this.onLoad = () => {
            setTimeout(() => {
                this.setState({
                    isLoading: false
                });
            }, 2000);
        };
        //右侧滑动按钮设置
        this._rightButtons = (item) => {
            return [{
                id: 1,
                text: item.todo ? '取消待办' : '标为待办',
                width: widthToDp(130),
                textWidth: widthToDp(100),
                bgColor: '#badaff',
                color: '#0d81ff',
                fontSize: widthToDp(36),
                underlayColor: '#ffffff',
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
                color: '#ffffff',
                fontSize: widthToDp(36),
                underlayColor: '#ffffff',
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
                color: '#ffffff',
                fontSize: widthToDp(36),
                underlayColor: '#ffffff',
                onPress: (event, id) => {
                    //删除这封邮件
                    const rowId = parseInt(id.split('-')[1], 10);
                    this.state.dataSource.splice(rowId, 1);
                },
            }];
        };
        //List列表
        this._renderRow = (item, sectionId, rowId) => {
            let rightBtn = this._rightButtons(item);
            let id = sectionId + '-' + rowId;
            return (
                <SwipeitemView
                    root={this}
                    ref={(row) => this._dataRow[id] = row}
                    id={id}
                    animationType='timing'
                    rightBtn={rightBtn}
                >
                    <EmailItem
                        info={item}
                        navigation={this.props.navigation}
                        data={this.state.dataSource}
                        id={id}
                    />
                </SwipeitemView>
            );
        };
    }
    render() {
        // let listView = this._listView();
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item,index}) => this._renderRow(item,'',index)}
                    ItemSeparatorComponent={() => (<View style={styles.line} />)}
                    ListFooterComponent={() => (<View style={styles.line} />)}
                    onEndReachedThreshold={50}
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
                {this.state.isShowToTop ? <ScrollView root={this}/> : null}
            </View>
        );
    }
}
const $white = 'white';
const $lineBGColor = '#e5e5e5';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: $white
    },
    line: {
        height: 1,
        backgroundColor: $lineBGColor
    },
});