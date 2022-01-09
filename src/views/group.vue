<template>
	<div class="group">
		<div class="header">
			<p>小组</p>
			<span
				><a href=""><img src="/img/ic_actionbar_search_icon.png" alt="" /></a
			></span>
			<span
				><a href=""><img src="/img/ic_chat_green.png" alt="" /></a
			></span>
		</div>
		<div class="groupData" v-for="(item, index) in groupData" :key="index">
			<p>{{ item.title }}</p>
			<div class="groupData11" v-for="(i, indexx) in groupData[index].group_list" :key="indexx">
				<div>
					<div><img :src="i.img_url" alt="" /></div>
					<div>
						<p>
							{{ i.group_name }} <span>{{ i.group_member }}</span>
						</p>
					</div>
				</div>
				<p class="p2">{{ i.topic_title }}</p>
			</div>
		</div>
		<div class="aaa"></div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
				groupData: [],
				// groupData2: [],
			};
		},
		methods: {
			getGroupData1() {
				axios.get("/data/groupData.json").then((res) => {
					// this.groupData1 = res.data;
					this.groupData = res.data.group;
					console.log(res.data.group[0].group_list[0]);
				});
			},
		},
		mounted() {
			this.getGroupData1();
		},
	};
</script>

<style scoped>
	.aaa {
		width: 100%;
		height: 4rem;
	}
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
	.groupData {
		width: 100%;
		height: 25rem;
		margin-bottom: 2rem;
		box-sizing: border-box;
		padding: 1rem;
	}
	.groupData:nth-of-type(1){
		margin-top: 3rem;
	}
	.groupData p:nth-of-type(1) {
		font-size: 1.3rem;
		margin-bottom: 1rem;
	}
	.groupData11 {
		width: 100%;
		height: 6rem;
		margin-bottom: 1rem;
	}
	.groupData11 > div {
		width: 100%;
		height: 3rem;
		display: flex;
	}
	.groupData11 > div > div:nth-child(1) {
		width: 20%;
		text-align: center;
	}
	.groupData11 > div > div:nth-child(1) img {
		width: 3rem;
		height: 3rem;
		border-radius: 0.2rem;
	}
	.groupData11 > div > div:nth-child(2) {
		width: 80%;
		height: 3rem;
	}
	.groupData11 > div > div:nth-child(2) p {
		font-size: 0.9rem;
		line-height: 3rem;
	}
	.groupData11 > div > div:nth-child(2) p > span {
		color: #ccc;
		float: right;
	}
	.p2 {
		font-size: 0.8rem !important;
		line-height: 1.5rem;
		color: #ccc;
	}
	.group>div:nth-of-type(2){
		margin-top: 3rem;
	}
</style>
