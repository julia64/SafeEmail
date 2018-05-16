import React, {
    Component
} from 'react';
import {
    View,
    Image,
    Dimensions
} from 'react-native';
const {
    height,
    width
} = Dimensions.get('window');

export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const {
            navigate
        } = this.props.navigation;
        setTimeout(() => {
            navigate('Login');
        }, 2000);
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return (
            <View>
                <Image
                    style={{width:width,height:height}}
                    source={require('../../res/images/sowing-map.png')}
                />
            </View>
        );
    }
}