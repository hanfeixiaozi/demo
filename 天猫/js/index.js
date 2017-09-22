/**
 * Created by Administrator on 2017/8/13 0013.
 */
window.onload=function () {
  












//////////////////////////////////////////////////////////////////banner弹框开始
	let ula=document.getElementsByClassName('aside-box')[0];
	
	let lia=ula.getElementsByTagName('li');
	
	let items=document.getElementsByClassName('item');
	
	for(let i=0;i<lia.length;i++){
		lia[i].onmouseenter=function(){
			items[i].style.display='block';
		}
		lia[i].onmouseleave=function(){
			items[i].style.display='none';
		}
	}
		
////////////////////////////////////////////////////////////////////////banner自动
	let ulb=document.getElementsByClassName('bottom-box')[0];
	let imgs=ulb.getElementsByTagName('li');
	// console.log(imgs);
	let num=0;
	let t;
	t=setInterval(fn,3000);
	function fn(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.display='none';
			imgs[num].style.display='block';
			lid[i].classList.remove('hot');
			lid[num].classList.add('hot');
		}
	}

//////////////////////////////////////////////////////////////////////移入banner清除时间

	ulb.onmouseenter=function(){
		clearInterval(t);
	}
	ulb.onmouseleave=function(){
		t=setInterval(fn,3000);
	}

///////////////////////////////////////////////////////////////////////轮播点切图
	let uld=document.getElementsByClassName('lunbodian')[0];
	console.log(uld)
	let lid=uld.getElementsByTagName('li');
	console.log(lid)
		for(let d=0;d<lid.length;d++){
			lid.onmouseenter=function(){
			imgs[num].style.display='none';
			imgs[d].style.display='block';
			lid[i].classList.remove('hot');
			lid[num].classList.add('hot');
			num=d;
			}
		}
	



////////////////////////////////////////////////////////////////楼层跳转
let ch=window.innerHeight;
let uls=document.querySelectorAll('.meilirensheng-box');
let lis=document.querySelectorAll('.slide>.li');
let arr=[];
let now=0;
let color=['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#FF0036'];
uls.forEach((element)=>{
    let top=element.offsetTop;
    arr.push(top);
});
    window.onscroll=function () {
        let tops=document.documentElement.scrollTop;
        arr.forEach(function(value,index){
            if(ch+tops>=value){
                now=index;
                // color.forEach((element,index)=>{
                //
                // } )
            }
        })
    };
    lis.forEach((element,index)=>{
        element.onclick=function () {
            animate(document.documentElement,{scrollTop:arr[index]});
            color.forEach((element,index)=>{
                    lis[index].style.background=color[index];

            } )
        }
    })


























}