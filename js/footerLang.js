//value change event
//https://www.netflix.com/kr-en/

function changeLang () {
   if(document.getElementById('language').value == "english") {
      document.location = "https://www.netflix.com/kr-en/";
   } else {
      document.location = "https://www.netflix.com/kr/";
   }
      

}