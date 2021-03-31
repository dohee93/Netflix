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





// Accordion Toggle JS
//var openState = [false,false,false,false,false,false];
var openState = new Boolean(false);
   
   
function contentOpen(target) {

   for(i = 0; i < 6; i++) {
      if(i != target) {
         document.querySelectorAll('.faq-list li')[i].style = "max-height: 60px;";
         document.querySelectorAll('.faq-list li div svg')[target].style = "transform: translateY(-100%) rotate(45deg);";
         openState[i] = false;
      }
   }
   //이벤트 발생 요소에 대한 실행 처리
   if(openState[target]) {
      document.querySelectorAll('.faq-list li')[target].style = "max-height: 69px;";
      document.querySelectorAll('.faq-list li div svg')[target].style = "transform: translateY(-100%) rotate(45deg);";
      openState[target] = false;
   }
   else {
      document.querySelectorAll('.faq-list li')[target].style = "max-height: 500px;";
      document.querySelectorAll('.faq-list li div svg')[target].style = "transform: translateY(-100%) rotate(90deg);";
      openState[target] = true;
   }
}

