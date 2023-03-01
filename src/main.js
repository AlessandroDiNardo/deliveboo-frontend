import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css' ;
import  bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

createApp(App).mount('#app')
