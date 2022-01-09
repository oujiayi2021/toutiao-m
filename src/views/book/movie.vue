<template>
	<div class="movie">
		<div class="hot-movie" style="margin-top:2rem">
			<p>正在上映的电影-北京</p>
			<ul id="movie1">
				<li v-for="(i, index) in hotMovie.subjects" :key="index">
					<a href="#"><img :src="i.cover" alt="" /></a>
					<a href="#">{{ i.title }}</a>
					<p>评分:{{ i.rate }}</p>
				</li>
			</ul>
		</div>
		<div class="new-movie">
			<p>即将上映的电影</p>
			<ul id="movie2">
				<li v-for="(i, index) in newMovie.subjects" :key="index">
					<a href="#"><img :src="i.cover" alt="" /></a>
					<a href="#">{{ i.title }}</a>
					<p>评分:{{ i.rate }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
				hotMovie: [],
				newMovie: [],
			};
		},
		methods: {
			getHotmovie() {
				axios.get("/data/hot-movie.json").then((res) => {
					this.hotMovie = res.data;
				});
			},
			getNewmovie() {
				axios.get("/data/new-movie.json").then((res) => {
					this.newMovie = res.data;
				});
			},
		},
		mounted() {
			this.getHotmovie();
			this.getNewmovie();
		},
	};
</script>

<style scoped>
	.hot-movie {
		width: 100%;
		height: 18rem;
		overflow: hidden;
		box-sizing: border-box;
		padding-left: 1rem;
	}
	.hot-movie p {
		line-height: 2rem;
	}
	.hot-movie ul {
		width: 100vw;
		height: 15rem;
		display: flex;
		list-style: none;
		margin-top: 0.5rem;
		transition: all 0.5s;
		overflow: auto;
	}
	.hot-movie ul::-webkit-scrollbar {
		display: none !important;
	}
	.hot-movie ul li {
		width: 30%;
		height: 15rem;
		text-align: center;
		margin-right: 1rem;
	}
	.hot-movie ul li img {
		width: 7rem;
		height: 11rem;
	}
	.hot-movie ul li a:nth-of-type(2) {
		display: inline-block;
		width: 100%;
		font-size: 0.9rem;
		text-align: center;
		text-decoration: none;
		color: #000;
	}
	.hot-movie ul li p {
		text-align: center;
		font-size: 0.8rem;
		color: #ccc;
	}
	.new-movie {
		width: 100%;
		height: 22rem;
		overflow: hidden;
		box-sizing: border-box;
		padding-left: 1rem;
		margin-bottom: 5rem;
	}
	.new-movie p {
		line-height: 2rem;
	}
	.new-movie ul {
		width: 100vw;
		height: 15rem;
		display: flex;
		list-style: none;
		margin-top: 0.5rem;
		transition: all 0.5s;
		overflow: auto;
	}
	.new-movie ul::-webkit-scrollbar {
		display: none !important;
	}
	.new-movie ul li {
		width: 30%;
		height: 15rem;
		text-align: center;
		margin-right: 1rem;
	}
	.new-movie ul li img {
		width: 7rem;
		height: 11rem;
	}
	.new-movie ul li a:nth-of-type(2) {
		display: inline-block;
		width: 100%;
		font-size: 0.9rem;
		text-align: center;
		text-decoration: none;
		color: #000;
	}
	.new-movie ul li p {
		text-align: center;
		font-size: 0.8rem;
		color: #ccc;
	}
</style>
>
