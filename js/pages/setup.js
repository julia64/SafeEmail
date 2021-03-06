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
    createMaterialTopTabNavigator,
    createDrawerNavigator
} from 'react-navigation';
import StyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';

import headerBackImage from '../components/headerBackImage';
import headerRightConfirm from '../components/headerRightConfirm';
// import headerTitle from '../components/headerTitle';
// import slideInfoButton from '../components/slideInfoButton';
import sideMenu from '../components/sideMenu';
// import emailSelect from '../components/emailSelect';

import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import EXCHANGE from './EXCHANGE';
import IMAP from './IMAP';
import POP from './POP';
import WriteLetter from './WriteLetter';
import Settings from './Settings';
import SelectContact from './SelectContact';
import EmailCell from './EmailCell';
import UnReadEmail from './UnReadEmail';
import StarEmail from './StarEmail';
import TodoEvents from './TodoEvents';
import FinishEvents from './FinishEvents';
import Trash from './Trash';
import SentEmail from './SentEmail';
import DeletedEmail from './DeletedEmail';
import Attachments from './Attachments';

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

const DrawerNavigator = createDrawerNavigator({
    ReceiveEmail: {
        screen: HomePage
    },
    Profile: {
        screen: Settings
    },
    UnReadEmail: {
        screen: UnReadEmail
    },
    StarEmail: {
        screen: StarEmail
    },
    TodoEvents: {
        screen: TodoEvents
    },
    FinishEvents: {
        screen: FinishEvents
    },
    Trash: {
        screen: Trash
    },
    SentEmail: {
        screen: SentEmail
    },
    DeletedEmail: {
        screen: DeletedEmail
    },
    Attachments: {
        screen: Attachments
    }
}, {
    initialRouteName: 'ReceiveEmail',
    drawerWidth: widthToDp(630),
    drawerPosition: 'left',
    contentComponent: sideMenu
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
        screen: DrawerNavigator,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    WriteLetter: {
        screen: WriteLetter,
        navigationOptions: {
            headerTitle: '写邮件',
            headerRight: React.createElement(headerRightConfirm, {
                text: '发送'
            })
        }
    },
    EmailCell: {
        screen: EmailCell,
        navigationOptions: {
            headerTitle: '收件箱',
            headerRight: React.createElement(headerRightConfirm)
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