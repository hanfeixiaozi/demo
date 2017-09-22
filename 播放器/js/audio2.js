window.onload=function(){
    let audio=document.querySelector('audio');
    let start=document.querySelector('.start');
    let up=document.querySelector('.up');
    let down=document.querySelector('.down');
    let i=0;
    let song=document.querySelector('.song');
    let singer=document.querySelector('.singer');
    let img=document.querySelector('img');
    let list=document.querySelector('.list');
//时间
    let current=document.querySelector('.current');
    let duration=document.querySelector('.duration');
//进度条
    let jindutiao=document.querySelector('.jindutiao');
    let tiao=document.querySelector('.tiao');
//声音
    let videoA=document.querySelector('.videoA');

    let videoB=document.querySelector('.videoB');
    let videoC=document.querySelector('.videoC');
    //播放暂停
    start.onclick=function(){
        if(audio.paused){
            audio.play();
            start.classList.add('icon-zanting');
            start.classList.remove('icon-zanting1');
        }else{
            audio.pause();
            database[i++];
            start.classList.add('icon-zanting1');
            start.classList.remove('icon-zanting');
        }
    }
    //上一曲   下一曲
    up.onclick=function(){
        if(i==0){
            return
        }
        render(database[--i]);

        audio.play();
        start.classList.add('icon-zanting');
        start.classList.remove('icon-zanting1')
    };
    down.onclick=function(){
        if(i==database.length-1){
            return
        }
        render(database[++i]);

        audio.play();
        start.classList.add('icon-zanting');
        start.classList.remove('icon-zanting1')
    };





    render(database[i]);
    function render(data){
        song.innerText=data.songs;
        singer.innerText=data.name;
        audio.src=data.src;
        img.src=data.photo;
        list.innerHTML='';
        current.innerText='00:00';
        duration.innerText=data.alltime;
        for (let i=0;i<data.lyrics.length;i++){
            list.innerHTML+=`<li class=list${i}>${data.lyrics[i].lyric}</li>`
        }
    }
    //时间
    function a(time){
        let minute=Math.floor(time/60)>10?Math.floor(time/60):`0${Math.floor(time/60)}`;
        let seconds=Math.floor(time%60)>10?Math.floor(time%60):`0${Math.floor(time%60)}`;
        return`${minute}:${seconds}`
    }
    audio.ontimeupdate=function(){
        let now=audio.currentTime;
        let all=audio.duration;
        let c=now/all*jindutiao.offsetWidth;
        tiao.style.width=`${c}px`;
        current.innerText=a(now);
        database[i].lyrics.forEach((ele,index)=>{
            if(ele.time==current.innerText){
                let a=index;
                if(index<9){
                    index=0;
                }else{
                    index-=9;
                }
                list.innerHTML='';
                for(let j=index;j<database[i].lyrics.length;j++){
                    list.innerHTML+=`<li class=list${j}>${database[i].lyrics[j].lyric}</li>`;
                }
                let obj=document.querySelector(`.list${a}`);
                obj.style.color='#16181C';
            }


        })
    }
//声音
    videoC.onmousedown=function (e) {
        let ox=e.offsetX;
        let left=this.offsetLeft;
        let lefts;
        audio.volume=0.5;
        videoA.onmousemove=function (e) {
            let cx=e.clientX;
            lefts=cx-ox+left+7;
            if(lefts<=0){
                lefts==0;
            }
            if(lefts>=(videoA.offsetWidth-videoC.offsetWidth/2)){
                lefts==videoA.offsetWidth-videoC.offsetWidth/2;

            }
            videoB.style.width=`${lefts}px`;
            videoC.style.left=`${lefts-7}px`;
            console.log(audio.volume)
            audio.volume=(lefts+7)/150;

            }
        videoC.onmouseup=function () {
            videoA.onmousemove=null;
            videoC.onmouseup=null;
        }
    }









}