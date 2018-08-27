var ctx;
var golpeP1 = document.getElementById("golpeP1");
var golpeP2 = document.getElementById("golpeP2");
var btn1 = [87,83,65,68,70,71,72];
var btn2 = [38,40,37,39,80,79,73];

var img = new Image(); var imgh1 = new Image(); var imgh2 = new Image(); var img2 = new Image(); var img2h1 = new Image(); var img2h2 = new Image();
img.src = "css/img/player1/player1.png"; imgh1.src = "css/img/player1/brazod.png"; imgh2.src = "css/img/player1/brazoz.png";
img2.src = "css/img/player2/player2.png"; img2h1.src = "css/img/player2/brazod.png"; img2h2.src = "css/img/player2/brazoz.png";

var player1 = new Player(200,250,img,imgh1,imgh2,90,77,btn1);
var player2 = new Player(500,250,img2,img2h1,img2h2,-37,77,btn2);

function iniciar() {
    ctx.clearRect(0,0,800,600);
    ctx.fillRect(80,80,player1.life,10);
    ctx.fillStyle = "#00FF3B";
    ctx.fillRect(700,80,-player2.life,10);
    ctx.fillStyle = "#00FF3B";
    if (!(player1.pX < player2.pX + 100 && player1.pX + 100 > player2.pX && player1.pY < player2.pY + 100 && player1.pY + 100 > player2.pY)) {
        player1.cup = true;
        player1.cdown = true;
        player1.cleft = true;
        player1.cright = true;
        player2.cup = true;
        player2.cdown = true;
        player2.cleft = true;
        player2.cright = true;
    }
    if (player1.up) {
        if (player1.pY != 0) {
            if (player1.cup) {
                player1.pY -= player1.v;
                player1.hand1.pY -= player1.v;
                player1.hand2.pY -= player1.v;
                if ((player1.pX < player2.pX + 100 && player1.pX + 100 > player2.pX && player1.pY < player2.pY + 100 && player1.pY + 100 > player2.pY) && player1.cdown && player1.cleft && player1.cright) {
                    player1.cup = false;
                    player2.cdown = false;
                }
            }
        }
    } else if (player1.down) {
        if (player1.pY + 100 != 600) {
            if (player1.cdown) {
                player1.pY += player1.v;
                player1.hand1.pY += player1.v;
                player1.hand2.pY += player1.v;
                if ((player1.pX < player2.pX + 100 && player1.pX + 100 > player2.pX && player1.pY < player2.pY + 100 && player1.pY + 100 > player2.pY) && player1.cup && player1.cleft && player1.cright) {
                    player1.cdown = false;
                    player2.cup = false;
                }
            }
       
        }
    }
    if (player1.left) {
        if (player1.pX != 0) {
            if (player1.cleft) {
                player1.pX -= player1.v;
                player1.hand1.pX -= player1.v;
                player1.hand2.pX -= player1.v; 
            if ((player1.pX < player2.pX + 100 && player1.pX + 100 > player2.pX && player1.pY < player2.pY + 100 && player1.pY + 100 > player2.pY) && player1.cup && player1.cdown && player1.cright) {
                player1.cleft = false;
                player2.cright = false;
                }
            }
        }
    } else if (player1.right) {
        if (player1.pX + 100 != 800) {
            if (player1.cright) {
                player1.pX += player1.v;
                player1.hand1.pX += player1.v;
                player1.hand2.pX += player1.v;
                if ((player1.pX < player2.pX + 100 && player1.pX + 100 > player2.pX && player1.pY < player2.pY + 100 && player1.pY + 100 > player2.pY) && player1.cup && player1.cleft && player1.cdown) {
                    player1.cright = false;
                    player2.cleft = false;  
                }
            }       
        } 
    }
    if (player1.punchL) {
        player1.printP(20,0,0,0);
        if (player1.cpunch) {
            if (player2.block) {
                player1.cpunch = false;
            } else if ((player1.hand1.pX < player2.pX + 100 && player1.hand1.pX + 50 > player2.pX && player1.hand1.pY < player2.pY + 100 && player1.hand1.pY + 50 > player2.pY)) {
                golpeP1.play();
                player2.life -= 10;
                player1.cpunch = false;
                if (player2.life == 0) {
                    gameover();
                    perdedor2();
                }
            }
        }
    } else if (player1.punchR) {
        player1.printP(0,0,20,0);
        if (player1.cpunch) {
            if (player2.block) {
                player1.cpunch = false;
            } else if ((player1.hand2.pX < player2.pX + 100 && player1.hand2.pX + 50 > player2.pX && player1.hand2.pY < player2.pY + 100 && player1.hand2.pY + 50 > player2.pY)) {
                golpeP1.play();
                player2.life -= 10;
                
                player1.cpunch = false;
                if (player2.life == 0) {
                    gameover();
                    perdedor2();
                }
                
            }
        }
    } else if (player1.block) {
        player1.printP(15,35,15,-35);
    } else{player1.printP(0,0,0,0);}
    if (player2.up) {
        if (player2.pY != 0) {
            if (player2.cup) {
                player2.pY -= player2.v;
                player2.hand1.pY -= player2.v;
                player2.hand2.pY -= player2.v;
                if ((player1.pX < player2.pX + 100 && player1.pX + 100 > player2.pX && player1.pY < player2.pY + 100 && player1.pY + 100 > player2.pY) && player2.cdown && player2.cleft && player2.cright) {
                    player2.cup = false;
                    player1.cdown = false;
                }
            }
        }
    } else if (player2.down) {
        if (player2.pY + 100 != 600) {
            if (player2.cdown) {
                player2.pY += player2.v;
                player2.hand1.pY += player2.v;
                player2.hand2.pY += player2.v;
                if ((player1.pX < player2.pX + 100 && player1.pX + 100 > player2.pX && player1.pY < player2.pY + 100 && player1.pY + 100 > player2.pY) && player2.cup && player2.cleft && player2.cright) {
                    player2.cdown = false;
                    player1.cup = false;
                }
            } 
        }
    }
    if (player2.left) {
        if (player2.pX != 0) {
            if (player2.cleft) {
                player2.pX -= player2.v;
                player2.hand1.pX -= player2.v;
                player2.hand2.pX -= player2.v;
                if ((player1.pX < player2.pX + 100 && player1.pX + 100 > player2.pX && player1.pY < player2.pY + 100 && player1.pY + 100 > player2.pY) && player2.cdown && player2.cup && player2.cright) {
                    player2.cleft = false;
                    player1.cright = false;
                }
            }   
        }
    } else if (player2.right) {
        if (player2.pX + 100 != 800){
            if (player2.cright) {
                player2.pX += player2.v;
                player2.hand1.pX += player2.v;
                player2.hand2.pX += player2.v;
                if ((player1.pX < player2.pX + 100 && player1.pX + 100 > player2.pX && player1.pY < player2.pY + 100 && player1.pY + 100 > player2.pY) && player2.cdown && player2.cleft && player2.cup) {
                    player2.cright = false;
                    player1.cleft = false;
                }
            }
        }
    }
    if (player2.punchL) {
        player2.printP(-20,0,0,0);
        if (player2.cpunch) {
            if (player1.block) {
                player2.cpunch = false;
            } else if ((player1.pX < player2.hand1.pX + 52 && player1.pX + 100 > player2.hand1.pX && player1.pY < player2.hand1.pY + 52 && player1.pY + 100 > player2.hand1.pY)) {
                golpeP2.play();
                player1.life -= 10;
                
                player2.cpunch = false;
                if (player1.life == 0) {
                    gameover();
                    perdedor1();
                }
            }
        }
    } else if (player2.punchR) {
        this.player2.printP(0,0,-20,0);
        if (player2.cpunch) {
            if (player1.block) {
                player2.cpunch = false;
            } else if ((player1.pX < player2.hand2.pX + 50 && player1.pX + 100 > player2.hand2.pX && player1.pY < player2.hand2.pY + 50 && player1.pY + 100 > player2.hand2.pY)) {
                golpeP2.play();
                player1.life -= 10;
                
                player2.cpunch = false;
                if (player1.life == 0) {
                    gameover();
                    perdedor1();
                }
            }
        }
    } else if (player2.block) {
        player2.printP(-15,35,-15,-35);
    } else{player2.printP(0,0,0,0);}
    
    requestAnimationFrame(iniciar);
}
function keyD(e) {
    if (e.keyCode == player1.btn[0]) {
        player1.up = true;
    } else if (e.keyCode == player1.btn[1]) {
        player1.down = true;
    }

    if (e.keyCode == player1.btn[2]) {
        player1.left = true;
    } else if (e.keyCode == player1.btn[3]) {
        player1.right = true;
    }
    if (e.keyCode == player1.btn[4]) {
        player1.punchL = true;
        
    } else if (e.keyCode == player1.btn[5]) {
        player1.punchR = true;
    }
    if (e.keyCode == player1.btn[6]) {
        player1.block = true;
    }
    if (e.keyCode == player2.btn[0]) {
        player2.up = true;
    } else if (e.keyCode == player2.btn[1]) {
        player2.down = true;
    }
    if (e.keyCode == player2.btn[2]) {
        player2.left = true;
    } else if (e.keyCode == player2.btn[3]) {
        player2.right = true;
    }
    if (e.keyCode == player2.btn[4]) {
        player2.punchL = true;
    } else if (e.keyCode == player2.btn[5]) {
        player2.punchR = true;
    }
    if (e.keyCode == player2.btn[6]) {
        player2.block = true;
    }
}
function keyU(e) {
    if (e.keyCode == player1.btn[0]) {
        player1.up = false;
    } else if (e.keyCode == player1.btn[1]) {
        player1.down = false;
    }
    if (e.keyCode == player1.btn[2]) {
        player1.left = false;
    } else if (e.keyCode == player1.btn[3]) {
        player1.right = false;
    }
    if (e.keyCode == player1.btn[4]) {
        player1.punchL = false;
        player1.cpunch = true;
    } else if (e.keyCode == player1.btn[5]) {
        player1.punchR = false;
        player1.cpunch = true;
    }
    if (e.keyCode == player1.btn[6]) {
        player1.block = false;
        player1.cpunch = true;
    }
    if (e.keyCode == player2.btn[0]) {
        player2.up = false;
    } else if (e.keyCode == player2.btn[1]) {
        player2.down = false;
    }
    if (e.keyCode == player2.btn[2]) {
        player2.left = false;
    } else if (e.keyCode == player2.btn[3]) {
        player2.right = false;
    }
    if (e.keyCode == player2.btn[4]) {
        player2.punchL = false;
        player2.cpunch = true;
    } else if (e.keyCode == player2.btn[5]) {
        player2.punchR = false;
        player2.cpunch = true;
    }
    if (e.keyCode == player2.btn[6]) {
        player2.block = false;
        player2.cpunch = true;
    }
}
document.addEventListener("keydown",keyD,false);
document.addEventListener("keyup",keyU,false);

