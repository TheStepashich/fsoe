var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled < 50){
        $(".head").css({"background": " #1f141000  "})
    }
    if(scrolled > 50){
        $(".head").css({"background": "#202020be"})         
    }

}