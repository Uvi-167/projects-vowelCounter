var Vowelscount = document.getElementById("Vowelscount");

function countvowels(str){
    str = str.toLowerCase();

    let vowelsarray = ["a","e","i","o","u"], 
        counter = 0;

        for(let letter of str){
            if (vowelsarray.includes(letter)){
                counter++;
                Vowelscount.classList.add("blink");
            }else{
                Vowelscount.classList.remove("blink");
            }

        }

        Vowelscount.innerHTML = counter;

}