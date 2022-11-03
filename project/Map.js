class Map extends DivObject{

    tick(){
        if(this.y<-OBJECT_SIZE*9){
            this.y=-OBJECT_SIZE*9;
        } else if(this.y>0){
            this.y=0;
        } else{
            this.y=this.y+this.velY;
        }
        if(this.x>0){
            this.x=0;
        } else if(this.x<-OBJECT_SIZE*11){
            this.x=-OBJECT_SIZE*11;
        } else{
            this.x=this.x+this.velX;
        }


        }
    
}