// Hero Background JS
var imgNumPrev = 0;

function changeBackground() {
   var imgNum;
   while(1) {
      imgNum = Math.floor(Math.random() * 10);
      if(imgNum != imgNumPrev) break;
   } 
   imgNumPrev = imgNum;
   
   document.getElementsByClassName('hero')[0].style = "background-image: url(img/poster_" + imgNum + ".jpg)";
   document.getElementsByClassName('hero')[0].classList.remove('effect-fade-in');
   void document.getElementsByClassName('hero')[0].offsetWidth;
   document.getElementsByClassName('hero')[0].classList.add('effect-fade-in');
}

var changeHero = setInterval(changeBackground, 3000);



