import Vue from 'vue'
import App from './App.vue'
import Slider from './components/Slider.vue'
import Date from './components/Date.vue'
import Dash from './components/Dash.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

Vue.component('input-dashboard', Dash)
Vue.component('input-slider', Slider)
Vue.component('input-datepicker', Date)

// Make BootstrapVue available
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
