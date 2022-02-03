var bg;
var gamestate = 0;
var playercount;
var form;
var game;
var player;
var database;
var allplayers;



function setup(){
  createCanvas(500,500);

  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");

  if(playercount===4){
    game.update(1)

  }
  if(gamestate===1){
    clear()
    game.play()
  }

  drawSprites();
  
}


