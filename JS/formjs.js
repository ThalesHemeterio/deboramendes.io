
				//variables
				var i=0;
				var images = [];
				var time = 2000;

				//images

				images[0] = 'images/baby1.jpg';
				images[1] = 'images/couple4.jpg';
				images[2] = 'images/baby2.jpg';
				images[3] = 'images/couple5.jpg';

				//change images

				function changeImg(){
					document.slide.src = images [i];
	
					if(i < images.length - 1){
						i++;
					} else{
						i=0;
					}
	
					setTimeout("changeImg()", time);
	
				}
	
				window.onload = changeImg;
				
				
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10){
	dd='0'+dd
} 
if(mm<10){
	mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date").setAttribute("min", today);

function myFunction() {
  alert("The form was submitted, we are going to enter in contact soon, Thanks!");
};

