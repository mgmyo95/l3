let getimgs = document.querySelectorAll('.img');
let getmodal = document.querySelector('.modal');
let getbtnclose = document.querySelector('.btn-close');
var getviews = document.getElementsByClassName('view'); //HTML collection  
// console.log(getviews[0]);
var getprevbtn = document.querySelector('.prev');
var getnextbtn = document.querySelector('.next');
var getcounter = document.querySelector('.counter');
var getcaption = document.querySelector('.sample');
var getnoactive = document.getElementsByClassName('noactive');
// console.log(getnoactive) //HTML Collection

var curidx = 1;


// console.log(getimgs,getmodal,getviews)

for(var i = 0 ; i < getimgs.length ; i++){
    // console.log(getimgs[i]);
    getimgs[i].addEventListener('click',function(e){
        showmodal();
        // console.log(e.target.alt)
        // console.log(this.alt);

        const findids = this.alt.split('').filter(rmspace=>rmspace.trim() !== "");
        // console.log(findids);
        // console.log(findids[findids.length-1]);

        curidx = +findids[findids.length-1];
        // console.log(curidx,typeof curidx)

        slideshow(curidx);
    });
}

function showmodal(){
    getmodal.style.display = "block" 
}

getbtnclose.addEventListener('click',function(){
    // this.parentElement.style.display = "none";
    getmodal.style.display = "none";
});

document.addEventListener('click',function(e){
    // console.log(e.target);
    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
});

function currentview(num){
    // curidx = num;
    slideshow(curidx = num);
}

getnextbtn.addEventListener('click',function(){
    // console.log("next")
    slideshow(curidx +=1)
});

getprevbtn.addEventListener('click',function(){
    // console.log("prev")
    slideshow(curidx -=1);
});


function slideshow(num){
    // console.log(num);

    let x;
    for(x = 0 ; x < getviews.length ; x++){
        getviews[x].style.display = "none";
    }

    for(x = 0 ; x < getnoactive.length ; x++){
        // getnoactive[x].classList.remove('active')
        getnoactive[x].className = getnoactive[x].className.replace(" active","");
    }
    
    if(num > getviews.length){
        num = 1;
        curidx = 1;
    }else if(num < 1){
        num = getviews.length;
        curidx = getviews.length;
    }
    // console.log("this is curidx = " , curidx);
    // console.log("this is num = " , num);

    getcounter.textContent = `${num} / ${getviews.length}`; 

    //1-1 = 0;
    getviews[num-1].style.display = "block";
    //1-1 = 0;
    getnoactive[num-1].className += " active";
    getcaption.innerText = getnoactive[num-1].alt;
   
}

//26LB


