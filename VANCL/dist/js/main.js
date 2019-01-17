console.log("加载完成");
/*
	配置引入的所有模块的路径
	模块化开发要遵从AMD规范
 */
require.config({
	paths: {
		jquery: "jquery-1.11.3",
		//加引号的原因，命名变量不能有-，变为字符串之后就可以有-，（或可以不用字符串，但是-要改为_）
		"jquery-cookie": "jquery.cookie",
		// parabola: "parabola",
		index: "index",
		carousel: "carousel",
		seckill: "seckill",
		buffer: "buffer"
		//需要的js都要加上
		
	},
	//设置一下，引入js文件的依赖关系
	//jq-cookie依赖jq
	shim: {
		"jquery-cookie": ['jquery'] , //必须是数组
		//声明一下，不使用AMD规范的模块
		"parabola": {
			exports: "_"
		}
	}
})
//执行
//第一个参数传  要引入的模块
//第二个参数 形参：index模块return回的对象
// require(['index'], function(index){
// 	index.index();    //调用index下的index函数
// })
	require(['carousel'], function(carousel){
		carousel.carousel();
	})
	require(['seckill'], function(seckill){
		seckill.seckill();
	})
	require(['buffer'], function(buffer){
		buffer.buffer();
	})
