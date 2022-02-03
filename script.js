/* <canvas id="gc" width="400" height="400"></canvas>
// <script> */
window.onload= function(){
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
    this.scorediv = document.getElementById("score");
}
px=py=10; //player positions
gs=tc=20; //grid size && tile count
ax =ay = 15; //apple x and apple y which is our goal.
xv=yv=0; //x-velocity && y-velocity
trail = [];
tail = 5;
function game(){
    px += xv;
    py += yv;
    if (px <0){
        px = tc-1;
    }
    if (px>tc-1){
        px = 0;
    }
    if (py<0){
        py = tc-1;
    }
    if (py>tc-1){
        py = 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0, canv.width, canv.height);

    ctx.fillStyle="lime";
    for (var i =0; i<trail.length; i++){
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs, gs-
        2, gs-2);
        if (trail[i].x==px && trail[i].y==py){
        tail = 5;
        }
    }
    trail.push({x:px, y:py});
    while(trail.length>tail) {
    trail.shift();
    }
    this.scorediv.innerHTML = "Score : " + (tail -5);

    if (ax == px && ay == py) {
        tail++;
        ax = Math.floor(Math.random()*tc)
        ay = Math.floor(Math.random()*tc)
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}

// 37-40,,,Arrow keys .. left then clockwise
function keyPush(evt){
    switch(evt.keyCode) {
        // keyboard keys codes
        case 37:
            xv = -1; yv = 0;
            break;
        case 38:
            xv = 0; yv = -1;
            break;
        case 39:
             xv = 1; yv = 0;
            break;
        case 40:
            xv = 0; yv = 1;
            break;
    }
}

// // left key
// function l() {
//     if(ax === 0) {
//       ax = -grid;
//       ay = 0;
//     }
//   }

//   // up key
//   function u() {
//     if(ay === 0) {
//       ay = -grid;
//       ax = 0;
//     }
//   }

//   // right key 
//   function r() {
//     if(ax === 0) {
//       ax = grid;
//       ay = 0;
//     }
//   }
//   // down key 
//   function d() {
//     if(ay === 0) {
//       ay = grid;
//       ax = 0;
//     }
//   }