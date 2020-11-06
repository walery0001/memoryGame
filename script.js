// get Element
const container = document.querySelector('.container');
const imgDiv = document.querySelectorAll('.imgDiv');
// number fotos
const nrFotos = [1,2,3,4,5,6,7,8];
// mix nrFotos
let mixFotos = Math.floor(Math.random() * nrFotos.length +1);

//let myImg = document.createElement('img');
//myImg.src =  `foto/${mixFotos}.svg`
imgDiv[1].style.backgroundImage = 'url(foto/'+mixFotos+'.png)';

console.log(mixFotos);
// let newPic = document.createElement('img');
// newPic.src = 'foto/2.svg';
// console.log(imgDiv[1].appendChild(newPic))
