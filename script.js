function convert(){
        let text = document.getElementById("input").value;
        let ne = text.trim();
        let wc = ne.split(" ");
        let count = 0;
        for(let i=0;i<wc.length;i++)
        {
                count++;
        }

        let result = document.getElementById("result");
        result.innerHTML = count +" words";
        }
