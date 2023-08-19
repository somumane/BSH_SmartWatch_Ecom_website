let firstindex=0;
function autoslide(){
    setTimeout(autoslide,5000);
    let pics;
    const img=document.querySelectorAll('.image');
   
    clicked=(e)=>{
       img[e].style.display="block"
       if(e===1){
        img[2].style.display="none";
        img[3].style.display="none";
        img[4].style.display="none";
       }
       if(e===2){
        img[1].style.display="none";
        img[3].style.display="none";
        img[4].style.display="none";
       }
       if(e===3){
        img[2].style.display="none";
        img[1].style.display="none";
        img[4].style.display="none";
       }
       if(e===4){
        img[2].style.display="none";
        img[1].style.display="none";
        img[3].style.display="none";
       }
    }

    for(pics=1; pics<img.length;pics++){
        img[pics].style.display='none';
    }
    firstindex++;
    if(firstindex>=img.length){
        firstindex=1;
    }
 img[firstindex].style.display="block";
}
autoslide();

let menu1=document.getElementById("menuitems")
menu1.style.maxHeight="0px"
 let menu=()=>{
    if(menu1.style.maxHeight==="0px"){
        menu1.style.maxHeight="200px"
    }
    else{
        menu1.style.maxHeight="0px"
    }
}
menu()