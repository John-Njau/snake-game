window.onload= function(){
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
}

xv = yv =0;
function game(){

}

//player positions

// 37-40,,,Arrow keys .. left then clockwise
function keyPush(evt){
    switch(evt.keyCode) {
        case 37:
            xv = 1; yv = 0;
            break;
        case 38:
            xv = 0; yv = 1;
            break;
        case 39:
             xv = 1; yv = 0;
            break;
        case 40:
            xv = 0; yv = 1;
            break;
    }
}