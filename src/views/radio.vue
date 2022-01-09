<template>
	<div class="radio">
		<div class="header">
			<p>广播</p>
			<span
				><a href=""><img src="/img/ic_status_search_user.png" alt="" /></a
			></span>
			<span
				><a href=""><img src="/img/ic_chat_green.png" alt="" /></a
			></span>
		</div>
		<div class="login">
			<img src="/img/user_normal.jpg" alt="" />
			<a href="#">登录发广播</a>
		</div>
		<div class="diary">
			<div id="diary1">
				<div>
					<img src="/img/logo.png" alt="" />
				</div>
				<div>
					<p><span>豆瓣</span> 写了日记</p>
					<p>2018-5-23 10:39:23</p>
				</div>
			</div>
			<div id="diary2">
				<p>5月24日凌晨3:00~6:00豆瓣停机维护</p>
				<p>因业务发展需要，豆瓣计划于5月24日（星期四）凌晨3:00~6:00对服务器进行机房拆迁，迁移期间全部豆瓣相关...</p>
			</div>
		</div>
		<div class="diary">
			<div id="diary1">
				<div>
					<img src="/img/logo.png" alt="" />
				</div>
				<div>
					<p><span>豆瓣</span> 写了日记</p>
					<p>2018-5-23 10:39:23</p>
				</div>
			</div>
			<div id="diary2">
				<p>北京时间3月28日19点19分，豆瓣首部破百万评分人数电影诞生</p>
				<p>因业务发展需要，豆瓣计划于5月24日（星期四）凌晨3:00~6:00对服务器进行机房拆迁，迁移期间全部豆瓣相关...</p>
			</div>
		</div>
		<div class="diary">
			<div id="diary1">
				<div>
					<img src="/img/logo.png" alt="" />
				</div>
				<div>
					<p><span>豆瓣</span> 写了日记</p>
					<p>2018-5-23 10:39:23</p>
				</div>
			</div>
			<div id="diary2">
				<p>5月24日凌晨3:00~6:00豆瓣停机维护</p>
				<p>因业务发展需要，豆瓣计划于5月24日（星期四）凌晨3:00~6:00对服务器进行机房拆迁，迁移期间全部豆瓣相关...</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
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
	.login {
		width: 100%;
		height: 4rem;
		box-sizing: border-box;
		padding-left: 1rem;
		border-bottom: 1px solid #ccc;
		margin-top: 3rem;
	}
	.login img {
		border-radius: 50%;
		margin-top: 0.5rem;
		float: left;
	}
	.login a {
		float: left;
		display: block;
		line-height: 4rem;
		text-decoration: none;
		color: #666;
		margin-left: 1rem;
	}
	.diary {
		width: 100%;
		height: 18rem;
		box-sizing: border-box;
		padding: 1rem;
	}
	#diary1 {
		width: 100%;
		height: 3rem;
		display: flex;
	}
	#diary1 > div:nth-child(1) {
		width: 15%;
	}
	#diary1 > div:nth-child(1) img {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
	}
	#diary1 > div:nth-child(2) {
		width: 85%;
	}
	#diary1 > div:nth-child(2) p {
		color: #ccc;
		line-height: 1.5rem;
	}
	#diary1 > div:nth-child(2) p > span {
		color: #000;
	}
	#diary2 {
		width: 70%;
		height: 10rem;
		margin-left: 4rem;
		margin-top: 1rem;
	}
	#diary2 p:nth-of-type(1) {
		font-size: 1.2rem;
	}
	#diary2 p:nth-of-type(2) {
		font-size: 0.9rem;
		color: #ccc;
		margin-top: 0.5rem;
	}
	
</style>
