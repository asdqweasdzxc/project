class Bullet extends ImgObject{
    constructor(container, src, x, y, width, height, velX, velY){
        super(container, src, x, y, width, height, velX, velY);
        this.overlap=false;
    }
    
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.removeWithEnemy();
        this.removeFromScreen();
        this.removeByWall();
    }

    removeWithEnemy(){
        //현재 존재하는 적군 수 만큼 반복하면서 닿았는지 판단하자.
        for(let i=0;i<enemyArray.length;i++){
            let result=collisionCheck(this, enemyArray[i]);
            if(result&&!this.overlap){ //충돌했다면... 1)화면에서 제거 (총알, 적군)
                                                 //                           2)배열에서 제거 (총알, 적군)
                this.overlap=true;  //2마리가 동시에 맞으면 게임이 멈춘다.
                this.container.removeChild(this.img);
                //배열에서 제거
                let index=bulletArray.indexOf(this); //총알인 내가 어디에 들어있는지 (클래스 외부에 있는 배열에서 자신을 찾는다.)
                bulletArray.splice(index, 1);
                
                index=enemyArray.indexOf(enemyArray[i]);
                enemyArray[index].hp-=1;
                if(enemyArray[index].hp==0){
                    this.container.removeChild(enemyArray[i].img);
                    enemyArray.splice(index, 1);
                }


            }
        }
    }

    removeByWall(){
        for(let i=0;i<wallArray.length;i++){
            for(let j=0;j<wallArray[i].length;j++){
                let result=collisionCheck(this, wallArray[i][j]);
                if(result&&!this.overlap){
                    this.overlap=true;
                    this.container.removeChild(this.img);
                    let index = bulletArray.indexOf(this);
                    bulletArray.splice(index,1);

                }
            }
        }
    }


    removeFromScreen(){
        if(!this.overlap){
            if(this.x>you.x+480-BULLET_SIZE || this.x<you.x-360 || this.y<you.y-360 || this.y>you.y+360+BULLET_SIZE){
                this.container.removeChild(this.img); //엘리먼트 제거
                //2) 배열에서 제거
                let index = bulletArray.indexOf(this); //조사 대상 객체
                bulletArray.splice(index,1);
            }
        }
    }
}