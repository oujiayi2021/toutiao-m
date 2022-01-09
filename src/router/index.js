import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
		path: "/home",
		name: "Home",
		component: Home,
	},
	{
		path: "",
		redirect: "/home"
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/book-video.vue"),
		children: [{
				path: "",
				redirect: "movie",
			},
			{
				path: "movie",
				component: () => import("../views/book/movie.vue"),
			},
			{
				path: "book",
				component: () => import("../views/book/book.vue"),
			},
			{
				path: "TV",
				component: () => import("../views/book/TV.vue"),
			},
			{
				path: "city",
				component: () => import("../views/book/city.vue"),
			},
			{
				path: "music",
				component: () => import("../views/book/music.vue"),
			},
		],
	},
	{
		path: "/guangbo",
		name: "guangbo",
		component: () => import("../views/radio.vue"),
	},
	{
		path: "/group",
		name: "group",
		component: () => import("../views/group.vue"),
	},
	{
		path: "/my",
		name: "my",
		component: () => import("../views/my.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	linkActiveClass: "active"
});

export default router;