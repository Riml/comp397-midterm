module objects {
    export class Enemy extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;

        private _life : number;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string, life : number) {
            super(gameAtlas, imageString, "");
            this._life = life;
        }

        get life() : number {
            return this._life;
        }

        public update() : void {
            if (this._life<=0)
            {
                console.log("die? please!");
                //play poof animation
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
            currentScene.removeChild(this);
        }
    }
}