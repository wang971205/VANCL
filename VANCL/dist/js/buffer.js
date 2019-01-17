define(["buffer", "jquery-cookie", "jquery"], function(buffer,$){
	$(document).ready(function(){
		$("#nav_li ul li ul li").mouseover(function(){
			$(this).parent().find("#nav_li ul li ul").slideDown('fast').show();
			$(this).parent().hover(function(){

			}, function(){
				$(this).parent().find("#nav_li ul li ul").slideUp('slow');
			});
		}).hover(function(){
			$(this).addClass("hover");
		}, function(){
			$(this).removeClass("hover");
		})
	});
	return {
		buffer: buffer
	}
})