class Button extends ImgObject{
    constructor(container, src, x, y, width, height, velX, velY){
        super(container, src, x, y, width, height, velX, velY);
        this.flag=false;
    }
    render(){

        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        let result= (this.x==blockArray[0].x) && (this.y==blockArray[0].y);
        if(result){
            this.flag=true;
            this.img.src="../images/button2.png";
        }

    }
}