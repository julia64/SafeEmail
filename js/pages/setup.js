/**
 * 导航栏路由列表协议页面
 */
import React from 'react';
import {
    Dimensions
} from 'react-native';
import {
    createStackNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation';
import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import EXCHANGE from './EXCHANGE';
import IMAP from './IMAP';
import POP from './POP';
import {
    widthToDp,
    heightToDp
} from '../common/pxToDp';
import headerBackImage from '../components/headerBackImage';
import headerRightConfirm from '../components/headerRightConfirm';

const ServerSetting = createMaterialTopTabNavigator({
    EXCHANGE: {
        screen: EXCHANGE,
        navigationOptions: {
            title: null
        }
    },
    IMAP: {
        screen: IMAP,
        navigationOptions: {
            title: null
        }
    },
    POP: {
        screen: POP,
        navigationOptions: {
            title: null
        }
    }
}, {
    initialRouteName: 'EXCHANGE',
    backBehavior: 'none',
    animationEnabled: false,
    initialLayout: {
        height: heightToDp(89),
        width: Dimensions.get('window').width,
    },
    // tabBarComponent: ProtocolNavBar,
    tabBarOptions: {
        activeTintColor: '#fff',
        inactiveTintColor: '#31353b',
        // scrollEnabled: false,
        indicatorStyle: {
            height: heightToDp(89),
            backgroundColor: '#0d81ff'
        },
        labelStyle: {
            fontSize: widthToDp(30),
            fontFamily: 'PingFang-SC-Regular'
        },
        style: {
            height: heightToDp(89),
            backgroundColor: '#fff',
            opacity: 0.95
        }
    }
});

const AppNavigator = createStackNavigator({
    Welcome: {
        screen: WelcomePage,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: LoginPage,
        navigationOptions: {
            header: null
        }
    },
    ServerSetting: {
        screen: ServerSetting,
        navigationOptions: ({
            navigation
        }) => ({
            title: '服务器设置',
            headerRight: React.createElement(headerRightConfirm, {
                navigation
            })
        })
    },
    HomePage: {
        screen: HomePage,
        navigationOptions: ({
            navigation
        }) => ({
            title: '收件箱',
            headerRight: React.createElement(headerRightConfirm, {
                navigation
            })
        })
    }
}, {
    initialRouteName: 'HomePage',
    navigationOptions: {
        headerTitleStyle: {
            fontSize: widthToDp(34),
            fontFamily: 'PingFang-SC-Regular',
            color: '#000',
            fontWeight: '300'
        },
        headerBackImage: headerBackImage
    }
});

export default AppNavigator;