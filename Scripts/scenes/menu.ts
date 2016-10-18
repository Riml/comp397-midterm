/*
*Created by: Ilmir Taychinov
*Created on: October 18, 2016
*Last Modified by: Ilmir Taychinov
*Last Modified: October 18, 2016
*Based on work of: Wallace Balaniuc
*/

/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables

        // Label or bitmap
         private _bg: createjs.Bitmap;

        // Button 
        private _playBtn : objects.Button;
        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");

            //add background
            this._bg = new createjs.Bitmap(assets.getResult("BgMenu"));
            this._bg.filters = [
                new createjs.BlurFilter(5, 5, 5)
            ];
            this._bg.cache(0,0,800,600);
            this.addChild(this._bg);
            
            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {
        }

        private _playBtnClick(event : createjs.MouseEvent) {
            console.log("PRINT");
            scene = config.Scene.GAME;
            changeScene();
        }
    }
}