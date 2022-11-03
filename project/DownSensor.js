class DownSensor extends DivObject{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, color, x, y, width, height, velX, velY);
    }

    tick(){
        //barArray[1]=new Sensor(document.body, "purple", you.x+2, you.height+1, you.width*(80/100), 1);//하         
        
        this.x=you.x+10;
        this.y=you.y+you.height-5;
        
        for(let i=0;i<wallArray.length;i++){
            for(let j=0;j<wallArray[i].length;j++){
                if(collisionCheck(this, wallArray[i][j])){
                    you.y=(wallArray[i][j].y - you.height);
                    you.velY=0;
                }
            }
        }
        for(let i=0;i<enemyArray.length;i++){
            if(collisionCheck(this, enemyArray[i])){
                you.y=enemyArray[i].y-you.height;
            }
        }

    }
}