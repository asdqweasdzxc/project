class BRS extends DivObject{
    constructor(container, color, x, y, width, height, velX, velY, host){
        super(container, color, x, y, width, height, velX, velY);
        this.coll=false;
        this.host=host;
    }

    //barArray[3]=new Sensor(document.body, "purple", mario.x+mario.width+1, mario.y+2, 1, mario.height*(80/100));//우
    tick(){
        this.x=this.host.x+this.host.width-3;
        this.y=this.host.y+10;

        for(let i=0;i<wallArray.length;i++){
            for(let j=0;j<wallArray[i].length;j++){
                if(collisionCheck(this, wallArray[i][j])){
                    this.host.x=wallArray[i][j].x- this.host.width;
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
        }/*
        for(let i=0; i<BSArray.length;i++){
            if(index!=i){ //나와 다른 블럭의 센서와
                if(collisionCheck(this, BSArray[i][2])){ //충돌하면
                    blockArray[i].x=(this.host.x+this.host.width);
                    blockArray[i].velX=0;
                    if(collisionCheck(this, sensorArray[2])){
                        you.x=(this.host.x+this.host.width)+1;
                        you.velX=0;
                    }
                }
            }
        }*/
        if(BSArray[index][2].coll &&collisionCheck(this, sensorArray[2])){
            you.x=(this.host.x+this.host.width);
            you.velX=0;
        } else if(collisionCheck(this, sensorArray[2])){
            this.host.x=you.x-this.host.width;
        }
        
    }
}