/*
* @Author: Administrator
* @Date:   2017-09-11 08:46:55
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-12 13:37:32
*/
////////////////////////////////////////////导航上的弹框
$('.li1').mouseenter(function(){
	$('.items').show();
}).mouseleave(function(){
	$('.items').hide();
});
$('.li2').mouseenter(function(){
	$('.itemss').show();
}).mouseleave(function(){
	$('.itemss').hide();
});
$('.li3').mouseenter(function(){
	$('.itembox').show();
}).mouseleave(function(){
	$('.itembox').hide();
});
$('.li4').mouseenter(function(){
	$('.itemsbox').show();
}).mouseleave(function(){
	$('.itemsbox').hide();
});






//////////////////////////////////////////////////////////////////banner弹框开始
	$('.aside-box>li').mouseenter(function(){
		$('.item').show();
	}).mouseleave(function(){
		$('.item').hide();
	});;


//自动轮播



var t;
var now=0;
t=setInterval(aa, 3000);
function aa(){
	now++;
	if(now==$('.bottom-box>li').length){
		now=0;
	}
	$('.bottom-box>li').hide();
	$('.bottom-box>li').eq(now).show();
	$('.lunbodian>li').css({background:'#a5a5a5'});
	$($('.lunbodian>li')[now]).css({background:'#fff'});
}




//清除时间


$('.bottom-box').mouseenter(function(){
	clearInterval(t);
}).mouseleave(function(){
	t=setInterval(aa, 3000);
});

//轮播点



$('.lunbodian>li').click(function(){
	var i=$(this).index();
	$('.bottom-box>li').hide();
	$('.bottom-box>li').eq(i).show();
	$('.lunbodian>li').css({background:'#a5a5a5'});
	$($('.lunbodian>li')[i]).css({background:'#fff'});
	now=i;
})	





////////////////////////////楼层跳转
// let ch=window.innerHeight;
// let arr=[];
// let num=0;
// let color=['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#FF0036'];
// $('.meilirensheng-box').each(function(element){
// 	 	let top=element.offsetTop;
//     	arr.push(top);
// })
//     window.onscroll=function () {
//         let tops=document.documentElement.scrollTop;
//         arr.forEach(function(value,index){
//             if(ch+tops>=value){
//                 now=index;
//             }
//         })
//     };
// $('.slide>.li').each(function(){
// 	let index=$('.slide>.li').index();
// 	$(this).click(function(){
// 		$(this).animate({scrollTop:arr[index]})
// 	})
// })





