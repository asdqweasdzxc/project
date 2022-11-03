class BLS extends DivObject{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, color, x, y, width, height, velX, velY);
        this.coll=false;
    }
    
    //barArray[2]=new Sensor(document.body, "purple", mario.x-1, mario.y+2, 1, mario.height*(80/100));//좌
    tick(){
        this.coll=false;
        this.x=blockArray[0].x;
        this.y=blockArray[0].y+10;
        
        for(let i=0;i<wallArray.length;i++){
            for(let j=0;j<wallArray[i].length;j++){
                if(collisionCheck(this, wallArray[i][j])){
                    blockArray[0].x=wallArray[i][j].x+wallArray[i][j].width;
                    this.coll=true;
                }
            }
        }        
        if(BSArray[0][3].coll &&collisionCheck(this, sensorArray[3])){
            you.x=(blockArray[0].x-you.width);
            you.velX=0;
        }else if(!BSArray[0][3].coll &&collisionCheck(this, sensorArray[3])){
            blockArray[0].x=you.x+you.width;
        }

    }
}