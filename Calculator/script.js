function answer(){
    let string = document.getElementById("input").value
    let  i = 0;
    let symbol ='';
     while(true){
        if(string[i]=='+' || string[i]=='-' || string[i]=='/' || string[i]=='*' || string[i]=='%')
        {
         symbol = string[i]
        break;
        }
        else
        {
         i++;
        }
     }; 
    let values = string.split(symbol)
    let operand1 = Number(values[values.length - 2])
    let operand2 = Number(values[values.length - 1])
    let result = 0;
    switch(symbol)
    {
        case '+':
        result = operand1 + operand2;
        break;
        case '-':
        result = operand1 - operand2;
        break;
        case '*':
        result = operand1 * operand2;
        break;
        case '/':
        result = operand1 / operand2;
        break;
        case '%':
        result = operand1 % operand2;
        break;
    }
  input.value = result;
  console.log(result)
}
