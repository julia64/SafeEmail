/*
 * @Author: guoyu19961004
 * @Date:   2018-05-22 21:16:49
 * @Last Modified by:   guoyu19961004
 * @Last Modified time: 2018-05-22 21:31:29
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';

import EmailItem from '../components/emailItem';

export default class SelectEmail extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this._dataRow = {};
        this.openRowId = '';
        this.state = {
            dataSource: props.navigation.getParam('data', {}),
            isLoading: false,
            scrollEnable: true,
            hasIdOpen: false,
            isShowToTop: false,
            itemChange: false
        };
        //List列表
        this._renderRow = (item, sectionId, rowId) => {
            let id = sectionId + '-' + rowId;
            return (
                <EmailItem
                    info={item}
                    navigation={this.props.navigation}
                    id={id}
                />
            );
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item,index}) => this._renderRow(item,'',index)}
                    ItemSeparatorComponent={() => (<View style={styles.line} />)}
                    ListFooterComponent={() => (<View style={styles.line} />)}
                    onEndReachedThreshold={50}
                    initialNumToRender={7}
                    // renderScrollComponent={(props) => {
                    //     return <ScrollView scrollEnabled={this.state.scrollEnable} {...props}/>;
                    // }}
                    // refreshControl = {
                    //     <RefreshControl
                    //         refreshing={this.state.isLoading}
                    //         onRefresh={() => this.onLoad()}
                    //         colors={['#ffffff', '#ffffff', '#ffffff']}
                    //         progressBackgroundColor='#099fde'
                    //     />
                    // }
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