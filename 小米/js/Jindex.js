//banner轮播
$(function(){
//选项卡：
    //第一种，存在问题
    // $('.ab a').hover(function () {
    //     $('.item').css({display:'none'})
    //     $(this).next('.item').css({display:'block'})
    // }),
    // $('.ab').hover(function () {
    //     $('.item').css({display:'none'})
    // })
    //第二种：
    // $('.ab li').mouseenter(function () {
    //     $($('.item').get($(this).index())).css({display:'block'})
    // }).mouseleave(function () {
    //     $($('.item').get($(this).index())).css({display:'none'})
    // })
    //第三种：
    $('.ab li').mouseenter(function () {
        $(this).find('.item').show()  //显示
    }).mouseleave(function () {
        $(this).find('.item').hide()  //消失
    })




 //自动轮播
    var lit=$('.banner li');
    let now=0;
    var t;
    t=setInterval(aa,3000);
    function aa() {
        now++;
        if(now==lit.length) {
            now = 0
        }
        $('.banner li').hide();
        $('.banner li').eq(now).show()
        $('.lunbodian li').css({background: 'rgba(100,100,100,0)'})
        $('.lunbodian li').eq(now).css({background: 'rgba(247,247,247,0.7)'})

    }

//清除时间    
    $('.banner').mouseenter(function(){
        clearInterval(t)
    }).mouseout(function(){
        t=setInterval(aa, 3000)
    })




//左右按钮
    $('.zuojiantou').mouseenter(function(){
        clearInterval(t);
    }).mouseleave(function(){
        t=setInterval(aa, 3000)
    })
    $('.zuojiantou').click(function(){
        now--;
        if(now<0){
            now=$('.banner li').length-1;
        }
        $('.banner li').hide();
        $('.banner li').eq(now).show();    
    })



    $('.youjiantou').mouseenter(function(){
        clearInterval(t);
    }).mouseleave(function(){
        t=setInterval(aa, 3000)
    })
    $('.youjiantou').click(function(){
        now++;
        if(now>=$('.banner li').length){
            now=0;
        }
        $('.banner li').hide();
        $('.banner li').eq(now).show();  
    })



//轮播点   
    $('.lunbodian li').mouseenter(function(){
        clearInterval(t);
    });
    $('.lunbodian li').click(function(){
        var i=$(this).index();
        console.log(i);
        $('.banner li').hide();
        $('.banner li').eq(i).show();
        $(this).css({background:'rgba(100,100,100,0)'});
        $(this).eq(now).css({background:'rgba(247,247,247,0.7)'});
        now=i;
    })
})



////////购物车下拉盒子开始
$('.header-right-bigbox>.zi').mouseenter(function(){
    $('.gwcxialabox').css({height:'98px'})
}).mouseleave(function(){
    $('.gwcxialabox').css({height:'0px'})
});




/////////导航下拉框
let  a=0; 
var index=$('.navzi').index();
$('.navzi').mouseenter(function(){
    $('.navxlk').eq(index).css({height:'241px'});
}).mouseleave(function(){
    $('.navxlk').eq(index).css({height:'0px'});
});




///////////////////////////////////////////////////////搜索下拉框
$('.srhz').click(function(){
    $('.inputxlk').css({display:'block'})
}).blur(function(){
    $('.inputxlk').css({display:'none'})

})




/////小米明星单品自动
var flag=true; 
let t;
t=setInterval(function(){
    if(flag){
        $('.xmmxdp-bottombox').css({transform:'translateX(-1238px)'})
    }
    if(!flag){
        $('.xmmxdp-bottombox').css({transform:'translateX(0px)'})

    }
    flag=!flag
},4000)   
///////小米明星单品箭头   
$('.left').click(function(){
    $('.xmmxdp-bottombox').css({transform:'translateX(-1238px)'})
})
$('.rigth').click(function(){
        $('.xmmxdp-bottombox').css({transform:'translateX(0px)'})
})




///////////////////////////////////////////家电
// let n=0;
// $('.jd-topzibox>.zis').mouseenter(function(){
//     let i=$(this).index()
//     if(i=0){
//         $('.jd-rigthbox').eq(n).show()
//     }
//     $('.jd-rigthbox').eq(n).hide()
//     $('.jd-rigthbox').eq(i).show();
//     n=i
// })
// console.log($('.jd-topzibox>.zis'))
// console.log($('.jd-rigthbox'))




// let jdt=document.getElementsByClassName('jd-topzibox')[0];
// let spana=jdt.getElementsByClassName('zi');
// let jdr=document.getElementsByClassName('jdrigthbox')[0];
// let jdu=jdr.getElementsByClassName('jd-rigthbox');
// let now=0;
// for(let i=0;i<spana.length;i++){
//     spana[i].onmouseenter=function(){
//         jdu[now].style.display='none';
//         jdu[i].style.display='block';
//         now=i
//         spana[i].style.cssText="border-bottom:1px solid #ff6700"
//         spana[now].style.cssText='none' 
//     }
// }

