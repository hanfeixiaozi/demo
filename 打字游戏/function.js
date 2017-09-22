/*
* @Author: Administrator
* @Date:   2017-08-15 16:27:19
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-17 09:08:05
*/
function insertAfeter(parent,position){
	let next=position.nextElementSibling;
	let parent=position.parentNode;
	if (next){
		parent.insertBefore(insert,next);
	}else{
		parent.appendChild(insert);
	}

}
HTMLElement.prototype.insertAfeter=function(){
	let next =this.nextElementSibling;
	let parent=this.parentNode;
	if (next){
		parent.insertBefore(insert,next);
	}else{
		parent.appendChild(insert);
	}
}
HTMLElement.prototype.prependChild=function(insert){
	let fisrt=this.firstElementChild;
	if(first){
		this.insertBefore(insert,first);
	}else{
		this.appendChild(insert);
	}
}
HTMLElement.prototype.prependTo=function(parent){
	parent.prependChild(this)
}
//appendTo
HTMLElement.prototype.appendTo=function(parent){
		parent.appendChild(this)
}
//清空 
HTMLElement.prototype.empty=function(parent){
		let child=this.childNodes;
		// for (let i=child.length-1;i>0;i--){
		// 	this.removeChild(child[i]);
		// }

		this.innerHTML='';
}
//把自己移除
HTMLElement.prototype.remove=function(){

	let parent=this.parentNode;
	parent.removeChild(this);
}
//next() nextAll()它之后所有的 nextUntil() 中间部分
//previous() previousAll()它之后所有的 previousUntil() 中间部分   closet()    parent()
//parents()  parentUntil()
HTMLElement.prototype.next=function(){
	let next=this.nextElementSibling;
	if(next){
		return next;
	}else{
		return false;
	}
}
HTMLElement.prototype.nextAll=function(){
	let nexte =this.next();
	let arr=[];
	if(nexte){
		arr.push(nexte);
	}else{
		return false;
	}
	while(nexte){
		nexte=next.next();
		arr.push(nexte);
	}
	arr.pop();
	return arr;
}