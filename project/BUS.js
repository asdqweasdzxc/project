class BUS extends DivObject{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, color, x, y, width, height, velX, velY);
        this.coll=false;
    }

    tick(){        
        this.coll=false;
        this.x=blockArray[0].x+10;
        this.y=blockArray[0].y;

        for(let i=0;i<wallArray.length;i++){
            for(let j=0;j<wallArray[i].length;j++){
                if(collisionCheck(this, wallArray[i][j])){
                    blockArray[0].y=(wallArray[i][j].y+wallArray[i][j].height);
                    blockArray[0].velY=0;
                    this.coll=true;
                }
            }
        }
        if(BSArray[0][1].coll && collisionCheck(this, sensorArray[1])){
            you.y=(blockArray[0].y-you.height);
            you.velY=0;
        }else if(!BSArray[0][1].coll && collisionCheck(this, sensorArray[1])){
            blockArray[0].y=you.y+you.height;
        }

    }

}