window.onload=function(){
    let audio=document.querySelector('audio');
    let start=document.querySelector('.start');
    let song=document.querySelector('.song');
    let singer=document.querySelector('.singer');
    let img=document.querySelector('img');
    let ul=document.querySelector('ul');
    let li=document.querySelector('.list');


    start.onclick=function () {
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
            i++;
        }
        start.classList.toggle('icon-zanting');
    };
    let i=0;
    i++;
    console.log(i);
    if(i==database.length){
        i=0;
    }
    render(database[i]);
    function render(data){
        song.innerText=data.songs;                                   //歌名
        singer.innerText=data.name;                                  //演唱人
        audio.src=data.src;                                           //音乐路径
        img.src=data.photo;                                           //图片
        ul.innerText='';                                            //歌词
        for(let i=0;i<data.lyrics.length;i++){
            ul.innerHTML=`
            <li>${data.lyrics[i].lyric}</li>
            `
        }
    }


    //时间  进度条
    let jdt=document.querySelector('.jindutiao');
    let jdtW=jdt.offsetWidth;
    let tiao=document.querySelector('.tiao');
    let current=document.querySelector('.current');
    let duration=document.querySelector('.duration');

    audio.onclick=function(){
        let cm=Math.floor(audio.currentTime/60);
        let cs=Math.floor(audio.currentTime%60);
        if(cm>=10){
            cm=cm;
        }else{
            cm=`0${cm}`;
        }

        if(cs>=10){
            cs=cs;
        }else{
            cs=`0${cs}`;
        }
        current.innerText=`${cm}:${cs}`;

    let dm=Math.floor(audio.duration/60);
    let ds=Math.floor(audio.duration%60);
    if(dm>10){
        dm=dm;
    }else{
        dm=`0${dm}`
    }
    if(ds>10){
        ds=ds;
    }else{
        ds=`0${ds}`
    }
    duration.innerText=`${dm}:${ds}`;
//进度条
    let pre=Math.floor((audio.currentTime/audio.duration)*jdtW);
    console.log(pre);
    tiao.style.width=`${pre}px`;



    //歌词效果
    database[i].lyrics.forEach((element,index)=>{

    let a=index;
            list.innerHTML='';
    if(index<3){
        a=0
    }else {
        a-=3
    }
    if(`${cm}:${cs}`==element.time){
        ul.innerText='';
        for(let j=a;j<database[i].lyrics.length;j++){
            ul.innerHTML+=`
      		  <li class='list${j}';>${database[i].lyrics[j].lyric}</li>
      		`;

        }
        let lis=document.querySelector(`.list${index}`);
        lis.style.color='red';
    }

    })
}


//音量
    let videoA=document.querySelector('.videoA');
    let videoB=document.querySelector('.videoB');
    let videoC=document.querySelector('.videoC');
    let vw=videoA.offsetWidth;
    videoC.onmousedown=function(e){
        let cx=e.clientX;
        let cw=videoC.offsetLeft;
        videoA.onmousemove=function(e){
            let ex=e.clientX;
            let lefts=ex-cx+(cw+7);
            if(lefts<0){
                lefts=0;
            }
            if(lefts>vw){
                lefts=vw;
            }
            videoC.style.left=lefts+'px';
            videoB.style.width=lefts+7+'px';
            audio.volume=lefts/157;
        };
        videoA.onmuseup=function(e){
            videoA.onmousemove=null;
            videoA.onmuseup=null;
        }
    }


    //上一曲
    let up=document.querySelector('.up');
    up.onclick=function(){
        i--;
        if(i==-1){
            i=database.length-1;
        }
        render(database[i]);
        audio.play();
    }
    //下一曲
    let down=document.querySelector('.down');
    down.onclick=function(){
        i++;
        if(i==database.length){
            i=0;
        }
        render(database[i]);
        audio.play();
    }


    //单曲循环   随机播放   顺序播放

    //单曲循环
let dqxh=document.querySelector('.danquxunhuan');
    dqxh.onclick=function(){
        const m=i
        render(database[m]);
        audio.play();
        start.classList.add('icon-zanting');
        start.onclick=function(){
            if(audio.paused){
                audio.play();
            }else{
                audio.pause();
            }
            start.classList.toggle('icon-zanting');
        }
    }

    //随机播放
    let sJ=document.querySelector('.suijibofang');
    sJ.onclick=function(){
        let sj=Math.floor(Math.random()*database.length);
        render(database[sj]);
        audio.play();
        start.classList.add('icon-zanting');
        start.onclick=function(){
            if(audio.paused){
                audio.play();
            }else{
                audio.pause();
            }
            start.classList.toggle('icon-zanting');
        }
    }













};