var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;

function start(){
    timer=true;
    stopwatch();
}

function stop(){
timer=false;
stopwatch();
}
function reset(){
    timer=false;
    count=0;
    sec=0;
    min=0;
    hr=0;
    stopwatch();

}

function stopwatch(){
    let hrstr=hr;
    let minstr=min;
    let secstr=sec;
    let countstr=count;
    if(hr<10){
        hrstr="0"+hr;
    }
    if(min<10){
        minstr="0"+min;
    }
    if(sec<10){
        secstr="0"+sec;
    }
    if(count<10){
        countstr="0"+count;
    }
    document.getElementById("count").innerHTML=countstr;
       document.getElementById("sec").innerHTML=secstr;
       document.getElementById("min").innerHTML=minstr;
       document.getElementById("hour").innerHTML=hrstr;
    if(timer==true){
        count+=1;
        if(count==100){
            count=0;
            sec+=1;  
        }
        if(sec==60){
            min+=1;
            sec=0;
           
        }
        if(min==60){
            hr+=1;
            min=0;
        }
        setTimeout("stopwatch()",10);
    }
}