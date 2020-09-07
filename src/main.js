/* console.log('==============')
console.log('tttttttttttttttt') */
import './other.js';
import './index.css';
import './news.css';
import './main.less';
import Vue from 'vue';
import App from './App.vue'

new Vue({
    render: h => h(App)
}).$mount('#app')