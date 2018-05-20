import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList,
    RefreshControl,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';
import SwipeitemView from '../components/swipeLeft';
import {
    widthToDp,
    heightToDp
} from '../common/pxToDp';
const {
    width
} = Dimensions.get('window');

const data = [{
    key: '1',
    email: 'f.lee@taylor.edu',
    name: '张三张',
    description: '本周五下午在十大黄金分割阿萨德股份将黄瓜大环境股份黄金时代感几乎覆盖圣诞节后果房间号公司环境',
    title: '本周例会',
    img: require('../../res/images/me.jpg'),
    date: '09:21',
    star: true,
    read: true,
    forward: true,
    todo: true,
    attachment: true
}, {
    key: '2',
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
    key: '3',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    star: true,
    read: false,
    forward: true,
    todo: true,
    attachment: true
}, {
    key: '4',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    star: false,
    read: false,
    forward: true,
    todo: false,
    attachment: false
}, {
    key: '5',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    star: false,
    read: true,
    forward: true,
    todo: false,
    attachment: true
}, {
    key: '6',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    star: true,
    read: false,
    forward: false,
    todo: false,
    attachment: false
}, {
    key: '7',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    star: true,
    read: true,
    forward: false,
    todo: false,
    attachment: false
}, {
    key: '8',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    star: true,
    read: true,
    forward: false,
    todo: false,
    attachment: false
}, {
    key: '9',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    star: true,
    read: true,
    forward: false,
    todo: false,
    attachment: false
}, {
    key: '10',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    star: true,
    read: true,
    forward: false,
    todo: false,
    attachment: false
}, {
    key: '11',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    star: true,
    read: true,
    forward: false,
    todo: false,
    attachment: false
}, {
    key: '12',
    'email': 'f.lee@taylor.edu',
    'name': '张三张三张三张三',
    'description': '本周五下午在',
    'title': '本周例会',
    'img': require('../../res/images/me.jpg'),
    'date': '09:21',
    star: true,
    read: true,
    forward: false,
    todo: false,
    attachment: false
}];

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this._dataRow = {};
        this.openRowId = '';
        this.state = {
            dataSource: data,
            isLoading: false,
            scrollEnable: true,
            hasIdOpen: false,
            isShowToTop: false,
            isAsterisk: false,
            itemChange: false
        };
        this.starUri = {
            star: require('../../res/images/emailbox/star_red.png'),
            notStar: require('../../res/images/emailbox/star_gray.png')
        };
        this.onLoad = () => {
            setTimeout(() => {
                this.setState({
                    isLoading: false
                });
            }, 2000);
        };
        //标记星标文件
        this.changeAsterisk = (item) => {
            item.star = !item.star;
            this.setState({
                itemChange: !this.state.itemChange
            });
            // console.log(item, id);
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
                    rightBtn={rightBtn}>
                    <View style={styles.row}>
                        <TouchableOpacity
                        >
                            <View style={styles.rowContainer}>
                                <View style={styles.imgWrap}>
                                    <Image
                                        source={item.img}
                                        style={styles.img}
                                    />
                                    {item.todo?(<Image
                                        style={styles.todo}
                                        source={require('../../res/images/emailbox/todo.png')}
                                    />):null}
                                </View>
                                <View style={styles.styleColumn}>
                                    <View style={styles.styleRow}>
                                        {item.forward?(<Image
                                            style={styles.forward}
                                            source={require('../../res/images/emailbox/forward.png')}
                                        />):null}
                                        <Text style={[styles.name,{color:item.read?$hasReadFontColor:$notReadFontColor}]}>{item.name}</Text>
                                        {item.attachment?(<Image
                                            style={styles.attachment}
                                            source={require('../../res/images/emailbox/attachment.png')}
                                        />):null}
                                        <Text style={styles.date}>{item.date}</Text>
                                    </View>
                                    <View style={styles.styleRow}>
                                        <Text style={[styles.title,{color:item.read?$hasReadFontColor:$notReadFontColor}]} numberOfLines={1}>{item.title}</Text>
                                        <TouchableOpacity
                                            onPress={() => this.changeAsterisk(item)}
                                            style={styles.star}
                                        >
                                            <Image
                                                style={{width:widthToDp(25),height:heightToDp(25)}}
                                                source={item.star?this.starUri.star:this.starUri.notStar}/>
                                        </TouchableOpacity>
                                    </View>
                                    <Text
                                        style={styles.description}
                                        numberOfLines={1}
                                    >
                                        {item.description}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
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
const $notReadFontColor = '#31353b';
const $hasReadFontColor = '#81858a';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: $white
    },
    name: {
        fontSize: widthToDp(34),
        fontFamily: 'PingFang-SC-Medium',
        color: $notReadFontColor
    },
    row: {
        height: heightToDp(168),
    },
    line: {
        height: 1,
        backgroundColor: $lineBGColor
    },
    imgWrap: {
        width: widthToDp(130),
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    img: {
        borderRadius: widthToDp(40),
        height: heightToDp(80),
        width: widthToDp(80),
        marginTop: heightToDp(25)
    },
    todo: {
        width: widthToDp(24),
        height: heightToDp(22),
        marginTop: heightToDp(20)
    },
    rowContainer: {
        flexDirection: 'row',
        width: width
    },
    forward: {
        width: widthToDp(25),
        height: heightToDp(25),
        marginRight: widthToDp(10)
    },
    attachment: {
        width: widthToDp(24),
        height: heightToDp(22),
        marginLeft: widthToDp(10)
    },
    styleRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width - widthToDp(130)
    },
    styleColumn: {
        flexDirection: 'column',
        width: width,
        marginTop: heightToDp(20)
    },
    title: {
        fontSize: widthToDp(28),
        fontFamily: 'PingFang-SC-Medium',
        color: $notReadFontColor,
        marginTop: heightToDp(5)
    },
    description: {
        width: width - widthToDp(150),
        fontSize: widthToDp(28),
        fontFamily: 'PingFang-SC-Light',
        color: $hasReadFontColor,
        marginTop: heightToDp(5)
    },
    date: {
        position: 'absolute',
        top: heightToDp(15),
        color: $notReadFontColor,
        right: widthToDp(30),
        fontSize: widthToDp(24),
    },
    star: {
        position: 'absolute',
        right: widthToDp(50),
        top: heightToDp(10)
    }
});