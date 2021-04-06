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
const openState = new Boolean(false);
const faq = document.querySelector('.faq-item');
console.log(faq);

function openFaqList(event) {
   console.log(event);

}

function init() {
   faq.addEventListener("click", openFaqList);

   
   
}
init();