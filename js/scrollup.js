function ScrollUp(){
    var t,s;
    s=document.body.scrollTop||window.pageYOffset;
    t=setInterval(function(){if(s>0)window.scroll(0,s-=15);else clearInterval(t)},15);
}