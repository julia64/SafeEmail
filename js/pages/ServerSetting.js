import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';


import {
    widthToDp,
    heightToDp
} from '../common/pxToDp';
import NavBar from './NavBar';



export default class ServerSetting extends Component {
    constructor(props) {
        super(props);

    }
    //告知Navigator 模块切换时的效果
    // configureScene() {
    //     return Navigator.SceneConfigs.FadeAndroid;
    // }

    //根据传递的信息, 处理界面的切换
    // renderScene(router, navigator) {
    //     switch (router.name) {
    //         case 'Page1':
    //             return <EXCHANGE navigator={navigator}/>;
    //         case 'Page2':
    //             return <IMAP navigator={navigator}/>;
    //         case 'Page3':
    //             return <POP navigator={navigator}/>;
    //     }
    // }

    render() {
        return (
            //根View
            <NavBar navigation={this.props.navigation} />
        );
    }
}

const $textColor = '#31353b';
const styles = StyleSheet.create({
    tabBarText: {
        fontSize: widthToDp(30),
        fontWeight: '300',
        color: $textColor
    }
});