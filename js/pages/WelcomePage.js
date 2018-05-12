import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native'
const {height, width} = Dimensions.get('window');

import LoginPage from './LoginPage'

export default class WelcomePage extends Component{
    componentDidMount(){
        this.timer=setTimeout(()=>{
            this.props.navigator.resetTo({
                component:LoginPage
            })
        },1000);
    }
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer);
    }
    render(){
        return <View>
            <Image
                style={{width:width,height:height}}
                source={require('../../res/images/sowing-map.png')}
            />

        </View>
    }
}