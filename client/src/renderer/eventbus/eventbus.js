// 少量使用eventbus来传递组件间消息 
// 在全局范围内使用的信息提示条，这个条只在App组件中创建，其他组件如果需要显示的话通过事件总线发起调用
// EventBus.$emit('message', {snacbar: true, color: 'error', toastsText: 'some messages'})

import Vue from 'vue'

export default new Vue({
  data: {
    // mockServerList 是创建出的服务器列表，保存在总线中供各个组件调用。当此开启的情况下有效。
    mockServerList: []
  }
})
