/*
* @Author: Administrator
* @Date:   2017-08-23 09:05:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-24 09:00:13
*/
// 1.属性
// 	有哪些字符，落下的时候是哪些字符
// 	个数
// 	下落速度
// 	得分
// 	关卡
// 	生命
// 	减分
// 2.方法
// 	开始
// 	消除
// 	产生字符:个数，那些字符
// 	下一关
// 	重新开始

function Game(){
	this.charSheet=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','K','L','Z','X','C','V','B','N','M']
	this.length=5
	this.elements=[];
	this.speed=10
	this.t;
	this.scoreObj=document.querySelector('.score>span');
	console.log(this.scoreObj)
	this.score=0;
	this.gq=10;
	this.position=[];
	this.hpObj=document.querySelector('.hp>span');
	this.hp=10;	
}	
Game.prototype={
	start:function(){
		this.getchar(this.length);
		this.drop();
		this.keyd();

	},
	getchars:function(length){
		
		for(let i=0;i<length;i++){
			this.getchar();
		}
	},
	checkRepeat:function(num){
		return this.elements.some(value=>value.innerText==this.charSheet[num])
	},
	checkPosition:function(lefts){
		return this.position.some(function(value){return Math.abs(value-lefts)<50})	
	},
	getchar:function(){
		let num;
		let lefts;
		// let num=Math.floor( Math.random()*this.charSheet.length );
		// let lefts=Math.random()*(innerWidth-400)+200;
		let tops=Math.random()*100;
		let divs=document.createElement('div')
		do{
			num=Math.floor( Math.random()*this.charSheet.length )
			}while(this.checkRepeat(num));

		do{
			lefts=Math.random()*(innerWidth-400)+200;
		}while(this.checkPosition(lefts));

		divs.classList.add('char');
		divs.innerText=this.charSheet[num];
		divs.style.cssText=`
							left:${lefts}px;			//这里用的是冒号
							top:${tops}px;
							color:${bgColor()};
							background
							`
		// divs.style.top=`${tops}px`;
		// divs.style.left=`${lefts}px`;
		this.elements.push(divs);
		this.position.push(lefts);
		document.body.appendChild(divs);


		

		


		function bgColor(){											//颜色随机
		let a=Math.floor(Math.random()*256);
		let b=Math.floor(Math.random()*256);
		let c=Math.floor(Math.random()*256);
		return `rgb(${a},${b},${c})`;
	}
	},
	drop:function(){
		let that=this

		this.t=setInterval(function(){
			for(let i=0;i<that.elements.length;i++){
				let tops=that.elements[i].offsetTop;
				that.elements[i].style.top=`${tops+that.speed}px`
				if(tops>=400){
						that.hp--; 
						that.hpObj.innerText=that.hp;
						if(that.hp<=0){
							if(confirm('游戏结束，是否重新开始!')){	
								that.regame();
							}else{
								close();
							}
						}
					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);

				}
				if(that.elements.length<that.length){
					that.getchar();
				}

			}

		},400)
	},
	regame:function(){
		clearInterval(this.t);
		for(let i=0;i<this.elements.length;i++){
			document.body.removeChild(this.elements[i]);
			// this.elements.splice(i,1);
			
		}
		this.elements=[];
		this.position=[];
		// this.length++;
		this.start();
		this.gq=10;
		this.score=0
		this.scoreObj.innerText=this.score;
		this.hp=10
		this.hpObj.innerText=this.hp;
		this.length=5
		this.speed=10
		
	},
	keyd:function(){
		let that=this;
		document.onkeydown=function(e){
			let char=String.fromCharCode(e.keyCode);
			for (let i=0;i<that.elements.length;i++){
				if(char==that.elements[i].innerText){
					document.body.removeChild(that.elements[i])
					that.elements.splice(i,1);
					that.position.splice(i,1);
					that.score++;
					that.speed+=0.5;
					that.scoreObj.innerText=that.score;
					if(that.score==that.gq){
						that.next();
					}

				}
			}
		}
	},
	next:function(){
		clearInterval(this.t);
		for(let i=0;i<this.elements.length;i++){
			document.body.removeChild(this.elements[i]);
			// this.elements.splice(i,1);
			
		}
		this.elements=[];
		this.position=[];
		this.length++;
		this.gq+=10;
		this.start();
	},
	

	




	//清除时间，清除页面中的元素for，数组，增加长度，分值累加，+=10,重新开始
	//confirm()
	//















}
