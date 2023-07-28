function convert(){
        let text = document.getElementById("input").value;
        let input = text.toLowerCase();
        let arr = input.split("").reverse().join("");
        let result = document.getElementById("result");
        if(input == arr){
                result.innerHTML = "Yes its a Palindrome";
        }
        else
        {
                result.innerHTML = "Not a Palindrome";     
        }
        }
