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
            score = 0;
            this._scoreTxt = new createjs.Text("Score " + score, "30px Stencil", "#ffFFff");
            this._scoreTxt.x = 10;
            this._scoreTxt.y = 10;
            this.addChild(this._scoreTxt);
            //allow enemy to spawn
            spawnEnemy = true;
            //bye-bye cursor
            stage.cursor = 'none';
            //and welcome new one
            this._newCursor = new createjs.Bitmap(assets.getResult("newCursor"));
            var width = this._newCursor.getBounds().width;
            var height = this._newCursor.getBounds().height;
            this._newCursor.regX = width * 0.5;
            this._newCursor.regY = height * 0.5;
            this.addChild(this._newCursor);
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            this._scoreTxt.text = "Score : " + score;
            this._newCursor.x = stage.mouseX;
            this._newCursor.y = stage.mouseY;
            if (spawnEnemy == true) {
                console.log("z1:" + (stage.numChildren - 1));
                spawnEnemy = false;
                this._enemy = new objects.Enemy("robber", Math.round(4.99 * Math.random()) + 1, "poof");
                //set center of enemy position within screen with 20%margins 
                this._enemy.setPosition(new objects.Vector2(config.Screen.WIDTH * 0.6 * Math.random() + config.Screen.WIDTH * 0.2, config.Screen.HEIGHT * 0.6 * Math.random() + config.Screen.HEIGHT * 0.2));
                currentEnemy = this._enemy;
                this._enemy.addEventListener("click", this._onEnemyClick);
                this.addChild(this._enemy);
                //dirty trick to ensure that mouse always on the top of enemy
                console.log("z2:" + (stage.numChildren - 1));
                stage.setChildIndex(this._newCursor, stage.numChildren);
            }
            this._enemy.update();
        };
        Play.prototype._onEnemyClick = function (event) {
            console.log("Click me more!");
            currentEnemy.shot();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map