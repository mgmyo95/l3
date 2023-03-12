//Get UI
let openbtn = document.querySelector('.open-btn');
let closebtn = document.querySelector('.close-btn')
let getnav = document.querySelector('.nav');


// openbtn.addEventListener('click',navtoggle);
// closebtn.addEventListener('click',navtoggle);

// function navtoggle(){
//     getnav.classList.toggle('visible');
// }

openbtn.addEventListener('click',function(){
    getnav.classList.add('visible');
});

closebtn.addEventListener('click',function(){
    getnav.classList.remove('visible');
});


//30NB
// 5NV
