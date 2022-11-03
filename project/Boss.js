class Boss extends Enemy{
    constructor(container, src, x, y, width, height, velX, velY, hp){
        super(container, src, x, y, width, height, velX, velY);
        this.hp=hp;
        this.flag=false;
        this.result=false;
        this.counter=0;
        this.fire;
        this.Ox=this.x;
        this.Oy=this.y;
        this.collisionYou=false;
        this.resultTwo=false;
        this.counterTwo=0;
    }

    
    attackCheck(){ //충돌여부 판단 : 1.북서 2.남서 3.북동 4.남동
        let result1=(this.x+this.width*8>=you.x) && (this.y+this.height>=you.y);
        let result2=(this.x+this.width*8>=you.x) && (this.y-this.height<=you.y);
        let result3=(this.x-this.width*8<=you.x) && (this.y+this.height>=you.y);
        let result4=(this.x-this.width*8<=you.x) && (this.y-this.height<=you.y);
        this.result=result1&&result2&&result3&&result4;
    }
    
    attackCheckTwo(){ //충돌여부 판단 : 1.북서 2.남서 3.북동 4.남동
        let result1=(this.x+this.width*3>=you.x) && (this.y+this.height>=you.y);
        let result2=(this.x+this.width*3>=you.x) && (this.y-this.height<=you.y);
        let result3=(this.x-this.width*3<=you.x) && (this.y+this.height>=you.y);
        let result4=(this.x-this.width*3<=you.x) && (this.y-this.height<=you.y);
        this.resultTwo=result1&&result2&&result3&&result4;
    }
    
    tick(){
        this.collisionYou=collisionCheck(this, you);
        
        
        if(this.resultTwo==true && this.collisionYou==false){
            this.velX=(you.x-this.x)/Math.sqrt((you.x-this.x)**2+(you.y-this.y)**2);
            this.velY=(you.y-this.y)/Math.sqrt((you.x-this.x)**2+(you.y-this.y)**2);
        }
        else if(this.Ox-this.x!=0 || this.Oy-this.y!=0 && this.result ==false){ //분모가 0이 되는 것을 막아야 한다!! 조건을 줌.
            this.velX=parseInt((this.Ox-this.x))/Math.sqrt((this.Ox-this.x)**2+(this.Oy-this.y)**2);
            this.velY=parseInt((this.Oy-this.y))/Math.sqrt((this.Ox-this.x)**2+(this.Oy-this.y)**2);
            //console.log(Math.sqrt((this.Ox-this.x)**2+(this.Oy-this.y)**2));
        } else{
            this.velX=0;
            this.velY=0;
        }
        
        this.x=this.x+this.velX;
        this.y=this.y+this.velY;
    
    }
    

    attack(){
        
        if(this.result==true){
            this.counter++;
            if(this.counter%120==0 || this.counter==1){
                let enemyBullet;
                enemyBullet=new EnemyBullet(map.div, "../images/enemybullet.png", this.x+0.5*this.width,this.y+0.5*this.height, ENEMY_BSIZE, ENEMY_BSIZE, 2*(you.x-this.x)/Math.sqrt((you.x-this.x)**2+(you.y-this.y)**2), 2*(you.y-this.y)/Math.sqrt((you.x-this.x)**2+(you.y-this.y)**2));
                enemyBulletArray.push(enemyBullet);
            }
        }
    }

    attackTwo(){
        if(this.resultTwo==true){
            this.counterTwo++;
        }if((this.counterTwo%1000)>700 && (this.counterTwo%1000)<1000){
            if(this.counterTwo%25==0){
                let enemyBullet;
                enemyBullet=new EnemyBullet(map.div, "../images/masterball.png", this.x+0.5*this.width,this.y+this.height, ENEMY_BSIZE+10, ENEMY_BSIZE+10, 2*(you.x-this.x)/Math.sqrt((you.x-this.x)**2+(you.y-this.y)**2), 2*(you.y-this.y)/Math.sqrt((you.x-this.x)**2+(you.y-this.y)**2));
                enemyBulletArray.push(enemyBullet);
                enemyBullet=new EnemyBullet(map.div, "../images/masterball.png", this.x+0.5*this.width,this.y-ENEMY_BSIZE, ENEMY_BSIZE+10, ENEMY_BSIZE+10, 2*(you.x-this.x)/Math.sqrt((you.x-this.x)**2+(you.y-this.y)**2), 2*(you.y-this.y)/Math.sqrt((you.x-this.x)**2+(you.y-this.y)**2));
                enemyBulletArray.push(enemyBullet);
            }
        }
    }


    

}