const getbox = document.querySelector('.box');
const getbtns = document.querySelector('.btns')
const getboxtitle = document.getElementById('boxtitle');

getbox.addEventListener('click',function(e){
    // getbtns.classList.toggle('show');
    getbtns.classList.add('show');
    // console.log(e.target);
    smallmenu(e.target);
});

function smallmenu(icobox){
    console.log(icobox)
    if(icobox.classList.contains('btn-icon')){
        console.log("yes")
    }else{
        console.log('no')
    }
}

getbox.addEventListener('dblclick',function(){
    getbtns.classList.remove('show');
})

dragme(getbox);

function dragme(getele){
    // console.log(getele);

    var getcx,getcy,setcx,setcy;

    //design1
    // getele.onmousedown = getmousedown;

    //design2 
    if(getele){
        getboxtitle.onmousedown = getmousedown;
    }

    function getmousedown(e){
        // console.log("i am working");

        getcx = e.clientX;
        getcy = e.clientY;
        // console.log(getcx,getcy);

        document.onmousemove = dragme;

        document.onmouseup = stopdragme;

        // console.log('step 1 ' , getcx,getcy);

        // getbtns.classList.remove('show');
    }

    function dragme(e){
        // console.log(e.target);
        
        setcx = getcx - e.clientX;    //step 3
        setcy = getcy - e.clientY;
        // console.log(getcx,setcx);
        // console.log(getcy,setcy);

        //result for new pin position
        getcx = e.clientX;  //step 4 overwrite
        getcy = e.clientY;

        console.log('step 2',getcx,getcy);

        const btnleft = getele.offsetLeft;  //step 3
        const btntop = getele.offsetTop;

        // console.log(btnleft,btntop)

        getele.style.left = (btnleft-setcx) + "px";
        getele.style.top = (btntop-setcy) + "px";

        // console.log(btnleft-setcx,btntop-setcy);

        getbtns.classList.remove('show');
    }

    function stopdragme(){   //step 2
        document.onmousemove = null;
        document.onmouseup = null;
    }

}

//8DG

//21MM