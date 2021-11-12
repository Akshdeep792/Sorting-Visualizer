

const array = document.getElementById("array"); 
var barDiv = document.getElementById("bar");        
let arr = [];

for(var i = 0 ; i<100 ; i++){
    
    var bars = Math.ceil(Math.random() * 100) + 1;
    arr.push(bars);
}


array.addEventListener("click", function() {
    for(var i = 0 ; i<100 ; i++){
        var div = document.createElement("div");
        div.classList.add("bar");
        div.style.height = `${arr[i]*5}px`;
        barDiv.appendChild(div);
    }
})

