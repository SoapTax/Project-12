var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png")
  rleafImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  var a = Math.round(random(1, 3))
  if(frameCount % 80 === 0){
    switch(a){

      case 1: createApples()
      break;

      case 2: createOLeaves()
      break;

      case 3: createRLeaves()
      break;

      default: break;
    }
  }
  drawSprites();
}

function createApples(){
apple = createSprite(random(50, 350), 40, 10, 10);
apple.addImage("Apple", appleImg);
apple.velocityY = 5;
apple.scale = 0.06
apple.lifetime = 70
rabbit.depth = apple.depth
rabbit.depth += 1
}
function createOLeaves(){
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.addImage("leaf", leafImg);
  leaf.velocityY = 5;
  leaf.scale = 0.08
  leaf.lifetime = 70
  rabbit.depth = leaf.depth
rabbit.depth += 1
  }

  function createRLeaves(){
    rleaf = createSprite(random(50, 350), 40, 10, 10);
    rleaf.addImage("rleaf", rleafImg);
    rleaf.velocityY = 5;
    rleaf.scale = 0.06
    rleaf.lifetime = 70
    rabbit.depth = rleaf.depth
rabbit.depth += 1
    }




