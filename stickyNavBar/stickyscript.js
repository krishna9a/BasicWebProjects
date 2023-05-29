

window.addEventListener("scroll",function(){
    let nav=document.getElementById("menu-bar");
    if(window.pageYOffset>=0){
        nav.classList.add("stcky");
    }
    else{
        nav.classList.remove("stcky");
    }
});

let flag=0;
function contorlar(x){
    flag+=x;
    slideshow(flag);
   
}
slideshow(flag);
function slideshow(x){
    var slides =document.getElementsByClassName("silde");
    
    if(x<0){
        x=slides.length-1;
        flag=slides.length-1;
    }
    else if(x>=slides.length){
        x=0;
        flag=0;
    }
    for(var y of slides){
        y.style.display="none";   
    }
    slides[x].style.display="block";
}