
// window.onscroll = function() {
//     document.getElementById("upper-header").style.display = "none";
    
  

// }

let upperHeader= document.getElementById('upper-header');
 let lowerHeader=document.getElementById('lower-header');

window.onscroll=function(){
    'use strict';
    
    if(window.pageYOffset>=1){
        upperHeader.style.display='none';
        lowerHeader.classList.add('white-nav');
    }else{
        upperHeader.style.display='block';
        lowerHeader.classList.remove('white-nav');

        
    }
}

