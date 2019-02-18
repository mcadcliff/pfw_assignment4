var theirFinestHour = {name: “Winston Churchill”, 
                       year: “1940”, 
                       bce: “false”,}

var quitIndia = {name: “Ghandi”,
                 year: “1942”, 
                 bce: “false”,} 

var theThirdPhilippic = {name: “Demosthenes”,
       	                year: “342”, 
                        bce: “true”,}
//object of speeches//


speeches = [theirFinestHour, quitIndia, theThirdPhilippic];
//array of speeches’ objects//

 
var difference = (quitIndia.year - theirFinestHour.year);
console.log (“Ghandi and Churchill’s speeches are “ + difference + “ years apart.”);
// difference between speeches’ years//


document.getElementById('BtnDonate').addEventListener('click', function(){ 
});
console.log ("There are " + speeches.length + "speeches on this page.")
 //Code in here executes when the user clicks the "Donate" button.


document.getElementById('BtnChurchill').addEventListener('click', function(){
});
console.log ("This speech was written by " + theirFinestHour + " in" + year + ".")("It is " + bce + " that this year is B.C.E.")
 //Code in here executes when the user clicks the "Churchill" button.


document.getElementById('BtnGhandi').addEventListener('click', function(){
});
console.log ("This speech was written by " + quitIndia + " in" + year + ".")("It is " + bce + " that this year is B.C.E.")
  //Code in here executes when the user clicks the "Ghandi" button.


document.getElementById('BtnDemosthenes').addEventListener('click', function(){
});
console.log ("This speech was written by " + theThirdPhilippic + " in" + year + ".")("It is " + bce + " that this year is B.C.E.")
  //Code in here executes when the user clicks the "Demosthenes" button.
