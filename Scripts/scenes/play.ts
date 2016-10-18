/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Play extends objects.Scene {


        // Private instance variables
        private _enemy: objects.Enemy;
        
       


        // Labels and bitmaps
         private _bg: createjs.Bitmap;
         private _newCursor: createjs.Bitmap;
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
            this._scoreTxt = new createjs.Text("Score "+score,"30px Verdana","#ffFFff");
            this._scoreTxt.x=10;
            this._scoreTxt.y=10;

            //allow enemy to spawn
            spawnEnemy=true;
            //bye-bye cursor
            stage.cursor = 'none';
            //and welcome new one
            this._newCursor = new createjs.Bitmap(assets.getResult("newCursor"));
            this.addChild(this._newCursor);




            stage.addChild(this);
        }

        public update() : void {

            this._scoreTxt.text="Score : "+ score;
            this._newCursor.x = stage.mouseX;    
            this._newCursor.y = stage.mouseY;

            if(spawnEnemy==true){
                console.log("z1:"+(stage.numChildren-1));
                spawnEnemy=false;
                this._enemy = new objects.Enemy("robber",Math.round(4.99*Math.random())+1);
                //set center of enemy position within screen with 20%margins 
                this._enemy.setPosition(
                    new objects.Vector2(
                        config.Screen.WIDTH*0.6*Math.random() + config.Screen.WIDTH*0.2,
                        config.Screen.HEIGHT*0.6*Math.random() + config.Screen.HEIGHT*0.2,)
                );
                this.addChild(this._enemy);
                //dirty trick to ensure that mouse always on the top of enemy
                console.log("z2:"+(stage.numChildren-1));
                stage.setChildIndex(this._newCursor, stage.numChildren);
                
                
            }
            
           
        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
        }
    }
}