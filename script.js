// get Element
const container = document.querySelector('.container');
let imgDiv = document.querySelectorAll('.imgDiv');
const timerOut = document.getElementById('timerOut');
//nodelist to array
let newImgDiv = [...imgDiv]
// number fotos
const nrFotos = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];

// mix and add Fotos
  function addNr(){
   newImgDiv.forEach(e=>{
    const mixFotos = Math.floor(Math.random() * nrFotos.length);
   e.style.backgroundImage = `url(foto/${(nrFotos[mixFotos])}.png)`;
   nrFotos.splice(mixFotos,1);
      })
  }
  addNr()
 //time out background off
 let timer = 2;

 let turnOff = setInterval(function(){
timer--;
timerOut.innerHTML = timer;
if(timer === 0){
	backgroundWhite()

	clearInterval(turnOff)
}
 },1000);

 //make background all white
function backgroundWhite(){
	newImgDiv.forEach(e=>{
			e.classList.add('coverImg');	
				})
}
//click and show background
/*function showBg(){
  newImgDiv.forEach(e=> {
    e.addEventListener('click', (e)=>{
           e.target.classList.remove('coverImg');
          })
  })
}
showBg();*/
 function shortTime(){
	newImgDiv.forEach(e=>{
			e.target.classList.add('coverImg');	
			console.log('sdsd')
				})
}
//timer short 3 sec
function go(){
 setTimeout(function shortTimer(){ 
 	shortTime();
  //backgroundWhite();
},3000);
}
//same pictures

let  clicks = [];
function inArray(){
  newImgDiv.forEach(e=> {
    e.addEventListener('click', (e)=>{
   

    	if(clicks.length === 0){
    		
    		clicks[0] = e.target
    		clicks[0].classList.remove('coverImg');

 		
    	}else{
    		clicks[1] = e.target;
    		e.target.classList.remove('coverImg');
    		//this.removeEventListener('click',inArray)
    		shortTime()
  newImgDiv.forEach(e=> 
    e.removeEventListener('click', e))
    		if(clicks[0].style.backgroundImage === clicks[1].style.backgroundImage){
    			
    			clicks[0].setAttribute('style','background:green')
    			clicks[1].setAttribute('style','background:green')

    			
    		}
    		
    	}    

          })
    
  })
}
inArray();



