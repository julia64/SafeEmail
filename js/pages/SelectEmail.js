/*
 * @Author: guoyu19961004
 * @Date:   2018-05-22 21:16:49
 * @Last Modified by:   guoyu
 * @Last Modified time: 2018-05-23 16:52:29
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';

import emitter from '../utils/events';

import EmailItem from '../components/emailItem';
//获取邮件Index值函数
const getEmailIndexByKeyValue = (emailSource, keyValue) => {
    return emailSource.findIndex((element) => {
        return element.key == keyValue;
    });
};


export default class SelectEmail extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            dataSource: props.navigation.getParam('data', []),
            itemChange: false
        };
        this.emailKeys = props.navigation.getParam('emialKeys', []);
        //List列表
        this._renderRow = (item, sectionId, rowId) => {
            let id = sectionId + '-' + rowId;
            return (
                <EmailItem
                    info={item}
                    navigation={props.navigation}
                    id={id}
                    emailKeys={this.emailKeys}
                    isSelect={true}
                />
            );
        };
    }
    componentDidMount() {
        const {
            isFocused,
            setParams,
            getParam
        } = this.props.navigation;

        this.eventEmitter = emitter.addListener('emailSelect', () => {
            //全选按钮处理
            if (isFocused()) {
                //判断是否全选
                this.emailKeys = [];
                if (getParam('selectAll', false)) {
                    //取消全选操作
                    this.setState({
                        dataSource: this.state.dataSource.map((element) => {
                            element.select = false;
                            return element;
                        })
                    });
                    setParams({
                        selectNumber: 0,
                        selectAll: false
                    });
                    console.log(this.emailKeys);
                } else {
                    //全选操作
                    this.setState({
                        dataSource: this.state.dataSource.map((element) => {
                            element.select = true;
                            this.emailKeys.push(element.key);
                            return element;
                        })
                    });
                    setParams({
                        selectNumber: this.state.dataSource.length,
                        selectAll: true
                    });
                    console.log(this.emailKeys);
                }
            }
        });
    }
    // componentWillUnmount() {
    //     emitter.removeListener(this.eventEmitter);
    // }
    render() {
        return (
            <View style={styles.container}>
                <View>
                </View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item,index}) => this._renderRow(item,'',index)}
                    ItemSeparatorComponent={() => (<View style={styles.line} />)}
                    ListFooterComponent={() => (<View style={styles.line} />)}
                    onEndReachedThreshold={0.2}
                    initialNumToRender={7}
                />
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