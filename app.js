var t = document.getElementById("time");
var d = document.getElementById("date");

function runs(){
    let time = new Date();
    let s = time.toLocaleTimeString();
    let p = time.toLocaleDateString();
    t.innerHTML = s;
    d.innerHTML = p;
}

let running = setInterval(runs,1000);