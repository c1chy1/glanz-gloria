import {createApp} from 'vue'
import App from './App.vue'
import '../src/fonts/fonts.css'
import './index.css'
import router from './router'
import 'vue-universal-modal/dist/index.css'
import VueUniversalModal from 'vue-universal-modal'
import {VueCookieNext} from 'vue-cookie-next'
import cookies from "./directives/cookies";


import runtime from "serviceworker-webpack-plugin/lib/runtime";


if ("serviceWorker" in navigator) {
    runtime.register();
}

createApp(App)
    .directive("cookies", cookies)
    .use(router)
    .use(VueUniversalModal, {
        teleportTarget: '#modals',
        modalComponent: 'Modal',
    })
    .use(VueCookieNext)
    .mount('#app')
