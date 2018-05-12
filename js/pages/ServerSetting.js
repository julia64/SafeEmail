import * as React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native';
import pxToDp from '../common/pxToDp';
import { Navigator } from 'react-native-deprecated-custom-components';
import EXCHANGE from './EXCHANGE'
import IMAP from './IMAP'
import POP from './POP'


export default class ServerSetting extends React.Component {
    constructor(props) {
        super(props);

    }
    //告知Navigator 模块切换时的效果
    configureScene() {
        return Navigator.SceneConfigs.FadeAndroid;
    }

    //根据传递的信息, 处理界面的切换
    renderScene(router, navigator) {
        switch (router.name) {
            case 'Page1':
                return <EXCHANGE navigator={navigator}/>;
            case 'Page2':
                return <IMAP navigator={navigator}/>;
            case 'Page3':
                return <POP navigator={navigator}/>;
        }
    }

    render() {
        return (
            //根View
            <Navigator
                initialRoute={{name:'Page1'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }
}

const styles = StyleSheet.create({
    tabBarText:{
        fontSize:pxToDp(30),
        fontWeight:"300",
        color:'#31353b'
    }
});