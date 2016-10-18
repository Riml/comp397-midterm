module objects {
    export class Enemy extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;
        private _deathAnimationName:string;
        private _dying:boolean;

        private _life : number;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string, life : number, deathAnimationName:string) {
            super(gameAtlas, imageString, "");
            this._deathAnimationName=deathAnimationName;
            this._life = life;
            this._dying=false;
        }

        get life() : number {
            return this._life;
        }

        public update() : void {

            //check if we alredy kill the robber
            if (this._life<=0 && !this._dying)
            {
                console.log("die? please!");
                this._dying=true;
                this.gotoAndPlay(this._deathAnimationName);
            }

             if (this.currentAnimation ==this._deathAnimationName &&
                 this.currentAnimationFrame > gameAtlas.getNumFrames(this._deathAnimationName) - 1
                 ) {
                this._dead();
            }

        }

        public setPosition(pos : objects.Vector2) : void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }

        public shot() : void {
            console.log("robber lifes : "+this.life);
            this._life--;
        }

        private _dead() : void {
            spawnEnemy=true;
            score+=5;
            currentScene.removeChild(this);
        }
    }
}