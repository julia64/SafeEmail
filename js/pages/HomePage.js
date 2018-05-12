import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Navigator,
    Image,
    View,
    ListView,
    RefreshControl,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Alert
} from 'react-native';
import SwipeitemView from 'react-native-swipe-left'
import pxToDp from "../common/pxToDp";
const {height, width} = Dimensions.get('window');
let data = {
    "result": [
        {
            "email": "f.lee@taylor.edu",
            "name": "张三张",
            "description":"本周五下午在",
            "title":"本周例会",
            "img":require('../../res/images/me.jpg'),
            "date":"09:21",
        },
        {
            "email": "f.lee@taylor.edu",
            "name": "张三",
            "description":"本周五下午在",
            "title":"本周例会",
            "img":require('../../res/images/me.jpg'),
            "date":"09:21",
        },
        {
            "email": "f.lee@taylor.edu",
            "name": "张三张三",
            "description":"本周五下午在",
            "title":"本周例会",
            "img":require('../../res/images/me.jpg'),
            "date":"09:21",
        },
        {
            "email": "f.lee@taylor.edu",
            "name": "张三张三张三张三",
            "description":"本周五下午在",
            "title":"本周例会",
            "img":require('../../res/images/me.jpg'),
            "date":"09:21",
        },
        {
            "email": "f.lee@taylor.edu",
            "name": "张三张三张三张三",
            "description":"本周五下午在",
            "title":"本周例会",
            "img":require('../../res/images/me.jpg'),
            "date":"09:21",
        },
        {
            "email": "f.lee@taylor.edu",
            "name": "张三张三张三张三",
            "description":"本周五下午在",
            "title":"本周例会",
            "img":require('../../res/images/me.jpg'),
            "date":"09:21",
        },
        {
            "email": "f.lee@taylor.edu",
            "name": "张三张三张三张三",
            "description":"本周五下午在",
            "title":"本周例会",
            "img":require('../../res/images/me.jpg'),
            "date":"09:21",
        },
    ],
    "statusCode": 0
};
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) =>
                r1 !== r2
        });
        this._dataRow = {};
        this.openRowId = '';
        this.state = {
            dataSource: ds.cloneWithRows(data.result),
            isLoading: false,
            scrollEnable: true,
            hasIdOpen: false,
            isShowToTop: false,
            isAsterisk:false,
            star_uri:require('../../res/images/emailbox/star_gray.png'),
        };
        this.onLoad();
    }

    _listView() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(item) => this._renderRow(item)}
                renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                onEndReachedThreshold={10}
                ref="listview"
                renderScrollComponent={(props) => {
                    return <ScrollView scrollEnabled={this.state.scrollEnable} {...props}/>
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={() => this.onLoad()}
                        colors={['#ffffff', '#ffffff', '#ffffff']}
                        progressBackgroundColor="#099fde"/>
                }/>
        );
    }

    _rightButtons() {
        return [{
            id: 1,
            text: '标为待办',
            width: pxToDp(130),
            bgColor: '#badaff',
            color: '#0d81ff',
            fontSize:pxToDp(36),
            marginLeft:pxToDp(30),
            underlayColor:'#ffffff',
            onPress: () => {
                alert('delete1!')
            },
        }, {
            id: 2,
            text: '标为未读',
            width: pxToDp(130),
            bgColor: '#0d81ff',
            color: '#ffffff',
            fontSize:pxToDp(36),
            marginLeft:pxToDp(30),
            underlayColor:'#ffffff',
            onPress: () => {
                alert('delete2!')
            }
        }, {
            id: 3,
            text: '删除',
            width: pxToDp(130),
            bgColor: '#f63f3f',
            color: '#ffffff',
            fontSize:pxToDp(36),
            underlayColor:'#ffffff',
            onPress: () => {
                alert('delete3!');
            },
        }]
    }

    changeAsterisk() {
        this.setState({
            isAsterisk: !this.state.isAsterisk,
            star_uri:this.state.isAsterisk?require('../../res/images/emailbox/star_red.png'):require('../../res/images/emailbox/star_gray.png')
        });
    }

    _renderRow(item, sectionId, rowId) {
        let rightBtn = this._rightButtons();
        let id = '' + sectionId + rowId;
        return (
            <SwipeitemView
                root={this}
                ref={(row) => this._dataRow[id] = row}
                id={id}
                data={data}
                rightBtn={rightBtn}>
                <View style={styles.row}>
                    <TouchableOpacity
                    >
                        <View style={styles.rowContainer}>
                            <Image
                                source={item.img}
                                style={styles.img}
                            />
                            <View style={styles.styleColumn}>
                                <View style={styles.styleRow}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                                <View style={styles.styleRow}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <TouchableOpacity
                                        onPress={()=>this.changeAsterisk()}
                                        style={styles.star}
                                    >
                                        <Image
                                            style={{width:pxToDp(25),height:pxToDp(25)}}
                                            source={this.state.star_uri}/>
                                    </TouchableOpacity>

                                </View>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </SwipeitemView>
        );
    }

    _renderSeparator(sectionID, rowID) {
        return <View key={rowID} style={styles.line}/>
    }

    onLoad() {
        // this.setState({
        //     isLoading: true
        // });
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000);
    }

    render() {
        let listView = this._listView();
        return (
            <View style={styles.container}>
                {listView}
                {this.state.isShowToTop ? <ScrollTopView root={this}/> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    name:{
        fontSize:pxToDp(34),
        fontFamily:"PingFang-SC-Medium",
        color:'#31353b',
        marginTop:pxToDp(20)
    },
    row:{
        height:pxToDp(168),
    },
    line:{
        height:1,
        backgroundColor:'#e5e5e5'
    },
    img:{
        borderRadius:pxToDp(40),
        height: pxToDp(80),
        width: pxToDp(80),
        marginLeft:pxToDp(25),
        marginTop:pxToDp(25),
    },
    rowContainer:{
        flexDirection:'row',
        width:width
    },
    styleRow:{
        flexDirection:'row',
        width:width-pxToDp(125)
    },
    main:{
        flexDirection:'column',
        marginLeft:pxToDp(20),
    },
    styleColumn:{
        flexDirection:'column',
        width:width,
        marginLeft:pxToDp(20)
    },
    title:{
        fontSize:pxToDp(28),
        fontFamily:"PingFang-SC-Medium",
        color:'#31353b',
        marginTop:pxToDp(5)
    },
    description:{
        fontSize:pxToDp(28),
        fontFamily:"PingFang-SC-Light",
        color:'#81858a',
        marginTop:pxToDp(5)
    },
    date:{
        position:'absolute',
        top:pxToDp(25),
        color:'#31353b',
        right:pxToDp(30),
        fontSize:pxToDp(24),
    },
    star:{
        position:'absolute',
        right:pxToDp(50),
        top:pxToDp(10)
    }
});