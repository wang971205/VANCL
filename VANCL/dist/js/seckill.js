define(["seckill", 'jquery', 'jquery-cookie'], function(seckill,$){
	function seckill() {
		$(function(){
			var h=10;
    		var m=21;
    		var s=49;
		    setInterval(function(){
		        if(s<10){
		        //如果秒数少于10在前面加上0
		            $('#sec').html(m+':0'+s);
		        }else{
		            $('#sec').html(m+':'+s);
		        }
				s--;
				if(s<0){
		        //如果秒数少于0就变成59秒
		            s=59;
		            m--;
		        }
				if(m<10){
				    $('#min').html(m+':0'+m);
				     }else{
				       $('#min').html(m+':'+m);
				     }
		        m--;
				if(m<0){
				    m=59;
				    h--;
				}
				if(h<10){
				    $('#hour').html(h+':0'+h);
				     }else{
				       $('#hour').html(h+':'+h);
				     }
		        h--;
		        if(h==0){
					clearInterval();
				}
				
		    },1000)
		})};
	return {
		seckill: seckill
	}
})