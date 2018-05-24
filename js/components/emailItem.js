/*
 * @Author: guoyu19961004
 * @Date:   2018-05-22 20:18:22
 * @Last Modified by:   guoyu
 * @Last Modified time: 2018-05-24 11:42:01
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';

export default class EmailItem extends Component {
    constructor(props) {
        super(props);
        this.selectUri = {
            select: require('../../res/images/emailbox/select.png'),
            choose: require('../../res/images/emailbox/choose.png')
        };
        this.starUri = {
            star: require('../../res/images/emailbox/star_red.png'),
            notStar: require('../../res/images/emailbox/star_gray.png')
        };
    }
    render() {
        const item = this.props.info;
        const width = this.props.isSelect ? widthToDp(665) : Dimensions.get('window').width;
        return (
            <View style={styles.row}>
                <TouchableOpacity
                    onLongPress={this.props.onLongPress}
                    onPress={this.props.onPress}
                >
                    <View style={styles.rowContainer}>
                        {this.props.isSelect?(<Image
                            source={item.select?this.selectUri.select:this.selectUri.choose}
                            style={styles.select}
                        />):null}
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
                        <View style={[styles.styleColumn,{width: width - widthToDp(130)}]}>
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
                                {this.props.isSelect?(
                                    <View
                                        style={styles.star}
                                    >
                                        <Image
                                            style={{width:widthToDp(25),height:heightToDp(25)}}
                                            source={item.star?this.starUri.star:this.starUri.notStar}
                                        />
                                    </View>
                                ):(
                                    <TouchableOpacity
                                        onPress={this.props.changeAsterisk}
                                        style={styles.star}
                                    >
                                        <Image
                                            style={{width:widthToDp(25),height:heightToDp(25)}}
                                            source={item.star?this.starUri.star:this.starUri.notStar}
                                        />
                                    </TouchableOpacity>
                                )}
                            </View>
                            <Text
                                style={[styles.description,{width: width - widthToDp(150)}]}
                                numberOfLines={1}
                            >
                                {item.description}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const $notReadFontColor = '#31353b';
const $hasReadFontColor = '#81858a';
const styles = StyleSheet.create({
    row: {
        height: heightToDp(168),
    },
    name: {
        fontSize: widthToDp(34),
        fontFamily: 'PingFang-SC-Medium',
        color: $notReadFontColor
    },
    select: {
        width: widthToDp(44),
        height: widthToDp(44),
        marginLeft: widthToDp(30)
    },
    imgWrap: {
        width: widthToDp(130),
        height: '100%',
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
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
        width: '100%'
    },
    styleColumn: {
        flexDirection: 'column'
    },
    title: {
        fontSize: widthToDp(28),
        fontFamily: 'PingFang-SC-Medium',
        color: $notReadFontColor
    },
    description: {
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