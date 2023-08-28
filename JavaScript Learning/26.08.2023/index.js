       
Departments = ['cse','it','mech','aids'];
    
Departments.forEach((ele,index) => {
    key={index}
const opt = document.createElement('ol');
opt.textContent = ele;
opt.value = ele;
//document.getElementById("branch").appendChild(index)
document.getElementById("branch").appendChild(opt)
})




const arr = [6,-5,7,-2,4,10,-1];
let sum = 0;

arr.forEach(ele => 
    {
        if(ele > 0) 
        {
        sum += ele;
        }
        }
    )
    document.getElementById('Sum').innerHTML  = sum;
console.log(arr);

// array map
console.log(arr.map(ele => ele+sum) );   

//arrat filter

console.log(arr.filter(ele => ele>0))

// array reducer

cost = [100,200,300,400,500,600];
console.log(cost.reduce((total,a)=> a+total));

// Letter Occurance

array = [
    ['a','b','c'],
    ['d','e','a'],
    ['b','f','g'],

];

console.log(array.flat());
