$(function(){
	$('#telephone').click(function(){
		$(".callmeback").css("display","block");
	});
	$('#btncallmeback').click(function(){
		$(".callmeback").css("display","none");
		$("#callmebackdone").css("display","block");
	});
	$("#btnsubscribe").click(function(){
		$("#subscribedone").css("display","block");
	});
	$("#callmebackdone #btnok").click(function(){
		$("#callmebackdone").css("display","none");
	});
	$("#subscribedone #btnok").click(function(){
		$("#subscribedone").css("display","none");
	});
});
