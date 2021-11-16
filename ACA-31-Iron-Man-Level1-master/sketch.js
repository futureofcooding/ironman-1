var ironman,ironman_running,ironman_collided;
var bg,bgImage;

function preload() {
  bgImg = loadImage("images/bg.jpg");
  ironImage = loadImage("images/iron.png");
  platformImage = loadImage("images/stone.png");
  diamondImage = loadImage("images/diamond.png");
  spikeImage = loadImage("images/spikes.png");

}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(580,300);
  bg.addImage(bgImage);
  bg.scale =2;

  bg.velocityY = 4;

  ironMan = createSprite(200, 505, 20, 50);
  ironMan.addImage("running", ironman_collided);
  ironMan.scale = 0.3;
 
  ground = createSprite(200, 585, 400, 10);
  ground.visible = false;
  bricksGroup = new Group();
  diamondsGroup = new Group();
  spikesGroup = new Group();
}

function draw() 

  if(keyDown("space")){
    ironman.velocityY = -16;
  }
  if (bg.y >600){
  bg.y=bg.height/2;
}
  generatePlatforms();

  if (keyDown("up")) {
    ironMan.velocityY = -10;
  }
  if (keyDown("left")) {
    ironMan.x = ironMan.x - 5;
  }
  if (keyDown("right")) {
    ironMan.x = ironMan.x + 5;
  }
  ironMan.velocityY = ironMan.velocityY + 0.5;

  for (var i = 0; i < bricksGroup.length; i++) {
    var temp = bricksGroup.get(i);

    if (temp.isTouching(ironMan)) {
      ironMan.collide(temp);
    }
  }
 