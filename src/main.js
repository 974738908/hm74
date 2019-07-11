import Vue from 'vue'
import App from './App.vue'

import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 1.默认索引 文件夹下存在 index.js index.vue index.json 默认加载这些文件
// 2.在使用vue-cli的时候 @符号在路径中作为前缀使用的时候 代表src
import router from '@/router'

// 导入axios
import axios from 'axios'
Vue.prototype.axios = axios

Vue.use(ELEMENT)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
