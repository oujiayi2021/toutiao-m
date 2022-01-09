<template>
  <div class="my">
      <div class="header">
			<p>我的</p>
			<span><a href=""><img src="" alt="" /></a></span>
			<span><a href=""><img src="/img/ic_settings.png" alt="" /></a></span>
	</div>
    <div class="my1">
        <div>
            <span class="iconfont icon-mima1"></span>
            <a href="#">密码管理</a>
        </div>
        <div>
            <span class="iconfont icon-yinxingqia"></span>
            <a href="#">银行卡管理</a>
        </div>
    </div>
    <div class="my2">
        <ul>
            <li v-for="(i,index) in message" :key="index">
                <span :class="i.classname"></span>
                <p> {{i.title}}</p>
                <span class="iconfont icon-youjiantou"></span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            message:[{
                classname:"iconfont icon-bianji",
                title:"风险承受能力评估"
            },
            {
                classname:"iconfont icon-17",
                title:"安全保障"
            },
            {
                classname:"iconfont icon-weibiaoti2fuzhi12",
                title:"我的关注"
            },
            {
                classname:"iconfont icon-bangzhu",
                title:"帮助中心"
            },
            {
                classname:"iconfont icon-weibiaoti2fuzhi12",
                title:"关于我们"
            },
            {
                classname:"iconfont icon-jianchaquyu",
                title:"检查更新"
            },
            {
                classname:"iconfont icon-service",
                title:"联系客服"
            },]
        }
    }
}
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
    .my1{
        width: 100%;
        height: 5rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        margin-top: 3rem;
    }
    .my1 div{
        width: 50%;
        height: 5rem;
        text-align: center;
    }
    .my1 div span{
        font-size: 2rem;
        line-height: 4rem;
        color: rgb(77, 178, 93);
    }
    .my1 div a{
        display: block;
        width: 100%;
        margin-top: -1rem;
        text-decoration: none;
        color: #000;
    }
    .my2{
        width: 100%;
    }
    .my2 ul{
        width: 100%;
    }
    .my2 ul li{
        width: 100%;
        height: 4rem;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        padding:  0 0.5rem;
    }
    .my2 ul li p{
        line-height: 4rem;
        display: inline-block;
    }
    .my2 ul li span{
        display: inline-block;
        line-height: 4rem;
    }
    .my2 ul li span:nth-of-type(1){
        color: rgb(77, 178, 93);
        font-size: 1.5rem;
        float: left;
        margin-right: 0.7rem;
    }
    .my2 ul li span:nth-of-type(2){
        color: rgb(77, 178, 93);
        font-size: 1.5rem;
        float: right;
    }
</style>