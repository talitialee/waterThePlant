// Generate a random number for the thirst level and display it //
let thirstlevel = Math.floor((Math.random() * 21) + 5);


function thirstGenerator() {
  
  document.getElementById('thirst').innerHTML = thirstlevel;
 
  
}



// Change the image if too watery + message + change color //
function waterThePlant() {
  thirstlevel += 15;
  document.getElementById('thirst').innerHTML = thirstlevel;
  if (thirstlevel > 70) {
   fourthScene();     
  }
   
  else if (thirstlevel > 50) {
   thirdScene();
  }

  else if (thirstlevel > 30) {
    secondScene();
   }

   else if (thirstlevel <= 30) {
    firstScene();
   }
  
}



// One function per scene //



function firstScene() {
  document.getElementById('intro').innerHTML = "Hi there!<br> I'm Eddie the plant, water me if you like :)"; 
  document.getElementById('myPlant').src="resources/Plante1.png";
  document.body.style.backgroundColor = "var(--lightblue)";
  document.getElementById('credit').style.backgroundColor = "var(--green)";
  document.documentElement.style.setProperty('--firstAndLastKeyFrames', "#deffff"); 
  document.documentElement.style.setProperty('--secondKeyFrame', "#defee7"); 
  thirstlevel = 20;
  thirstGenerator();

} 

function secondScene() {
  document.getElementById('intro').innerHTML = "Wow thanks!<br>I could drink more!"; 
  document.getElementById('myPlant').src="resources/Plante2.png";
  document.body.style.backgroundColor = "var(--lightgreen)";
  document.getElementById('credit').style.backgroundColor = "var(--greenfooter)";
  document.documentElement.style.setProperty('--firstAndLastKeyFrames', "#defee7"); 
  document.documentElement.style.setProperty('--secondKeyFrame', "#f3fed6");
} 

function thirdScene() {
  document.getElementById('intro').innerHTML = "Gloups...<br>"; 
  document.getElementById('myPlant').src="resources/Plante3.png";
  document.body.style.backgroundColor = "var(--lightyellow)";
  document.getElementById('credit').style.backgroundColor = "var(--darkyellow)";
  document.documentElement.style.setProperty('--firstAndLastKeyFrames', "#f3fed6"); 
  document.documentElement.style.setProperty('--secondKeyFrame', "#e0f4ad");
} 

function fourthScene() {
  document.getElementById('intro').innerHTML = "AaAaaAargh whyYyYyy human whyyyy?!<br>"; 
  document.getElementById('myPlant').src="resources/Plante4.png";
  document.body.style.backgroundColor = "var(--lightred)";
  document.getElementById('credit').style.backgroundColor = "var(--darkred)";
  document.documentElement.style.setProperty('--firstAndLastKeyFrames', "#e0f4ad"); 
  document.documentElement.style.setProperty('--secondKeyFrame', "#fed5d5");
} 
