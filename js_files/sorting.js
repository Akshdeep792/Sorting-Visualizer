

const array = document.getElementById("array");     
let arr = [];

for(var i = 0 ; i<100 ; i++){

    var bars = (Math.random() * 100) + 1;
    arr.push(bars);
}


array.addEventListener("click", function() {
    for(var i = 0 ; i<100 ; i++){
        var div = document.createElement("div");
        div.classList.add("bar");
        div.style.height = `${arr[i]}px`;
        document.body.appendChild(div);
    }
})

