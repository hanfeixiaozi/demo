/*
* @Author: Administrator
* @Date:   2017-08-28 20:04:14
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-31 00:34:59
*/
window.onload=function(){
	let canvas=document.querySelector('canvas');
	let mash=document.querySelector('.mash')



	let palette = new Palette(canvas,mash);
	
	let eraser=document.querySelector('.eraser')
	let eraserbox=document.querySelector('.eraserbox')
	let as=document.querySelectorAll('.as')
	let font=document.querySelector('.font')
	let save=document.querySelector('.save')
	let too=document.querySelectorAll('.too');
	let color=document.querySelectorAll('.color');

	too.forEach(element=>{
		// element.setAttribute('active','false');
		element.onclick=function(){
			too.forEach(element=>{
				element.setAttribute('active','false');
			})
			this.setAttribute('active','true');
			if(this.id=='pencil'){
				palette.pencil();
			}else if(this.id=='polyj'){
				palette.polygon=prompt('请输入想要的角度',5);
				palette.draw(this.id);
			}else {
				palette.draw(this.id);
			}
			
		}
	});

//颜色
	color.forEach(element=>{
		element.onchange=function(){                        //改颜色时的事件
			color.forEach(element=>{
				element.setAttribute('active', false);
			});
			this.setAttribute('active', true);
			if(this.id='fills'){
				palette.fillStyle=this.value;				//修改它的默认属性
			}
			if(this.id='strokes'){
				palette.strokeStyle=this.value;
			}
		}
	});



// 填充描边
	as.forEach(element=>{
		element.onclick=function(){
			as.forEach(element=>{
				element.setAttribute('active',false)
			})
			this.setAttribute('active',true)
			if(this.id=='fill'){
				palette.style='fill';
			}
			if(this.id=='stroke'){
				palette.style='stroke';
			}
		}
	})

//eraser
	eraser.onclick=function(){
		palette.eraser(eraserbox,10,10);
	};

//文字
	font.onclick=function(){
		palette.font();
	};


//保存并下载
	save.onclick=function(){
		save.href=canvas.toDataURL('image/png');
		save.download='a.png'
	};

//裁切
	let clip=document.querySelector('.clip');
	let clipobj=document.querySelector('.clipobj');
	clip.onclick=function(e){
        // if(e.ctrlKey&&e.keyCode==90){
        //     palette.clip(clipobj);
        // }
		palette.clip(clipobj);
	};

//反向
	let revser=document.querySelector('.revser');
	revser.onclick=function(){
		palette.revser();
	};
//撤销
    let back=document.querySelector('.back');
	console.log(back);
	back.onclick=function () {
        palette.back();
    }




};