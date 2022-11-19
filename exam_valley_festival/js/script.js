$(function(){
    let sList = $(".slideList");
    let current = 0;
    setInterval(function(){
        
        sList.delay(1000)
        sList.animate({marginLeft:-800});
        sList.delay(2000)
        sList.animate({marginLeft:-1600});
        sList.delay(2000)
        sList.animate({marginLeft:0});
        sList.delay(2000)
    });

    $(".active").click(function(){
        $(".layerpopup").show();
    });
    $(".layerpopup").find("button").click(function(){
        $(".layerpopup").hide();
    });
});