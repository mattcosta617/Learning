const timer = document.getElementById("timer");

function time(a) {
for(let a = 100; a > 0; a --) {
    
    timer = timer.innerHtml(a);
}
}

time(100);