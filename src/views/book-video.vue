<template>
	<div class="home">
		<div class="header">
			<p>书影音</p>
			<span
				><a href=""><img src="/img/ic_actionbar_search_icon.png" alt="" /></a
			></span>
			<span
				><a href=""><img src="/img/ic_chat_green.png" alt="" /></a
			></span>
		</div>
		<div class="nav">
			<ul>
				<li v-for="(i, index) in navtext" :key="index" @click="navtab(index)" :class="{ active: index == isactive }">
					<router-link :to="i.url">
						<p>{{ i.text }}</p>
					</router-link>
				</li>
			</ul>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isactive: 0,
				navtext: [
					{
						url: "/about/movie",
						text: "电影",
					},
					{
						url: "/about/book",
						text: "读书",
					},
					{
						url: "/about/TV",
						text: "电视",
					},
					{
						url: "/about/city",
						text: "同城",
					},
					{
						url: "/about/music",
						text: "音乐",
					},
				],
			};
		},
		methods: {
			navtab(index) {
				this.isactive = index;
			},
		},
	};
</script>

<style scoped>
	.header {
		width: 100%;
		height: 3rem;
		border-bottom: 0.1rem solid #ccc;
		position: fixed;
		top: 0;
		background-color: rgb(235, 235, 235);
	}
	.header p {
		text-align: center;
		line-height: 3rem;
		font-size: 1.3rem;
	}
	.header span img {
		width: 2rem;
	}
	.header span:nth-of-type(1) {
		position: absolute;
		top: 0.4rem;
		right: 4rem;
	}
	.header span:nth-of-type(2) {
		position: absolute;
		top: 0.4rem;
		right: 1rem;
	}
	.nav {
		width: 100%;
		height: 2.5rem;
		border-bottom: 0.1rem solid #ccc;
		margin-top: 3rem;
	}
	.nav ul {
		width: 100%;
		height: 2.5rem;
		display: flex;
		list-style: none;
	}
	.nav ul li {
		width: 20%;
		height: 2.5rem;
		text-align: center;
		line-height: 2.5rem;
	}
	.nav ul li a {
		text-decoration: none;
		color: #666;
	}
	.active {
		background-color: rgb(2, 211, 17) !important;
	}
</style>
>
