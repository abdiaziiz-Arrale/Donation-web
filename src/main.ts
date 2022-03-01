import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'

import Home from  './components/pages/Home.vue'
import './assets/index.css'

const router = createRouter({
      routes:[
            { path: '/Home', components: Home},
      ],
      history: createWebHistory()
});
const app =createApp(App);
app.use(router);

app.mount('#app')
