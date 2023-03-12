// Get UI
//Init 
let getcurmonth = document.getElementById('curmonth');
let getcuryear = document.getElementById('curyear');
var getcalday = document.getElementById('caldays');
var getuimonth = document.getElementById('months');
var getuiyear = document.getElementById('years');
var getyearbtn = document.querySelector('.year-btn');

var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var startyear = 2010;
var endyear = 2030;

var month,year;

window.addEventListener('load',function(){
    // console.log('hay i am working');

    var svday = new Date();
    month = svday.getMonth();   //1
    year = svday.getFullYear();  //2023
    // console.log(svday,month,year);

    getcurmonth.textContent = months[month];
    getcuryear.textContent = year;

    initmonths();
    inityears();
    initdays();

});

function initmonths(){

    getuimonth.innerHTML = '';
    for(var x = 0 ; x < months.length ; x++){
        var newdiv = document.createElement('div');
        newdiv.textContent = months[x];
        newdiv.classList.add('dropdown-item');

        // newdiv.addEventListener('click',function(){
        //     // console.log(this.textContent);
        //     getcurmonth.textContent = this.textContent;
        // })

        // newdiv.onclick = (
        //     function(){
        //         // console.log(x)
        //         return function(){
                  
        //             initdays();
        //         }
        //     }
        // )();

        newdiv.onclick = selectmonth(x);

        getuimonth.appendChild(newdiv);

        // console.log(newdiv);
    }   
};

function selectmonth(num){
    // console.log(num);
    let allidx = num;  // 0 to 11

    return function(){
        month = allidx;
        // console.log(month);
        getcurmonth.textContent = months[month];
        initdays();
    }
}

function inityears(){
    getuiyear.innerText = '';
    for(var x = startyear ; x <= endyear ; x++){
        // console.log(x);
        var newdiv = document.createElement('div');
        newdiv.innerText = x;
        newdiv.className = 'dropdown-item';
        // console.log(newdiv);

        newdiv.onclick = (function(){
            // console.log(x);
            var allidx = x; //2010 to 2030
            // console.log(allidx);
            return function(){
                year = allidx;
                console.log(year);
                getcuryear.innerText = year;
                initdays();
            }
        })();

        getuiyear.appendChild(newdiv);
    }
}

function initdays(){
    getcalday.innerHTML = '';

                           //    1
    var tmpdays = new Date(year,month,0);
                                    //1
    // console.log(tmpdays);  //Tue Jan 31 2023 00:00:00 GMT+0630 (Myanmar Time)

    var getalldays = alldays(year,month); 

    var getweekday = tmpdays.getDay();
    // console.log(getweekday);  //2 (2 mean Tuesday);

    // <div id="" class="day">1</div>

    //get carry space for previous days
    for(var i = 0 ; i <= getweekday ; i++){
        // console.log(i)
        var newdiv = document.createElement('div');
        newdiv.className = 'day blanks';
        // console.log(newdiv);
        getcalday.appendChild(newdiv);
    }
    
    for(var x = 0 ; x < getalldays ; x++){
        // console.log(x)
        var addday = x+1;

        var newdiv = document.createElement('div');
        newdiv.textContent = addday;
        newdiv.classList.add('day');

        // console.log(newdiv);
        getcalday.appendChild(newdiv);

    }

};

function alldays(year,month){
    // console.log(year,month);
    // console.log(new Date());
                       //   year month day
    // console.log(new Date(2023,1,10));  //Fri Feb 10 2023 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,1,0));   //Tue Jan 31 2023 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,0,0));   //Sat Dec 31 2023 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,5,0));   //Wed May 31 2023 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,1,30));  //Thu Mar 02 2023 00:00:00 GMT+0630 (Myanmar Time)

    var curalldays = new Date(year,month+1,0);
    // console.log(curalldays);
    curalldays = curalldays.getDate();
    // console.log(curalldays);  28

    return curalldays;


}

getyearbtn.addEventListener('click',function(){
    if(this.lastElementChild.classList.contains('show')){
        this.lastElementChild.classList.remove('show');
    }else{
        this.lastElementChild.classList.add("show");
    }
});


//20CL
//27CL

