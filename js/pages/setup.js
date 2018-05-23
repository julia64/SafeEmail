/**
 * 导航栏路由列表协议页面
 */
import React from 'react';
import {
    Animated,
    Easing,
    Dimensions
} from 'react-native';
import {
    createStackNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation';
import StyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';

import headerBackImage from '../components/headerBackImage';
import headerRightConfirm from '../components/headerRightConfirm';
import headerTitle from '../components/headerTitle';
import slideInfoButton from '../components/slideInfoButton';
import writeEmailButton from '../components/writeEmailButton';
import emailSelect from '../components/emailSelect';

import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import EXCHANGE from './EXCHANGE';
import IMAP from './IMAP';
import POP from './POP';
import WriteLetter from './WriteLetter';
import Settings from './Settings';
import SelectEmail from './SelectEmail';
import SelectContact from './SelectContact';

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
    tabBarOptions: {
        activeTintColor: '#fff',
        inactiveTintColor: '#31353b',
        tabStyle: {
            height: heightToDp(89),
            padding: 0,
            margin: 0
        },
        indicatorStyle: {
            height: heightToDp(89),
            backgroundColor: '#0d81ff'
        },
        labelStyle: {
            fontSize: widthToDp(30),
            fontFamily: 'PingFang-SC-Regular',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
            padding: 0
        },
        style: {
            height: heightToDp(89),
            backgroundColor: '#fff',
            opacity: 0.95,
            elevation: 0
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
        navigationOptions: {
            headerTitle: '服务器设置',
            headerRight: React.createElement(headerRightConfirm, {
                text: '确定'
            })
        }
    },
    HomePage: {
        screen: HomePage,
        navigationOptions: ({
            navigation
        }) => ({
            title: `${navigation.getParam('account','test@test.com')}`,
            headerLeft: slideInfoButton,
            headerTitle: headerTitle,
            headerRight: React.createElement(writeEmailButton, {
                navigation
            }),
            gesturesEnabled: false,
            header: null
        })
    },
    SelectEmail: {
        screen: SelectEmail,
        navigationOptions: ({
            navigation
        }) => ({
            title: `已选择${navigation.getParam('selectNumber',1)}封`,
            headerRight: React.createElement(emailSelect, {
                navigation
            })
        })
    },
    WriteLetter: {
        screen: WriteLetter,
        navigationOptions: {
            headerTitle: '写邮件',
            headerRight: React.createElement(headerRightConfirm, {
                text: '确定'
            })
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            headerTitle: '设置',
            headerRight: React.createElement(headerRightConfirm, {
                text: '确定'
            })
        }
    },
    SelectContact: {
        screen: SelectContact,
        navigationOptions: {
            headerTitle: '选择联系人',
            headerRight: React.createElement(headerRightConfirm, {
                text: '确定'
            })
        }
    },
}, {
    initialRouteName: 'HomePage',
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: (sceneProps) => {
            const {
                scene
            } = sceneProps;
            const {
                route
            } = scene;
            const params = route.params || {};
            const transition = params.transition || 'forHorizontal';
            // console.log(transition);
            return StyleInterpolator[transition](sceneProps);
        }
    }),
    navigationOptions: {
        headerTitleStyle: {
            fontSize: widthToDp(34),
            fontFamily: 'PingFang-SC-Regular',
            color: '#000',
            justifyContent: 'center',
            fontWeight: '300',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            textAlign: 'center'
        },
        headerStyle: {
            elevation: 0,
            backgroundColor: 'rgba(250,250,250,0.95)'
        },
        headerBackTitle: null,
        headerBackImage: headerBackImage
    }
});

export default AppNavigator;