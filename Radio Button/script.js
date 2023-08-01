function convert(){
const Buttons = document.querySelectorAll('input[name="qualify"]');
for(const radioButton of Buttons){
radioButton.addEventListener('change',()=> {
 console.log('hello');
 let selected = radioButton.value;
 let option = document.getElementById('output')
 if((selected=='Under Graduate')||(selected=='Diploma'))
 {
    output.innerHTML = 'You are Eligible for JOB'
 }
 else
 output.innerHTML = 'You are not Eligible for JOB'
})
}      
} 
