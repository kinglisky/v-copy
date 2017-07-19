import Vue from 'vue'
import App from './App.vue'
import vcopy from '../src/index.js'

Vue.use(vcopy)

new Vue({
  el: '#app',
  render: h => h(App)
})
