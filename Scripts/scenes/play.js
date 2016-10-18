/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // Play Class Contructor
        function Play() {
            _super.call(this);
            this.start();
        }
        Play.prototype.start = function () {
            console.log("Play Scene Started");
            //add background
            this._bg = new createjs.Bitmap(assets.getResult("BgPlay"));
            this.addChild(this._bg);
            //add score label
            this._scoreTxt = new createjs.Text("Score " + score, "30px Verdana", "#ffFFff");
            this._scoreTxt.x = 10;
            this._scoreTxt.y = 10;
            //allow enemy to spawn
            spawnEnemy = true;
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            this._scoreTxt.text = "Score : " + score;
            if (spawnEnemy == true) {
                spawnEnemy = false;
                this._enemy = new objects.Enemy("robber", Math.round(4.99 * Math.random()) + 1);
                this.addChild(this._enemy);
            }
        };
        Play.prototype._onEnemyClick = function (event) {
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map