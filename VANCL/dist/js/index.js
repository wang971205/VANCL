define(["parabola", 'jquery', "jquery-cookie"], function(parabola, $){ //$可以直接拿到jquery-cookie和jquery模块
	function index(){
		$.ajax({
			url:"data/nav.json",
			type: "get",
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					if(arr.childs !=undefined && arr.childs.length > 0){
						for(var j = 0; j < arr[i].childs.length; j++){
							$(`<li id= '${arr[i].id}'><a href="#">title=${arr[i].title}</a>
								<ul>
									<li id= '${arr[i].id}'><a href="#">title='${arr[i].childs[j].text}'</a></li>
								</ul>
							</li>`)
						}
					}
				}else{
					$(`<li id= '${arr[i].id}'><a href="#">title=${arr[i].title}</a>
						</li>`).appendTo($(".nav_li ul"));
				}
			},
			error: function(msg){
					alert(msg);
				}
		})
	}
	return {
		index:index  //将文件暴露
	}   //第一个值：属性 名字随便起
	    //第二个值：函数名
})