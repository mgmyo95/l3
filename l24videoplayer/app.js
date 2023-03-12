//Get UI 
const getvideoscreen = document.getElementById('videoscreen'),
      playbtn = document.getElementById('play'),  //1
      prevbtn = document.getElementById('prev'),  //4
      nextbtn = document.getElementById('next'),  //3
      stopbtn = document.getElementById('stop'),
      //for range
    //   progress = document.getElementById('progress'),
      getfullscreen = document.getElementById('fullscreen'),
      getopnfullscreen = document.querySelector('.openfullscreen'),
      getclsfullscreen = document.querySelector('.closefullscreen'),
      getdisplaytime = document.getElementById('displaytime'),
      getcontainer = document.querySelector('.container'),
      gettitle = document.getElementById('title');


      //FOR PROGRESS CONTAINER 
      const getprogressctn = document.getElementById('progress-container');
      const progress = document.getElementById('progress');

const videos = ['samplevideo1','samplevideo2'];
let curidx = 0;

loadvideo(videos[curidx]);

function loadvideo(video){
    getvideoscreen.src = `./source/${video}.mp4`;
    gettitle.textContent = video;
};

playbtn.addEventListener('click',playpausevideo);
nextbtn.addEventListener('click',nextvdo);
prevbtn.addEventListener('click',previousvdo);
stopbtn.addEventListener('click',stopvideo);
getvideoscreen.addEventListener('timeupdate',updateprogress);

                                 //only audio and video
getvideoscreen.addEventListener('ended',nextvdo);
getvideoscreen.addEventListener('click',playpausevideo);
//FOR RANGE
// progress.addEventListener('click',setprogress);
getopnfullscreen.addEventListener('click',openfullscreen);
getclsfullscreen.addEventListener('click',closefullscreen);

//FOR PROGRESS CONTAINER 
getprogressctn.addEventListener('click',setprogress);


function playvdo(){
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');
    //play() method came from video api
    getvideoscreen.play(); 

};

function pausevdo(){
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');
     //pause() method came from video api
    getvideoscreen.pause()
}

function playpausevideo(){
    //paused keyword came from video api
    if(getvideoscreen.paused){
        // getvideoscreen.play();
        playvdo();
    }else{
        // getvideoscreen.pause();
        pausevdo();     
    }
}

function nextvdo(){
    curidx++;
    
    if(curidx > videos.length-1){
        curidx = 0;
    }
    // console.log(curidx);
    loadvideo(videos[curidx]);
    playvdo();
}

function previousvdo(){
    curidx -= 1;
    if(curidx < 0){
        curidx = videos.length-1;
    }
    // console.log(curidx)
    loadvideo(videos[curidx]);
    playvdo();
}

function stopvideo(){
    getvideoscreen.currentTime = 0;
    pausevdo();
}

function updateprogress(e){

    //Method 2
    // console.log(e.target);
    // console.log(e.srcElement);
    // console.log(this);

    // const currentTime = e.target.currentTime;
    // const duration = e.target.duration;
    // console.log(currentTime,duration)

    //Method 3
    // const {currentTime} = e.target;
    // const {duration} = e.target;
    // console.log(currentTime,duration)

    //Method 4 
    // const {currentTime,duration} = e.target;
    // console.log(currentTime,duration);

    //Method 5
    const [currentTime,duration] = [e.target.currentTime,e.srcElement.duration];
    // console.log(currentTime,duration);

    //Method 1
    // console.log("hay");
    //currentTime came from video api
    // console.log(getvideoscreen.currentTime);
    // console.log(getvideoscreen.duration);
    // console.log(getvideoscreen.currentTime / getvideoscreen.duration) * 100;

    //FOR RANGE
    // if(getvideoscreen.currentTime === 0){
    //     progress.value = 0;
    // }else{
    //     progress.value = (currentTime / duration) * 100;
    // }

    //FOR PROGRESS CONTAINER 
    if(getvideoscreen.currentTime === 0){
        progress.style.width = "0%";
    }else{
        const progresspercent = (currentTime / duration) * 100;
        progress.style.width = `${progresspercent}%`;
    }
    
    let getmins = Math.floor(currentTime / 60);
    // console.log(getmins);

    // if(getmins < 10){
    //     getmins = '0' + String(getmins);
    // }

    let getsecs = Math.floor(currentTime % 60);
    // console.log(getsecs);

    // if(getsecs < 10){
    //     getsecs = '0' + String(getsecs);
    // }
    // getdisplaytime.textContent =`${getmins}:${getsecs}`;

    //Method 2 
    // Noted : padStart(target length,pad string)must be string data type
                                                  //place,getstart
    const minutevalue = getmins.toString().padStart(2,0);
    const secondvalue = getsecs.toString().padStart(2,0);
    getdisplaytime.textContent =`${minutevalue}:${secondvalue}`;

}

// const getdoce = document.documentElement;
function openfullscreen(){
    if(getcontainer.requestFullscreen){
        getcontainer.requestFullscreen();  //standard w3c
    }else if(getcontainer.mozRequestFullscreen){
        getcontainer.mozRequestFullscreen();    //chrome / safari
    }else if(getcontainer.webkitRequestFullscreen){
        getcontainer.webkitRequestFullscreen();    //chrome / safari
    }else if(getcontainer.msRequestFullscreen){
        getcontainer.msRequestFullscreen();   //microsoft pro / id / edge
    }

    getopnfullscreen.style.display = "none";
    getclsfullscreen.style.display = "inline-block";
}

function closefullscreen(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.mozRequestFullscreen){
        document.mozRequestFullscreen();    //chrome / safari
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }

    getopnfullscreen.style.display = "block";
    getclsfullscreen.style.display = "none";
}

function setprogress(e){
    // console.log("hay")
    // console.log((progress.value * getvideoscreen.duration)/100);

    //FOR RANGE
    // getvideoscreen.currentTime = (progress.value*getvideoscreen.duration)/100;

    //FOR PROGRESS CONTAINER 
    const getelewidth = this.clientWidth;
    // console.log(getelewidth);
    
    const getclickx = e.offsetX;
    // console.log(getclickx)

    const duration = getvideoscreen.duration;

    getvideoscreen.currentTime = (getclickx/getelewidth) * duration;
    // console.log(getvideoscreen.currentTime)
}

//20VD

//21VDO

// const bio = {
//     name : "aung aung",
//     age : 40,
//     city : "Yangon"
// }

// const {name,age} = bio;
// console.log(name,age);


// 26PG