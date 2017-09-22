/*
* @Author: lenovo
* @Date:   2017-08-14 17:54:57
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-14 19:45:45
*/



// $获取
function $(select,ranger=document){
        		if(typeof select=='string'){
        			//去空
        			let full=select.trim();
        			// 获取首字符
        			let first=full.charAt(0);
        			if(first=='#'){
        				return document.getElementById(full.substring(1));
        			}else if(first=="."){
        				return ranger.getElementsByClassName(full.substring(1));
        			}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(full)){
        				return ranger.getElementsByTagName(full);
        			}
        		}else if(typeof select=='function'){
        			window.onload=function(){
        				select();
        			}
        		}
			}

// html获取内容
function html(element,content){
		if(arguments.length==2){
			element.innerHTML=content;
		}else if(arguments.length==1){
			return element.innerHTML;
		}
	}

// text
function text(element,content){
		if(arguments.length==2){
			element.innerText=content;
		}else if(arguments.length==1){
			return element.innerText;
		}
	}

// css
function css(element,attrObj){
	for(let i in attrObj){
		element.style[i]=attrObj[i];
	}
}

//添加事件
function on(collection,type,fn){
	for(let i=0;i<collection.length;i++){
		collection[i][type]=fn;
	}
}

// 删除事件
function off(collection,type){
	for(let i=0;i<collection.length;i++){
		collection[i][type]=null;
	}
}