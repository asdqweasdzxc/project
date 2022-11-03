class BLS extends DivObject{
    constructor(container, color, x, y, width, height, velX, velY, host){
        super(container, color, x, y, width, height, velX, velY);
        this.coll=false;
        this.host=host;
    }
    
    //barArray[2]=new Sensor(document.body, "purple", mario.x-1, mario.y+2, 1, mario.height*(80/100));//좌
    tick(){
        this.x=this.host.x+3;
        this.y=this.host.y+10;
        
        for(let i=0;i<wallArray.length;i++){
            for(let j=0;j<wallArray[i].length;j++){
                if(collisionCheck(this, wallArray[i][j])){
                    this.host.x=wallArray[i][j].x+wallArray[i][j].width;
                    this.coll=true;
                }
            }
        }
        let index;
        for(let i=0;i<BSArray.length;i++){
            if(BSArray[i].indexOf(this)!=0){
                index=i;
                break;
            }
        }
        /*for(let i=0; i<BSArray.length;i++){
            if(index!=i){ //나와 다른 블럭의 센서와
                if(collisionCheck(this, BSArray[i][3])){ //충돌하면
                    blockArray[i].x=(this.host.x-blockArray[i].width);
                    blockArray[i].velX=0;
                    if(collisionCheck(this, sensorArray[3])){
                        you.x=(this.host.x-you.width);
                        you.velX=0;
                    }
                }
            }
        }*/
        if(BSArray[index][3].coll &&collisionCheck(this, sensorArray[3])){
            you.x=(this.host.x-you.width);
            you.velX=0;
        }else if(collisionCheck(this, sensorArray[3])){
            this.host.x=you.x+you.width;
        }

    }
}