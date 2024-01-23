let str = "";
let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".buttonbox");
buttons.forEach(function(button){
    button.addEventListener("click", function(dets){
        if (dets.target.innerHTML == "=") {
            try{
                str = eval(str);
                display.innerHTML = str;
            }catch(error){
                str = "Error";
                display.innerHTML = str;
            }
            
        }
        else if (dets.target.innerHTML == "C") {
            str = "";
            display.innerHTML = str;
        }
        else if (dets.target.innerHTML == "DEL") {
            str = str.slice(0, -1);
            display.innerHTML = str;
        }
        else{
            str = str + dets.target.innerHTML;
            display.innerHTML = str;
        }
    })
})