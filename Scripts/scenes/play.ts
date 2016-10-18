/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Play extends objects.Scene {


        // Private instance variables

        // Label or bitmap
         private _bg: createjs.Bitmap;

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

            stage.addChild(this);
        }

        public update() : void {
        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
        }
    }
}