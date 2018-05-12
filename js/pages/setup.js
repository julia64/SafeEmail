import React,{Component} from 'react';
import WelcomePage from './WelcomePage'
import {Navigator} from 'react-native-deprecated-custom-component'

function setup(){
    //进行一些初始化配置
    class Root extends Component{
        renderScene(route,navigator){
            let Component=route.component;
            return <Component {...route.params} navigator={navigator}/>
        }
        render(){
            return <Navigator
            initialRoute={{component:WelcomePage}}
            renderScene={(route,navigator)=>this.renderScene(route,navigator)}
            />
        }}
    return <Root/>
}
module.exports=setup;