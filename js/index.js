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

var openState = new Boolean(false);
var faq = document.getElementsByClassName('faq-item');
var accordSymbol = document.querySelectorAll('.faq-list li div svg');
   var faqList = document.querySelectorAll('.faq-list li');

function contentOpen(target) {
   faq[target].addEventListener('click', function(){    
      for(var i = 0; i < 6; i++) {
         if(i != target) {
            faqList[i].style = "max-height: 69px;";
            accordSymbol[i].style = "transform: translateY(-100%) rotate(45deg);";
            openState[i] = false;
         }
      }
      //이벤트 발생 요소에 대한 실행 처리
      if(openState[target]) {
         faqList[target].style = "max-height: 69px;";
         accordSymbol[target].style = "transform: translateY(-100%) rotate(45deg);";
         openState[target] = false;
      }
      else {
         faqList[target].style = "max-height: 500px;";
         accordSymbol[target].style = "transform: translateY(-100%) rotate(90deg);";
         openState[target] = true;
      }
   });
}

for(var i = 0; i < faq.length; i++ ){
   contentOpen(i);
}

