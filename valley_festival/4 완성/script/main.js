$(function(){
	$("#gnb > ul > li").hover(
		function(){
			$(this).find("ul").stop().slideDown(300);
		},
		function(){
			$(this).find("ul").stop().slideUp(300);
		}
	);
	$("#gnb > ul > li > a").focusin(function(){
		$(this).next("ul").slideDown(300);
		$(this).parent().addClass("active");
	});
	$("#gnb li li:last-child a").focusout(function(){
		$(this).parent().parent().slideUp(300);
		$(this).parent().parent().parent().removeClass("active");
	});

	var n=0;
	var dis=0;

	setInterval(function(){
		n=n+1;
		dis=n*-1*750;

		$(".slider ul").animate({left:dis}, 500, function(){
			if(n == 3){
				n=0;
				dis=0;
				$(".slider ul").css({left:dis}); // $(".slider ul").animate({left:dis}, 0);
			}
		});
	}, 3000);

	$(".content1 li:first-child a").click(function(){
		$(".pop").show();
	});
	$(".pop .close").click(function(){
		$(".pop").hide();
	});
});