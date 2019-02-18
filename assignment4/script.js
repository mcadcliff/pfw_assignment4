var churchill = {name: “Winston Churchill”, 
                       year: 1940, 
                       bce: false};

var ghandi = {name: “Ghandi”,
                 year: 1942, 
                 bce: false}; 

var demosthenes = {name: “Demosthenes”,
       	                year: 342, 
                        bce: true};
//object of speeches//


var speeches = [churchill, ghandi, demosthenes];
//array of speech objects//

 
var difference = (ghandi.year - churchill.year);
// difference between speeches in years//

window.onload = function()
{console.log(“Ghandi and Churchill’s speeches are “ + difference + “ years apart.”);};
//difference between speeches in years//

document.getElementById('BtnDonate').addEventListener('click', function(){ 
console.log ("There are " + speeches.length + "speeches on this page.")});
 //Code in here executes when the user clicks the "Donate" button.


document.getElementById('BtnChurchill').addEventListener('click', function(){
console.log ("This speech was written by " + churchill.name + " in" + churchill.year + ".")
("It is " + churchill.bce + " that this year is B.C.E.")});
 //Code in here executes when the user clicks the "Churchill" button.


document.getElementById('BtnGhandi').addEventListener('click', function(){
console.log ("This speech was written by " + ghandi.name + " in" + ghandi.year + ".")
("It is " + ghandi.bce + " that this year is B.C.E.")});
  //Code in here executes when the user clicks the "Ghandi" button.


document.getElementById('BtnDemosthenes').addEventListener('click', function(){
console.log ("This speech was written by " + demosthenes.name + " in" + demosthenes.year + ".")
("It is " + demosthenes.bce + " that this year is B.C.E.")});
  //Code in here executes when the user clicks the "Demosthenes" button.
