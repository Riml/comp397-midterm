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




            stage.addChild(this);
        }

        public update() : void {

            this._scoreTxt.text="Score : "+ score;    


            if(spawnEnemy==true){
                spawnEnemy=false;
                this._enemy = new objects.Enemy("robber",Math.round(4.99*Math.random())+1);
                this.addChild(this._enemy);
            }
        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
        }
    }
}