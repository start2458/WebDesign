$(function(){

//slide
    
    let current = 0;
    setInterval(function(){
        let next = (current+1)%3;

        $(".slideList").find("div").eq(current).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();
        current = next;
    }, 3000)

//layerpopup
    $(".active").click(function(){
        $(".layerpopup").show();
    });
    $(".layerpopup").find("button").click(function(){
        $(".layerpopup").hide();
    });
});

