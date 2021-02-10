import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import kendo from "@progress/kendo-ui"

Vue.config.productionTip = false

new Vue({
  kendo,
  vuetify,
  render: h => h(App)
}).$mount('#app')
