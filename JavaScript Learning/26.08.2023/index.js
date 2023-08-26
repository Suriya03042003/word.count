       
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
        sum += ele;s
        }
        }
    )
    document.getElementById('Sum').innerHTML  = sum;