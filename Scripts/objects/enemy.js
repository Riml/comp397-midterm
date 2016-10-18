var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(imageString, life, deathAnimationName) {
            _super.call(this, gameAtlas, imageString, "");
            this._deathAnimationName = deathAnimationName;
            this._life = life;
            this._dying = false;
        }
        Object.defineProperty(Enemy.prototype, "life", {
            get: function () {
                return this._life;
            },
            enumerable: true,
            configurable: true
        });
        Enemy.prototype.update = function () {
            //check if we alredy kill the robber
            if (this._life <= 0 && !this._dying) {
                console.log("die? please!");
                this._dying = true;
                this.gotoAndPlay(this._deathAnimationName);
            }
            if (this.currentAnimation == this._deathAnimationName &&
                this.currentAnimationFrame > gameAtlas.getNumFrames(this._deathAnimationName) - 1) {
                this._dead();
            }
        };
        Enemy.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Enemy.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Enemy.prototype.shot = function () {
            console.log("robber lifes : " + this.life);
            this._life--;
        };
        Enemy.prototype._dead = function () {
            spawnEnemy = true;
            score += 5;
            currentScene.removeChild(this);
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map