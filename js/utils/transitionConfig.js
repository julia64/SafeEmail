/*
 * @Author: guoyu19961004
 * @Date:   2018-05-22 19:51:45
 * @Last Modified by:   guoyu19961004
 * @Last Modified time: 2018-05-22 20:05:11
 */
import {
    Animated,
    Easing
} from 'react-native';
import StyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
const transitionConfig = () => ({
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
        console.log(transition);
        return StyleInterpolator[transition](sceneProps);
    }
});

export default transitionConfig;