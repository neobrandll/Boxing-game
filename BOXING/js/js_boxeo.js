class Player{
    constructor(pX,pY,img,imgh1,imgh2,w,h,btn){
        this.pX = pX;
        this.pY = pY;
        this.img = img;
        this.hand1 = new Hand(this.pX + w,this.pY - 30,imgh1);
        this.hand2 = new Hand(this.pX + w,this.pY + h,imgh2);
        this.btn = btn;
        this.up = false;
        this.left = false;
        this.down = false;
        this.right = false;
        this.cup = true;
        this.cdown = true;
        this.cleft = true;
        this.cright = true;
        this.punchL = false; //punchLeft
        this.punchR = false; //punchRight
        this.cpunch = true;
        this.block = false;
        this.v = 5;
        this.life = 100;
    }
    printP(m, n, m2, n2){
        ctx.drawImage(this.img,this.pX,this.pY);
        this.hand1.printH(m,n);
        this.hand2.printH(m2,n2);
    }
    
}

