/*
*Created by: Ilmir Taychinov
*Created on: October 18, 2016
*Last Modified by: Ilmir Taychinov
*Last Modified: October 18, 2016
*Based on work of: Wallace Balaniuc
*/

/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var score:number;
var spawnEnemy:boolean;
var currentEnemy:objects.Enemy;

var gameAtlas : createjs.SpriteSheet;


var currentScene : objects.Scene;
var scene: number;

// Preload Assets required
var assetData:objects.Asset[] = [
    {id: "PlayBtn", src: "../../Assets/images/sack.png"},
    {id: "BgMenu", src: "../../Assets/images/bank1.png"},
    {id: "BgPlay", src: "../../Assets/images/bank.png"},
    {id: "gameAtlas", src: "../../Assets/images/enemy.png"},
    {id: "newCursor", src: "../../Assets/images/crosshair.png"}
];

function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);


    var poofX=-30;
    var poofY=-30;


    let atlasData = {
        "images": [
            assets.getResult("gameAtlas")
        ],

        "frames": [
            [1, 1, 200, 214, 0, 0, 0],
            [203, 1, 128, 125, 0, poofX, poofY-3],
            [203, 128, 102, 117, 0, poofX-13, poofY-9],
            [307, 128, 91, 98, 0, poofX-18, poofY-18],
            [400, 1, 128, 124, 0, poofX, poofY-4],
            [400, 127, 128, 124, 0, poofX, poofY-4]
        ],

        "animations": {
            "robber": { "frames": [0] },
            "poof":{"frames":[4,1,5,2,3],"speed": 0.3, next: false},
            "poof2": { "frames": [1] },
            "poof4": { "frames": [2] },
            "poof5": { "frames": [3] },
            "poof1": { "frames": [4] },
            "poof3": { "frames": [5] }
        },
    }

    gameAtlas = new createjs.SpriteSheet(atlasData);

    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.MENU :
            stage.removeAllChildren();
            currentScene = new scenes.Menu();;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME :
            stage.removeAllChildren();
            currentScene = new scenes.Play();
            console.log("Starting SHOOTER scene");
            break;
    }
    
}