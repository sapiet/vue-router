import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import PageHome from "./components/PageHome";
import PageShop from "./components/PageShop";
import PageArticle from "./components/PageArticle";
import NotFound from "./components/NotFound";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'root', path: '/', redirect: '/home' },
    { name: 'home', path: '/home', component: PageHome },
    { name: 'shop', path: '/shop', component: PageShop, children: [
      { name: 'article', path: 'article/:id(\\d+)', component: PageArticle },
    ]},
    // Lazy loading page example
    { name: 'contact', path: '/contact', component: resolve => require(['./components/PageContact'], resolve) },
    { name: 'notfound', path: '*', component: NotFound },
  ]
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
