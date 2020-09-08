/* console.log('==============')
console.log('tttttttttttttttt') */
import './other.js';
import './index.css';
import './news.css';
import './main.less';
import Vue from 'vue';
// import 'font-awesome/css/font-awesome.min.css'
import App from './App.vue'
import _ from 'lodash';

var objA = { "name": "戈德斯文", "car": "宝马" };
var objB = { "name": "柴硕", "loveEat": true, 'aa': 888 };


console.log(_.assign(objA, objB));

new Vue({
    render: h => h(App)
}).$mount('#app')