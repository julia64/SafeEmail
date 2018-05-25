import {
    Dimensions
} from 'react-native';

// 58 app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
const deviceHieghtDp = Dimensions.get('window').height;
// UI 默认给图是 640
const uiWidthPx = 750;
const uiHeightPx = 1334;

export const widthToDp = (uiElementPx) => {
    return uiElementPx * deviceWidthDp / uiWidthPx;
};

export const heightToDp = (uiElementPx) => {
    return uiElementPx * deviceHieghtDp / uiHeightPx;
};