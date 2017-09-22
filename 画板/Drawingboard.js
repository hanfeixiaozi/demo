// 属性：
// 线宽  端点  颜色 边数 角 尺寸 width height history ctx   canvas


// 方法：
// 画线  虚线   铅笔     多边形   圆   矩形    多角形
// 橡皮   裁切  文字
// 新建   保存
// label  自动聚焦


function Palette(canvas,mash){
	this.canvas=canvas;
	this.mash=mash;
	this.ctx=this.canvas.getContext('2d');

	this.history=[];
	this.cw=this.canvas.width;
	this.ch=this.canvas.height;

	this.lineWidth=1;
	this.lineCap='butt';         //端点
	this.fillStyle='#000'
	this.strokeStyle='#000'


	//描边   填充
	this.style='stroke'


	//角数
	this.polygon=5;

	//裁切
	this.temp=null;
}
Palette.prototype={

	init:function(){
		this.ctx.lineWidth=this.lineWidth;
		this.ctx.lineHeight=this.lineHeight;
		this.ctx.fillStyle=this.fillStyle;
		this.ctx.strokeStyle=this.strokeStyle;
		this.ctx.setLineDash([0,0]);
	},
	

	//直线
	line:function(ox,oy,oxx,oyy){
				this.ctx.beginPath();
				this.ctx.moveTo(ox,oy);
				this.ctx.lineTo(oxx,oyy);
				this.ctx.closePath();
				this.ctx.stroke();	
	},


	//铅笔
	pencil:function(){
		let that=this;
		this.mash.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			that.init();
			that.ctx.beginPath();
			that.ctx.moveTo(ox,oy);
			that.mash.onmousemove=function(e){
				let oxx=e.offsetX,oyy=e.offsetY;

				if(that.history.length>0){
                that.ctx.putImageData(that.history[that.history.length-1],0,0);
            }

				that.ctx.lineTo(oxx,oyy);
				that.ctx[that.style]();
			}
			that.mash.onmouseup=function(){

				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));

				that.mash.onmousemove=null;
				that.mash.onmouseup=null;
			}

		}
		
	},

	//虚线
	dash:function(ox,oy,oxx,oyy){		
				this.ctx.setLineDash([3,5]);
				this.ctx.beginPath();
				this.ctx.moveTo(ox,oy);
				this.ctx.lineTo(oxx,oyy);
				this.ctx.closePath();
				this.ctx.stroke();
		
	},

	//圆
	round:function(ox,oy,oxx,oyy){
		const PI=Math.PI;
		let r=Math.sqrt(Math.pow(oxx-ox,2)+Math.pow(oyy-oy,2));
				this.ctx.beginPath();
				this.ctx.arc(ox,oy, r, 0,2*PI);
				this.ctx.closePath();
				this.ctx[this.style]();
	},

	//矩形
	rectangle:function(ox,oy,oxx,oyy){
				this.ctx.beginPath();
				this.ctx.strokeRect(ox,oy,(oxx-ox),(oyy-oy));
				this.ctx.closePath();
				this.ctx[this.style]();
	
	},



	// pop:function(){
	// 	let img=this.history.pop();
     //        this.ctx.putImageData(img,0,0);
	// },

    //撤销
    back:function(){
        if(this.history.length>=1){
            this.history.pop();
        }
        if(this.history.length==0){
            this.ctx.clearRect(0,0,this.widths,this.height);
            return;
        }
        this.ctx.putImageData(this.history[this.history.length-1],0,0);
    },


	//多角形
	polyj:function(ox,oy,oxx,oyy){
			let ang=(360/(this.polygon*2))*(Math.PI/180);
				let r=Math.sqrt(Math.pow(oxx-ox,2)+Math.pow(oyy-oy,2));
				let r1=r/2;
				// this.ctx.setLineDash([0,0])
				// this.ctx.clearRect(0, 0, this.cw, this.ch);
				this.ctx.beginPath();
				this.ctx.moveTo(ox+r,oy);
				for(let i=1;i<this.polygon*2;i++){
					if(i%2){
						this.ctx.lineTo(r1*Math.cos(ang*i)+ox, r1*Math.sin(ang*i)+oy);
					}else{ 
						this.ctx.lineTo(r*Math.cos(ang*i)+ox, r*Math.sin(ang*i)+oy);
					}
				}
				this.ctx.closePath();
				this.ctx.stroke();
				this.ctx[this.style]();
		},

	


	//橡皮擦
	eraser:function(obj,w,h){
		let that=this;
		let mash=document.querySelector('mash')
		this.mash.onmousedown=function(e){
			obj.style.display='block';
			e.preventDefault();
			that.mash.onmousemove=function(e){

				let ox=e.offsetX,oy=e.offsetY;
				let lefts=ox-w/2
				let tops=oy-h/2
				if(lefts<=0){
					lefts=0
				}
				if(lefts>=that.cw){
					lefts=that.cw-w
				}
				if(tops<=0){
					tops=0
				}
				if(tops>=that.ch){
					tops=that.ch-h
				}
				obj.style.left=`${lefts}px`
				obj.style.top=`${tops}px`
				that.ctx.clearRect(lefts, tops, w, h)
			}


			that.mash.onmouseup=function(){
				obj.style.display='none';
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
				that.mash.onmousemove=null;
				that.mash.onmouseup=null;
			}

			
		}

	},

	//文字
	font:function(){
		let that=this;
		this.mash.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			let div=document.createElement('div');
			div.style.cssText =`
				width:200px;minheight:30px;background:#fff;border:2px dashed skyblue;
				position:absolute;top:0;left:0;
			`
			div.contentEditable="true";
			that.mash.appendChild(div);
			div.style.left=`${ox}px`
			div.style.top=`${oy}px`
			that.mash.onmousedown=null;


//移动文本框
			let lefts,tops;
			div.onmousedown=function (e){
				let ox=e.clientX,oy=e.clientY;
				let ol=div.offsetLeft;ot=div.offsetTop;
				that.mash.onmousemove=function(e){
					let cx=e.clientX,cy=e.clientY;
					lefts=cx-ox+ol;
					tops=cy-oy+ot;
					div.style.left=`${lefts}px`
					div.style.top=`${tops}px`
				}
				div.onmouseup=function(){
					that.mash.onmousemove=null;
					this.onmouseup=null;
				}
			}


//失去焦点时把文字保存
			div.onblur=function(){
				// this.ctx.textAlign='center';
				// this.ctx.textBaseLine='middle';
				let value=this.innerText;
				that.ctx.fillText(`${value}`,ox,oy)
				that.mash.removeChild(this)
			}



		
		}


	},






	draw:function(type){
		let that=this;
		this.mash.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			that.init();
			that.mash.onmousemove=function(e){
				let oxx=e.offsetX,oyy=e.offsetY;
				that.ctx.clearRect(0, 0, that.cw, that.ch);

			if(that.history.length>0){
                that.ctx.putImageData(that.history[that.history.length-1],0,0);//最后一个记录放进去
            }

				that[type](ox,oy,oxx,oyy);

			}




			that.mash.onmouseup=function(){
				
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));//存起来

				that.mash.onmousemove=null;
				that.mash.onmouseup=null;
			}
		}
	},





//裁切
	clip:function(clipobj){
		let that =this;
		this.onmousedown=function(e){
			let w,h,minx,miny;
		let ox=e.offsetX,oy=e.offsetY;
			that.mash.onmousemove=function(){
				let cx=e.offsetX,cy=e.offsetY;
				w=Math.abs(cx-ox),h=Math.abs(cy-oy);
				minx=cx>ox?ox:cx;
				miny=cy>oy?oy:cy;
				clipobj.style.cssText=`
					display:block;
					left:${minx}px;top:${miny}px
					width:${w}px;height:${h}px
				`;
			};
			that.mash.onmouseup=function(){
				that.ctx.getImageData(mix,miny,w,h);
				that.ctx.clearRect(minx,miny,w,h);
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
					that.ctx.putImageData(that.temp,minx,miny);
					that.mash.onmousemove=null;
					that.mash.onmouseup=null;
					that.drag(minx,miny,w,h,clipobj);
			}
		}
	},
	drag:function(minx,miny,w,h,obj){
		let that=this;
		this.mash.onmousemove=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			if(ox>minx && ox<minx+w && oy>miny && oy<miny+h){
			that.mash.cousor='move';
			}else{
				that.mash.cousor='default';
			}

		}
		this.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			that.mash.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				let lefts=minx+(cx-ox);
				let tops=miny+(cy-oy);
				if(lefts>=that.cw){
					lefts=that.cw;
				}
				if(tops>=that.ch){
					tops=that.ch;
				}
				obj.style.left=`${lefts}px`;
				obj.style.top=`${tops}px`;
				taht.ctx.clearRect(0,0,that.cw,that.ch)
				if (that.history.length>0) {
					that.ctx.putImageData(that.history[that.history.length-1],0,0);
				}
				that.ctx.putImageData(that.temp,lefts,tops);
			}
			that.mash.onmouseup=function(){
				that.temp=null;
				obj.style.display='none';
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
				that.mash.onmousemove=null;
				that.mash.onmouseup=null;
			}
		}
	},





//反向
	revser:function(){
		let imgData=this.ctx.getImageData(0,0,this.cw,this.ch);
		let data=imgData.data;
		for(let i=0;i<data.length;i+=4){
			data[i]=255-data[i];
			data[i+1]=255-data[i+1];
			data[i+2]=255-data[i+2];
		}
		this.ctx.putImageData(imgData,0,0);
	}































}










