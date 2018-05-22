/*
 * @Author: guoyu19961004
 * @Date:   2018-05-22 20:18:22
 * @Last Modified by:   guoyu19961004
 * @Last Modified time: 2018-05-22 22:33:37
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
const {
    width
} = Dimensions.get('window');

export default class EmailItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemChange: false
        };
        this.starUri = {
            star: require('../../res/images/emailbox/star_red.png'),
            notStar: require('../../res/images/emailbox/star_gray.png')
        };
        //标记星标文件
        this.changeAsterisk = (item) => {
            item.star = !item.star;
            this.setState({
                itemChange: !this.state.itemChange
            });
        };
        this.select = () => {
            const {
                navigate
            } = props.navigation;
            navigate('SelectEmail', {
                data: props.data,
                itemId: props.id,
                transition: 'forFade',
            });
        };
    }
    render() {
        const item = this.props.info;
        return (
            <View style={styles.row}>
                <TouchableOpacity
                    onLongPress={()=>this.props.isSelect?null:this.select()}
                >
                    <View style={styles.rowContainer}>
                        <View style={[styles.selectWrap],{borderColor:item.isSelect?$whiteBorderColor:$borderColor}}>
                            {item.isSelect?(<Image
                                source={require('../../res/images/emailbox/select.png')}
                                style={styles.select}
                            />):null}
                        </View>
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
        );
    }
}

const $notReadFontColor = '#31353b';
const $hasReadFontColor = '#81858a';
const $borderColor = '#000';
const $whiteBorderColor = '#fff';
const styles = StyleSheet.create({
    row: {
        height: heightToDp(168),
    },
    name: {
        fontSize: widthToDp(34),
        fontFamily: 'PingFang-SC-Medium',
        color: $notReadFontColor
    },
    selectWrap: {
        width: widthToDp(45),
        height: widthToDp(45),
        borderRadius: widthToDp(22),
        borderWidth: widthToDp(1),
        borderColor: $borderColor,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: widthToDp(30),
        marginTop: heightToDp(60)
    },
    select: {
        width: widthToDp(44),
        height: widthToDp(44),
        marginLeft: widthToDp(30),
        marginTop: heightToDp(60)
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