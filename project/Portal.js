class Portal extends ImgObject{
    constructor(container, src, x, y, width, height, velX, velY, move){
        super(container, src, x, y, width, height, velX, velY);
        this.move=move;
        this.degree=0;
        
    }

    render(){
        this.degree++;
        this.img.style.transform="rotate("+this.degree+"deg)";
        let result=collisionCheck(this, you);
        if(result){
            you.y+=this.move;
            map.y-=this.move;
            
        }
    }
}