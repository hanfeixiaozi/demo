/**
 * Created by Administrator on 2017/8/14 0014.
 */
//获取元素
function $(select,ranger=document){
    if(typeof select == 'string'){
        let selector = select.trim();
        let firstChar = selector.charAt(0);
        if(firstChar == '#'){
            return document.getElementById(selector.substring(1))
        }else if(firstChar == '.'){
            return ranger.getElementsByClassName(selector.substring(1))
        }else if(/^[a-zA-z][a-zA-Z1-6]{0,9}$/.test(selector)){
            return ranger.getElementsByTagName(selector)
        }
    }else if(typeof select == 'function'){
        window.onload = function(){
            select();
        }
    }
}

function html(element,content){
    if(arguments.length==2){
        element.innerHTML=content
    }else if(arguments.length==1){
        return element.innerHTML
    }
}
function text(element,content){
    if(arguments.length==2){
        element.innerText=content
    }else if(arguments.length==1){
        return element.innerText
    }
}
function css(element,attrObj){
    console.log(attrObj)
    for(let i in attrObj){
        element.style[i]=attrObj[i]
    }
}
//添加事件
function on(collection,type,fn){
    for(let i=0;i<collection.length;i++){
        collection[i][type]=fn;
    }
}
//删除事件
function off(collection,type){
    for(let i=0;i<collection.length;i++){
        collection[i][type]=null;
    }
}
//封装动画  有问题
// function animate(element,attrObj,speed,fn){
//     let t=setInterval(function(){
//         for(let i in attrObj){
//             let start=parseInt(getComputedStyle(element,null)[i])
//             if(start>=attrObj[i]){
//                 clearInterval(t);
//                 if(fn){
//                     fn.call(element)
//                 }
//             }
//             element.style[i]=`${start+speed}px`
//         }
//     },60)
// }