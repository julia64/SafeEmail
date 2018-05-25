/**
 * 快捷回复语的模型
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';

export default class RepeatItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const item = this.props.info;
        return (
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                >
                    <View style={styles.rowContainer}>
                        <Text numberOfLines={1} style={styles.content}>{item.content}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        height: heightToDp(100),
    },
    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    content: {
        fontSize: widthToDp(34),
        marginLeft: widthToDp(30),
        marginRight: widthToDp(30)
    }
});