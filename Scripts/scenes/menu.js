/*
*Created by: Ilmir Taychinov
*Created on: October 18, 2016
*Last Modified by: Ilmir Taychinov
*Last Modified: October 18, 2016
*Based on work of: Wallace Balaniuc
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            //add background
            this._bg = new createjs.Bitmap(assets.getResult("BgMenu"));
            this._bg.filters = [
                new createjs.BlurFilter(5, 5, 5)
            ];
            this._bg.cache(0, 0, 800, 600);
            this.addChild(this._bg);
            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype._playBtnClick = function (event) {
            console.log("PRINT");
            scene = config.Scene.GAME;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map