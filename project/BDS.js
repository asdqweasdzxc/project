class BDS extends DivObject{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, color, x, y, width, height, velX, velY);
        this.coll=false;
    }

    tick(){     
        this.coll=false;
        this.x=blockArray[0].x+10;
        this.y=blockArray[0].y+blockArray[0].height-5;
        
        for(let i=0;i<wallArray.length;i++){
            for(let j=0;j<wallArray[i].length;j++){
                if(collisionCheck(this, wallArray[i][j])){
                    blockArray[0].y=(wallArray[i][j].y - blockArray[0].height);
                    blockArray[0].velY=0;
                    this.coll=true;
                }
            }
        }
        /*for(let i=0; i<blockArray.length;i++){
            for(let j=0; j<blockArray.length;j++){
                if(i!=j){

                }
            }
        }*/

        if(BSArray[0][0].coll &&collisionCheck(this, sensorArray[0])){
            you.y=(blockArray[0].y+blockArray[0].height);
            you.velY=0;
        }else if(!BSArray[0][0].coll &&collisionCheck(this, sensorArray[0])){ //나와의 충돌체크
            blockArray[0].y=you.y-blockArray[0].height;
        }

    }
}