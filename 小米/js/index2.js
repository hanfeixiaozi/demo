/**
 * Created by Administrator on 2017/8/14 0014.
 */

//    now(当前窗口)  next（下一张）
//    定位css
//     next 右边（width，0）
//    动画
//    now(0,0)  (-width,0)
//    next(width,0)  (0,0)
//    下标更新
//    now=next
    $(function () {
    let bannerbox = $('.banner')[0];
    let widths=bannerbox.offsetWidth;
    let imgs = $('li',bannerbox);
    let uld=$('.lunbodian')[0];
    let lbd=$('li',uld);
    console.log(lbd)
    let now = next = 0;
    let t;
    let flag=true;
    t=setInterval(move,2000);

    function move() {
        next++;
        if (next==imgs.length){
            next=0;
        }
        imgs[next].style.left=`${widths}px`;
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0});
        now = next;
    }




    bannerbox.onmouseenter=function(){
        clearInterval(t)       
    }
    bannerbox.onmouseleave=function(){
        t=setInterval(move,2000); 
    }




    let back=$('.zuojiantou')[0];
    // console.log(back) ;
    let forward=$('.youjiantou')[0];
    // console.log(forward);
    back.onclick=function(){
        if (flag) {
            flag=false;
            fn();
        }
    };
    forward.onclick=function(){
        if(flag){
            flag=false;
            fn1();
        }
    }
    function fn(){
        clearInterval(t)
        next--;
        if (next==-1){
            next=imgs.length-1;
        }
        imgs[next].style.left=`${-widths}px`;
        animate(imgs[now],{left:widths});
        animate(imgs[next],{left:0},function(){
            flag=true;
        });
        now = next;
    }
    
    function fn1(){
        clearInterval(t)
       next++;
        if (next==imgs.length){
            next=0;
        }
        imgs[next].style.left=`${widths}px`;
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function(){
            flag=true;
        });
        now = next;
    }




    for (let i=0;i<lbd.length;i++){
       
        
        lbd[i].onclick=function () {
            if(i==now){return}
            if(now<i){
            lbd[now].classList.remove('lbdli');
            lbd[i].classList.add('lbdli');
            imgs[i].style.left=`${widths}px`;
            animate(imgs[now],{left:-widths});
            animate(imgs[i],{left:0});
            now=next=i
            }
        } 
        if (now>i){
            lbd[now].classList.remove('lbdli');
            lbd[i].classList.add('lbdli');
            imgs[i].style.left=`${-widths}px`;
            animate(imgs[now],{left:widths});
            animate(imgs[i],{left:0});
            now=next=i
        }
    }
    // 
    // 
    // 
    });