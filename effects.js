$(window).scroll(function(){
    const nav = $(".topnav")
    if( $(document).scrollTop() > 50){
        $(nav).addClass("scrolled");
    }
    else{
        $(nav).removeClass("scrolled");
    }
});
