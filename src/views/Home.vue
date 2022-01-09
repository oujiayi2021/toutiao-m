<template>
	<div class="home">
		<div class="header">
			<div>
				<input type="text" id="search" placeholder="影视 图书 唱片 小组等" />
			</div>
			<div>
				<a href="#"><img src="/img/ic_chat_white.png" alt="" /></a>
			</div>
		</div>
		<div class="swiper mySwiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="/img/01.jpg" alt="" /></div>
				<div class="swiper-slide"><img src="/img/02.jpg" alt="" /></div>
				<div class="swiper-slide"><img src="/img/03.jpg" alt="" /></div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination" slot="pagination"></div>
		</div>
		<div class="message" v-for="(item,index) in message.recommend_feeds" :key="index">
			<div>
				<a href="#">{{item.title}}</a>
				<p>{{item.target.desc}}</p>
				<p>作者:{{item.target.author.name}}</p>
			</div>
			<div>
				<img :src="item.target.cover_url" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios"
	// import Swiper, { Autoplay,Pagination } from "swiper";
	// Swiper.use(Autoplay,Pagination);
	export default {
		name: "Home",
		data(){
			return {
				message:[]
			}
		},
		methods:{
			getMessage(){
				axios.get("/data/homeData.json").then(res=>{
					this.message=res.data
				})
			}
		},
		mounted() {
			new Swiper(".swiper", {
				pagination: ".swiper-pagination",
				loop: true,
				autoplay: 2000,
				autoplayDisableOnInteraction : false,
			}),
			this.getMessage()
		},
	};
</script>
<style scoped>
  html{
	font-size: 2.66666vw;
  }
	.header {
		width: 100%;
		height: 3rem;
		background-color: rgb(63, 188, 85);
		display: flex;
		box-sizing: border-box;
		padding-left: 0.3rem;
		padding-top: 0.5rem;
		position: fixed;
		top: 0;
		z-index: 99999;
	}
	.header > div:nth-child(1) {
		width: 85%;
		height: 2rem;
		background-color: #fff;
		border-radius: 0.3rem;
		background-image: url(/img/ic_group_search_small.png);
		background-repeat: no-repeat;
		background-size: 1.5rem 1.5rem;
		background-position: 0.2rem 0.25rem;
	}
	#search {
		width: 88%;
		height: 1.9rem;
		margin-left: 2rem;
		border: none;
		outline: none;
		line-height: 1.9rem;
		background-image: url(/img/ic_scan_gray.png);
		background-repeat: no-repeat;
		background-size: 1.8rem 1.8rem;
		background-position: 95% 0rem;
	}
	.header > div:nth-child(2) {
		width: 15%;
		height: 3rem;
		position: relative;
		z-index: 999;
	}
	.header > div:nth-child(2) img {
		width: 2.2rem;
		margin-left: 0.8rem;
	}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
 /* bottom: 2rem; */
 right: 3rem;
 width: 100%;
 display: flex;
justify-content: flex-end;
 }
.mySwiper {
 width: 100%;
 position: relative;/* 
 top: 3rem;
 left: 0; */
 overflow: hidden;
 margin-top: 3rem;
 }
 .swiper {
 z-index: 0;
 }
 .swiper img {
 width: 100%;
}
 /* 设置轮播小点 */
 .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
 .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
 margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 10px);
}

 .swiper-pagination-bullet {
width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 6px));
 height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 6px));
}
 .swiper-pagination{
 transition: none;
 text-align:right;
}
 .swiper-pagination-bullet-active{
	 background-color: #fff !important;
 }
 .message{
	 width: 100%;
	 height: 10rem;
	 border-bottom: 0.1rem solid #ccc;
	 display: flex;
	 box-sizing: border-box;
	 padding: 0.5rem 0.8rem;
 }
 .message>div:nth-child(1){
	 width: 65%;
	 height: 10rem;
 }
 .message>div:nth-child(1) a{
	 text-decoration: none;
	 color: black;
	 font-size: 0.8rem;
 }
  .message>div:nth-child(1) p:nth-of-type(1){
	 color: #ccc;
	 margin-top: 0.2rem;
	 font-size: 0.8rem;
 }
  .message>div:nth-child(1) p:nth-of-type(2){
	  font-size: 0.8rem;
	  margin-top: 0.5rem;
	  color: #ccc;
  }
  .message>div:nth-child(2){
	  width: 35%;
	  height: 10rem;
	  text-align: center;
  }
  .message>div:nth-child(2) img{
	  width: 7rem;
	  height: 7rem;
	  margin-top: 0.3rem;
  }
</style>
