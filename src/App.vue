<template>
	<div id="app">
		<router-view />
		<div id="nav">
			<ul>
				<li v-for="(item, index) in data" :key="index">
					<router-link :to="item.url">
					<img  :src="item.img" alt="" />
					<img  :src="item.active" alt="" />
					<p>{{ item.tittle }}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	#nav {
		width: 100%;
		height: 4rem;
		position: fixed;
		bottom: 0rem;
		border-top: 1px solid #ccc;
		background-color: #fff;
	}
	#nav ul {
		width: 100%;
		height: 4rem;
		list-style: none;
		display: flex;
		
	}
	#nav ul li {
		width: 20%;
		height: 4rem;
		text-align: center;
	}
	#nav ul li a img {
		width: 50%;
		vertical-align: middle;
		margin-left: 25%;
	}
	#nav ul li > a {
		display: block;
		width: 100%;
		text-decoration: none;
		color: black;
	}
	#nav .active p {
		color: #42b983;
	}
	#nav a img:first-of-type,#nav .active img:last-of-type{
		display: block;
	}
	#nav a img:last-of-type,#nav .active img:first-of-type{
		display: none;
	}
</style>
<script>
	export default {
		props: ["tabName"],
		data() {
			return {
				thatnum: 0,
				data: [
					{
						tittle: "首页",
						url: "/home",
						img: "/img/ic_tab_home_normal.png",
						active: "/img/ic_tab_home_active.png",
					},
					{
						tittle: "书影音",
						url: "/about",
						img: "/img/ic_tab_subject_normal.png",
						active: "/img/ic_tab_subject_active.png",
					},
					{
						tittle: "广播",
						url: "/guangbo",
						img: "/img/ic_tab_status_normal.png",
						active: "/img/ic_tab_status_active.png",
					},
					{
						tittle: "小组",
						url: "/group",
						img: "/img/ic_tab_group_normal.png",
						active: "/img/ic_tab_group_active.png",
					},
					{
						tittle: "我的",
						url: "/my",
						img: "/img/ic_tab_profile_normal.png",
						active: "/img/ic_tab_profile_active.png",
					},
				],
			};
		},
		methods: {
			addclassname(index) {
				this.thatnum = index;
			},
			mounted() {
				this.thatnum = this.tabName;
			},
		},
	};
</script>

<style></style>
