#调试注意
pages/setup.js下AppNavigator下initialRouteName为第一页，测试页面时可更改其内容跳过已完成页面


## 2018-5-12 更新
轮播页已完成

登录页面功能实现，颜色不完全匹配

服务器设置三个页面已完成

邮箱设置已完成

邮件箱  -  已完成基本列表和左滑出现菜单，星标功能未完全实现

## 2018-5-16 更新
启动页 登录页 服务器设置页导航完成

EXCHANGE IMAP POP 三个协议之间页面切换及UI

导航栏UI更新

确定按钮设置，功能未完善

确定按钮功能预计实现思路

1.确定按钮点击时哪个页面是活跃的this.props.navigation.isFocused()判断

2.非嵌套组件间通信   发布/订阅模式

## 2018-5-22 更新
重写settings页面

完成WriteLetter页面 - 点击附件图片会出现Modal框，UI已完成，但点其他地方模态框自动消失功能有问题

完成selectContact页面