define(["carousel","jquery", "jquery-cookie"], function(carousel,$){
	function carousel(){
		$(function(){
			var items = $('#carousel1').children();
			var dots = $('.dot').children();
			var index = 0;
			var str = 0;

			//自动播放函数
			function Autoplay(){
				//显示
				$(items[index]).fadeIn(1000);
				function play(){
					$(dots).removeClass("hover");
					if(index >= 0 & index < items.length-1){
						//隐藏
						$(items[index]).fadeOut(1500);
						index++;
						$(items[index]).fadeIn(1500);
						$(dots[index]).addClass("hover");
					}else{
						$(items[index]).fadeOut(1500);
						index=0;
						$(items[index]).fadeIn(1500);
						$(dots[index]).addClass("hover");
					};
					str = index;
				}
				setInterval(play, 7000);
			}
			Autoplay();

			//点击左侧按钮函数
			$(".a1").click(function(){
				$(dots).removeClass("hover");
				if(str == 0){
					$(items[str]).fadeOut(1500);
					str = items.length-1;
					$(items[str]).fadeIn(1500);
					$(dots[str]).addClass("hover");
					index = str;
				}else{
					$(items[str]).fadeOut(1500);
					str--;
					$(items[str]).fadeIn(1500);
					$(dots[str]).addClass("hover");
					index = str;
				}
			});

			//点击右侧按钮
			$(".a2").click(function(){
				$(dots).removeClass("hover");
				if(str == items.length-1){
					$(items[str]).fadeOut(1500);
					str = 0;
					$(items[str]).fadeIn(1500);
					$(dots[str]).addClass("hover");
					index = str;
				}else{
					$(items[str]).fadeOut(1500);
					str++;
					$(items[str]).fadeIn(1500);
					$(dots[str]).addClass("hover");
					index = str;
				}
			})
			//圆点
			$(".dot li").click(function(){
				var num = $(this).index();
				$(dots).removeClass("hover");
				$(dots[num]).addClass("hover");
				$(items).fadeOut(1500);
				$(items[num]).fadeIn(1500);
				index = num;
			})
		})
		};
	return {
		carousel: carousel
	}
})