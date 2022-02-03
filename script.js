window.onload= function(){
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
}

xv = yv =0;
function game(){

}

px=py=10; //player positions
gs=tc=20; //grid size && tile count
ax =ay = 15; //apple x and apple y which is our goal.
xv=yv=0; //x-velocity && y-velocity
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