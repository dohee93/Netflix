// var openState = new Boolean(false);
// var faq = document.getElementsByClassName('faq-item');
// var accordSymbol = document.querySelectorAll('.faq-list li div svg');
// var faqList = document.querySelectorAll('.faq-list li');
// const CLICKED_CLASS = 'clicked';

// function contentOpen(target) {
//    faq[target].addEventListener('click', function(){    
//       for(var i = 0; i < 6; i++) {
//          if(i != target) {
//             faqList[i].style = "max-height: 69px;";
//             accordSymbol[i].style = "transform: translateY(-100%) rotate(45deg);";
//             openState[i] = false;
//          }
//       }
//       //이벤트 발생 요소에 대한 실행 처리
//       if(openState[target]) {
//          faqList[target].style = "max-height: 69px;";
//          accordSymbol[target].style = "transform: translateY(-100%) rotate(45deg);";
//          openState[target] = false;
//       }
//       else {
//          faqList[target].style = "max-height: 500px;";
//          accordSymbol[target].style = "transform: translateY(-100%) rotate(90deg);";
//          openState[target] = true;
//       }
//    });
// }

// for(var i = 0; i < faq.length; i++) {
//    contentOpen(i);
// }



function initAcc(elem, option){
   document.addEventListener('click', function (e) {
      if (!e.target.matches(elem+' .faq-list-item .faq-item') && !e.target.matches(elem+' .faq-list-item .faq-item h3') && !e.target.matches(elem+' .faq-list-item .faq-item svg')) return;
      else{
         if(e.target.matches(elem+' .faq-list-item .faq-item')){
            if(!e.target.parentElement.classList.contains('clicked')){
               if(option==true){
                  var elementList = document.querySelectorAll(elem +' .faq-list-item');
                  Array.prototype.forEach.call(elementList, function (e) {
                     e.classList.remove('clicked');
                  });
               }    
               e.target.parentElement.classList.add('clicked');
            }else{
               e.target.parentElement.classList.remove('clicked');
            }
         } else {
            if(!e.target.parentElement.parentElement.classList.contains('clicked')){
               if(option==true){
                  var elementList = document.querySelectorAll(elem +' .faq-list-item');
                  Array.prototype.forEach.call(elementList, function (e) {
                     e.classList.remove('clicked');
                  });
               }    
               e.target.parentElement.parentElement.classList.add('clicked');
            }else{
               e.target.parentElement.parentElement.classList.remove('clicked');
            }
         }
      }
   });
}

initAcc('.faq-list', true);


