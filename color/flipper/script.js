const colorchange = document.querySelector('#flipper');
const wrap = document.querySelector('#wrap');
const button = document.querySelector('#btn');
let hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

button.addEventListener('click',()=>{
    let flip = "#";
    for(let i=0;i<6;i++){
         flip = flip + hex[(Math.floor(Math.random()*16))];
         }
    wrap.style.backgroundColor = flip;
    colorchange.innerHTML = flip;
    console.log(flip);
})

