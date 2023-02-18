function convertCelcius (){
    var celcius = document.getElementById("user-input").value;
    var check = isNaN(celcius);
    var converted = (celcius*1.8)+32;
    if (check === true){
       document.getElementById("result").innerHTML="Please enter a numerical value";
    }else if (celcius === ""){
      document.getElementById("result").innerHTML="You cannot continue without a value"
    }
    else {document.getElementById("result").innerHTML=`${celcius}°C converted into fahrenheit is ${converted}°F`;         
 }
 }
 function convertFahrenheit (){
    var fahrenheit = document.getElementById("user-input").value;
    var check = isNaN(fahrenheit);
    var converted = (fahrenheit-32)/1.8;
    if (check === true){
       document.getElementById("result").innerHTML="Please enter a numerical value"
    } else if(fahrenheit === ""){
      document.getElementById("result").innerHTML="You cannot continue without a value"
    }
    else { 
       document.getElementById("result").innerHTML=`${fahrenheit}°F converted into celcius is ${converted}°C`
    }
 }