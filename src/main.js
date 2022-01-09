import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/js/utils.js";
import swiperc from "../node_modules/swiper/dist/css/swiper.min.css";
import swiperjs from "../node_modules/swiper/dist/js/swiper";
import axios from "axios/dist/axios";
import font from "../public/font/iconfont.css"
// Vue.prototype.$http = axios

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	swiperjs,
	swiperc,
	axios,
	font,
	render: (h) => h(App),
}).$mount("#app");