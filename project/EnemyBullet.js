class EnemyBullet extends ImgObject{
    constructor(container, src, x, y, width, height, velX, velY){
        super(container, src, x, y, width, height, velX, velY);
        this.overlap=false;
    }
    
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.removeWithEnemy();
        this.removeByWall();
        this.removeFromScreen();
    }

    removeWithEnemy(){
        

            let result=collisionCheck(this, you);
            if(result&&!this.overlap){ 
                this.overlap=true;
                this.container.removeChild(this.img);
                //배열에서 제거
                let index=enemyBulletArray.indexOf(this); //총알인 내가 어디에 들어있는지 (클래스 외부에 있는 배열에서 자신을 찾는다.)
                enemyBulletArray.splice(index, 1);
                
                you.hp-=1;
                if(you.hp==0){
                    you.img.src="../images/enemybullet.png";
                    //this.container.removeChild(you.img);
                    alert("Game Over");
                }


            }
        
    }

    removeByWall(){
        for(let i=0;i<wallArray.length;i++){
            for(let j=0;j<wallArray[i].length;j++){
                let result=collisionCheck(this, wallArray[i][j]);
                if(result&&!this.overlap){ //벽 2개에 동시에 닿으면 작동이 멈춰서 하나의 조건을 추가한다.
                    this.overlap=true; //벽에 맞는 순간 조건값을 변경.
                    this.container.removeChild(this.img);
                    let index = bulletArray.indexOf(this);
                    bulletArray.splice(index,1);

                }
            }
        }
    }


    removeFromScreen(){
        if(this.overlap==false){ //총알이 벽에 닿아 사라지면 여기서 오류가 발생한다. 

        //총알인 내가 스크린을 넘어서면, 제거한다.
        if(this.x>map.div.width || this.x<0 || this.y>map.div.height || this.y<0){
            //1) 화면에서 제거
            this.container.removeChild(this.img); //엘리먼트 제거
            //2) 배열에서 제거
            let index = enemyBulletArray.indexOf(this); //조사 대상 객체
            enemyBulletArray.splice(index,1);
        }
    }
    }

}