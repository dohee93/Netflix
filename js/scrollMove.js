const screenH = document.documentElement.clientHeight;

const card01Top = document.getElementById('card-01').offsetTop;
const card02Top = document.getElementById('card-02').offsetTop;
const card03Top = document.getElementById('card-03').offsetTop;
const cardText = document.getElementsByClassName('story-card-text');
const cardImg = document.getElementsByClassName('story-card-img');

function scrollMove(){
   
   window.addEventListener('scroll', function(){
      var scrollPos = document.documentElement.scrollTop;
      console.log(scrollPos);
      if(scrollPos > card01Top - screenH) {
         cardText[0].classList.add('move');
         cardImg[0].classList.add('show');
      } 
      if (scrollPos > card02Top - screenH) {
         cardText[1].classList.add('move');
         cardImg[1].classList.add('show');
      } 
      if(scrollPos > card03Top - screenH) {
         cardText[2].classList.add('move');
         cardImg[2].classList.add('show');
      } 
   });
   
}

function init() {
   scrollMove();
}
init();