/*
* @Author: Administrator
* @Date:   2017-08-10 15:42:00
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-12 09:56:26
*/

'use strict';
window.onload=function(){
//购物车下拉盒子开始
    let divs=document.getElementsByClassName('header-right-bigbox')[0];
    let divzi=divs.getElementsByTagName('div')[0];
    let gwcxialaboxs=divzi.getElementsByClassName('gwcxialabox')[0];
    divzi.onmouseenter=function () {
        gwcxialaboxs.style.height='98px'
    }
    divzi.onmouseleave=function () {
        gwcxialaboxs.style.height='0px'
    }
//导航下拉框
    let navdiv=document.getElementsByClassName('navxlk');
    console.log(navdiv);
    let navMiddle=document.getElementsByClassName('nav-middle')[0];
    let navLi=navMiddle.getElementsByClassName('navzi');
    console.log(navLi);
    let a=0;
    for(let i=0;i<navLi.length;i++){
        navLi[i].onmouseenter=function(){
            navdiv[a].style.tansition='0.5s'
            navdiv[i].style.tansition='0s'
            navdiv[i].style.height='241px'
            navdiv[i].classList.add('navxlkab')
        }
        navLi[i].onmouseleave=function(){
            navdiv[i].style.height='0'
            navdiv[i].classList.remove('navxlkab')
        }
    }




/////////////////////////////////////////////搜索下拉框
let input=document.querySelector('.srhz');
let inputxlk=document.querySelector('.inputxlk');
input.onfocus=function(){
    inputxlk.style.display='block';
}
input.onblur=function(){
    inputxlk.style.display='none';
}

//banner弹框开始
	let ul=document.getElementsByClassName('ab')[0];
	// console.log(ul)
    let lis=ul.getElementsByTagName('li');
    // console.log(lis)
    let items=document.getElementsByClassName('item');
    // console.log(items)
    for (let i=0;i<lis.length;i++){
	    lis[i].onmouseenter=function () {
           items[i].style.display='block';
        }
        lis[i].onmouseleave=function () {
            items[i].style.display='none';
        }
    }



//自动轮播图
    let ult=document.getElementsByClassName('banner')[0];
    // console.log(ult)            //
    let lit=ult.getElementsByTagName('li');
    // console.log(lit);
    let num=0;
    let t;
    t=setInterval(fn,3000);
    function fn() {
    	num++;
    	if(num==lit.length){
    		num=0
    		}
        for (let i=0;i<lit.length;i++){
            lit[i].style.display='none';
            lid[i].classList.remove('lbdli');
            lit[num].style.display='block';
            lid[num].classList.add('lbdli');
        	}
        	
   		}


//轮播点切图
    let uld=document.getElementsByClassName('lunbodian')[0];
    let lid=uld.getElementsByTagName('li');
        for (let i=0;i<lid.length;i++){
            lid[i].onclick=function () {
            	lid[i].classList.add('lbdli');
				lid[num].classList.remove('lbdli');
                lit[num].style.display='none';
                lit[i].style.display='block';
                num=i;
            }
        }


//移入banner清除时间函数
	ult.onmouseenter=function(){
		clearInterval(t)
	}
	ult.onmouseleave=function(){
		t=setInterval(fn,3000);
	}


//箭头控制
	let back=document.getElementsByClassName('zuojiantou')[0];
	let forward=document.getElementsByClassName('youjiantou')[0];
	forward.onclick=fn2;
	back.onclick=fn1;
	function fn1(){
		clearInterval(t);
		num--;
    	if(num==-1){
    		num=lit.length-1;
    		}
        for (let j=0;j<lit.length;j++){
            lit[j].style.display='none';
            lid[j].classList.remove('lbdli');
        	}
        	lit[num].style.display='block';
        lid[num].classList.add('lbdli');
	}

	function fn2() {
		clearInterval(t);
    	num++;
    	if(num==lit.length){
    		num=0
    		}
        for (let i=0;i<lit.length;i++){
            lit[i].style.display='none';
            lid[i].classList.remove('lbdli');
        	}
        	lit[num].style.display='block';
        	lid[num].classList.add('lbdli');
   		}


////////////////////////////////////小米明星单品
    let xmmxdp=document.getElementsByClassName('xmmxdp-bottombox')[0];
    // console.log(xmmxdp);
    let lefts=document.getElementsByClassName('left')[0];
    let rigths=document.getElementsByClassName('rigth')[0];
    lefts.onclick=fn3;
    function fn3() {
        // xmmxdp.classList.add('cc');
        xmmxdp.style.transform='translateX(-1238px)';
        // xmmxdp.style.overflow='visible';
    }
    rigths.onclick=fn4;
    function fn4() {
        xmmxdp.style.transform='translateX(0px)';
    }

/////小米明星单品自动
    let flag=true;
    setInterval(function(){
        if(flag){
            xmmxdp.style.transform='translateX(-1238px)';
        }
        if(!flag){
           xmmxdp.style.transform='translateX(0px)'; 
        }
        flag=!flag;

    },3000)




///////////////////////////////////////////家电

let jdt=document.getElementsByClassName('jd-topzibox')[0];
// console.log(jdt)
// let span=jdt.getElementsByTagName('span');
let spana=jdt.getElementsByClassName('zi');
console.log(spana)
let jdr=document.getElementsByClassName('jdrigthbox')[0];
let jdu=jdr.getElementsByClassName('jd-rigthbox');
// console.log(jdr)
let now=0;
for(let i=0;i<spana.length;i++){
    spana[i].onmouseenter=function(){
        jdu[now].style.display='none';
        jdu[i].style.display='block';
        now=i
        spana[i].style.cssText="border-bottom:1px solid #ff6700"
        spana[now].style.cssText='none' 
    }

}












































}