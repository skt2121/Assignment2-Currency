 var request = new XMLHttpRequest();
 request.open('GET', 'http://api.countrylayer.com/v2/currency/inr?access_key=4c677a530b3a49b2d1eb414ef535d11e');
 request.send();
 request.onload = function(){
    var data = JSON.parse(this.response);
    
    console.log(data);
    
  } 


 