/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Play extends objects.Scene {


        // Private instance variables
        private _enemy: objects.Enemy;
        private _newCursor:createjs.Bitmap;
        private _enemyHealth : createjs.Shape;
      
       


        // Labels and bitmaps
         private _bg: createjs.Bitmap;
         //private _newCursor: createjs.Bitmap;
         private _scoreTxt: createjs.Text;

        // Play Class Contructor
        constructor() {
            super();
            this.start();
        }

        public start() : void {
            console.log("Play Scene Started");
           
            //add background
            this._bg = new createjs.Bitmap(assets.getResult("BgPlay"));
            this.addChild(this._bg);
            //add score label
            score=0;
            this._scoreTxt = new createjs.Text("Score "+score,"30px Stencil","#ffFFff");
            this._scoreTxt.x=10;
            this._scoreTxt.y=10;
            this.addChild(this._scoreTxt);

            //allow enemy to spawn
            spawnEnemy=true;
            //add enemy health bar
            this._enemyHealth = new createjs.Shape();
            this._enemyHealth.graphics.beginFill("#ffffff").drawRect(0,10,100,30);
            this._enemyHealth.x=config.Screen.WIDTH-120;
             this.addChild(this._enemyHealth);
            
            /* Z indexing are really bad here.... 
            stage.cursor = 'none';
           
            this._newCursor = new createjs.Bitmap(assets.getResult("newCursor"));
            var width = this._newCursor.getBounds().width;
            var height = this._newCursor.getBounds().height;
            this._newCursor.regX = width * 0.5;
            this._newCursor.regY = height * 0.5;
            this.addChild(this._newCursor);
            
            this.setChildIndex(this._newCursor,1000);
            */




            stage.addChild(this);
        }

        public update() : void {

            this._scoreTxt.text="Score : "+ score;
            //this._newCursor.x = stage.mouseX;    
            //this._newCursor.y = stage.mouseY;
           

            if(spawnEnemy==true){
              
                spawnEnemy=false;
                this._enemy = new objects.Enemy("robber",Math.round(4.99*Math.random())+1,"poof");
                //set center of enemy position within screen with 20%margins 
                this._enemy.setPosition(
                    new objects.Vector2(
                        config.Screen.WIDTH*0.6*Math.random() + config.Screen.WIDTH*0.2,
                        config.Screen.HEIGHT*0.6*Math.random() + config.Screen.HEIGHT*0.2,)
                );
                currentEnemy=this._enemy;
                this._enemy.addEventListener("click", this._onEnemyClick);
                this.addChild(this._enemy);
                
                
                
                
            }

            if(currentEnemy.life>=0)
                this._enemyHealth.scaleX=currentEnemy.life/5;
                
            this._enemy.update();
            
           
        }

        

        private _onEnemyClick(event : createjs.MouseEvent) : void {
                console.log("Click me more!");
                currentEnemy.shot();

        }
    }
}