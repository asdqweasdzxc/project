class BUS extends DivObject{
    constructor(container, color, x, y, width, height, velX, velY, host){
        super(container, color, x, y, width, height, velX, velY);
        this.coll=false;
        console.log(host);
        this.host=host;
        this.kk=0;
    }

    tick(){        
        this.x=this.host.x+10;
        this.y=this.host.y-3;

        for(let i=0;i<wallArray.length;i++){
            for(let j=0;j<wallArray[i].length;j++){
                if(collisionCheck(this, wallArray[i][j])){
                    this.host.y=(wallArray[i][j].y+wallArray[i][j].height);
                    this.host.velY=0;
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
                if(collisionCheck(this, BSArray[i][1])){ //충돌하면
                    blockArray[i].y=(this.host.y-blockArray[i].height);
                    blockArray[i].velY=0;
                    if(collisionCheck(this, sensorArray[1])){
                        you.y=(this.host.y-you.height);
                        you.velY=0;
                    }
                }
            }
        }*/
        if(BSArray[index][1].coll && collisionCheck(this, sensorArray[1])){
            you.y=(this.host.y-you.height);
            you.velY=0;
        }else if(!BSArray[index][1].coll && collisionCheck(this, sensorArray[1])){
            this.host.y=you.y+you.height;
        }

    }

}