class LeftSensor extends DivObject{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, color, x, y, width, height, velX, velY);
    }
    
    //barArray[2]=new Sensor(document.body, "purple", mario.x-1, mario.y+2, 1, mario.height*(80/100));//좌
    tick(){
        this.x=you.x;
        this.y=you.y+10;
        
        for(let i=0;i<wallArray.length;i++){
            for(let j=0;j<wallArray[i].length;j++){
                if(collisionCheck(this, wallArray[i][j])){
                    you.x=wallArray[i][j].x+wallArray[i][j].width;
                }
            }
        }        
        for(let i=0;i<enemyArray.length;i++){
            if(collisionCheck(this, enemyArray[i])){
                you.x=enemyArray[i].x+enemyArray[i].width;
            }
        }

    }
}