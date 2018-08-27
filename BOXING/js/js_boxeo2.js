class Hand{
    constructor(pX,pY,img){
        this.pX = pX;
        this.pY = pY;
        this.img = img;
    }
    printH(m,n) {
        ctx.drawImage(this.img,this.pX + m,this.pY + n);
    }
   
}