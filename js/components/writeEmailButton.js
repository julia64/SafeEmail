/*
 * @Author: WZJ
 * @Date:   2018-05-16 16:38:51
 * @Last Modified by:   guoyu
 * @Last Modified time: 2018-05-24 18:33:04
 * @Description 导航栏右边确定按钮
 */
import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    OffCanvas3D
} from 'react-native-off-canvas-menu';
import {
    widthToDp,
    heightToDp
} from '../utils/pxToDp';

export default class slideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
        this.handleMenu = () => {
            this.setState({
                menuOpen: !this.state.menuOpen
            });
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <OffCanvas3D
                    active={this.state.menuOpen}
                    onMenuPress={this.handleMenu.bind(this)}
                    backgroundColor={'#222222'}
                    menuTextStyles={{color: 'white'}}
                    handleBackPress={true}
                    // menuItems={[{
                    //     title: 'Menu 1',
                    //     icon: <Icon name="camera" size={35} color='#ffffff' />,
                    //     renderScene: <MyScene/>
                    // },{
                    //     title: 'Menu 2',
                    //     icon: <Icon name="bell" size={35} color='#ffffff' />,
                    //     renderScene: <AnotherScene/>
                    // }
                    // ]}
                />
            </View>
        );
    }
}
//样式
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: widthToDp(36),
        height: heightToDp(36),
        justifyContent: 'center'
    }
});

// export default writeEmailButton;