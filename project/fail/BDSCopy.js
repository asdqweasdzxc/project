class BDS extends DivObject{
    constructor(container, color, x, y, width, height, velX, velY, host){
        super(container, color, x, y, width, height, velX, velY);
        this.coll=false;
        this.host=host;
    }

    tick(){     
        
        this.x=this.host.x+10;
        this.y=this.host.y+this.host.height-3;
        
        for(let i=0;i<wallArray.length;i++){
            for(let j=0;j<wallArray[i].length;j++){
                if(collisionCheck(this, wallArray[i][j])){
                    this.host.y=(wallArray[i][j].y - this.host.height);
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
                if(collisionCheck(this, BSArray[i][0])){ //충돌하면
                    blockArray[i].y=(this.host.y+this.host.height);
                    blockArray[i].velY=0;
                    if(collisionCheck(this, sensorArray[0])){
                        you.y=(this.host.y+this.host.height);
                        you.velY=0;
                    }
                }
            }
        }*/
        if(BSArray[index][0].coll &&collisionCheck(this, sensorArray[0])){ //벽과 충돌하고, 나와 충돌할때,
            you.y=(this.host.y+this.host.height);
            you.velY=0;
        }else if(!BSArray[index][0].coll &&collisionCheck(this, sensorArray[0])){ //벽과 충돌하지 않고, 나와는 충돌하지 않을 때
            this.host.y=you.y-this.host.height;
        }

    }
}