/////////////////自动轮播
var t;
var now=0;
t=setInterval(aa,1000);
function aa(){
    now++;
    if(now>$('.banner>li').length-1){
        now=0;
    }
    $('.banner>li').hide();
    $('.banner>li').eq(now).show();
}
///////////清除时间
$('.banner').mouseenter(function () {
    clearInterval(t);
}).mouseleave(function(){
    t=setInterval(aa,1000)
})
///////////////左右箭头
$('.banner>.left').click(function(){
    now--;
    if(now<0){
        now=$('.banner>li').length-1;
    }
    $('.banner>li').hide();
    $('.banner>li').eq(now).show();
})
$('.banner>.right').click(function(){
    now++;
    if(now>$('.banner>li').length-1){
        now=0;
    }
    $('.banner>li').hide();
    $('.banner>li').eq(now).show();
})
///////////轮播点
var i=$('.lbd>li').index();
$('.lbd>li').click(function(){
    $('.banner>li').hide();
    $('.banner>li').eq(i).show();
    now=i;
})