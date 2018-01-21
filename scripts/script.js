$(function(){
	$('#telephone').click(function(){
		$(".callmeback").css("display","block");
		$("#telephone").css("z-index","200");
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
	$("#moreprojects").click(function(){
		$(".more").css("display","block");
	});
	var firstCarousel = $("#firstcarousel #insidefirst");
	var secondCarousel = $("#secondcarousel #insidesecond");
	function changeSlideLeft(speed){
		firstCarousel.animate({'marginLeft':-400}, speed, moveFirstSlide);
		secondCarousel.animate({'marginLeft':-400}, speed, moveFirstSlide);
	}
	function changeSlideRight(){
		var firstItemFirst = firstCarousel.find("li:first");
		var firstItemSecond = secondCarousel.find("li:first");
		var lastItemFirst = firstCarousel.find("li:last");
		var lastItemSecond = secondCarousel.find("li:last");
		firstItemFirst.before(lastItemFirst);
		firstItemSecond.before(lastItemSecond);
		firstCarousel.css('marginLeft',-400);
		secondCarousel.css('marginLeft',-400);
		firstCarousel.animate({'marginLeft':0}, 500);
		secondCarousel.animate({'marginLeft':0}, 500);
	}
	function changeSlide(){
		var marginx=-400*findId;
		firstCarousel.animate({'marginLeft':marginx}, 500, moveSlideFirst);
		secondCarousel.animate({'marginLeft':marginx}, 500, moveSlideSecond);
	}
	function moveFirstSlide() {
		var firstItemFirst = firstCarousel.find("li:first");
		var lastItemFirst = firstCarousel.find("li:last");
		var firstItemSecond = secondCarousel.find("li:first");
		var lastItemSecond = secondCarousel.find("li:last");
		lastItemFirst.after(firstItemFirst);
		lastItemSecond.after(firstItemSecond);
		firstCarousel.css({marginLeft:0});
		secondCarousel.css({marginLeft:0});
	}
	function moveSlideFirst(){
		var findItem = firstCarousel.find(this);
		var firstItem = firstCarousel.find("li:first");
	}
	function moveSlideSecond(){
		var findItem = secondCarousel.find(this);
		var firstItem = secondCarousel.find("li:first");
	}
	$('#left').on('click',function(){
		changeSlideRight();
	});
	$('#right').on('click',function(){
		changeSlideLeft(500);
	});
	$("#more-arrow[data-id]").on('click',function(event){console.log('this ',this,' $(this) ',$(this));
		var currentActiveSlideId = $('#controls .active').data('id');
		var targetSlideId = $(this).data('id');console.log('targetSlideId ',targetSlideId)
		var distance = calculateDistance(currentActiveSlideId, targetSlideId);
		console.log(distance);
		for (var i = 1; i <= distance; i++){
			if(i == distance){
				changeSlideLeft(500);
			}
			else {
			changeSlideLeft(0);
			}
		}
	});
	function calculateDistance(current,target){
		if(current <= target){
			return target - current;
		}
		if(target < current){
			return 5 - current + target;
		}
	}
});
