var canvas;
var music;
var block1,block2,block3,block4;
var square;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    music.loop();

    //create 4 different surfaces
     block1 = createSprite(700,580,150,50);
     block1.shapeColor = "red";
     block1.debug = true;

     block2 = createSprite(100,580,150,50);
     block2.shapeColor = "blue";
     block2.debug = true;

     block3 = createSprite(300,580,150,50);
     block3.shapeColor = "green";
     block3.debug = true;

     block4 = createSprite(500,580,150,50);
     block4.shapeColor = "yellow";
     block4.debug = true;

    //create box sprite and give velocity
      square = createSprite(Math.round(random(20,750)),300,100,100);
      square.shapeColor = "white";
      square.velocityX = 3;
      square.velocityY = 3;
}

function draw() {
    background(0);
    
    //add condition to check if box touching surface and make it box
    if(CollisionMaster(block1,square)){
        square.shapeColor = "red";
        square.velocityX = 0;
        square.velocityY = 0;
        music.stop();
    } else{
        if(CollisionMaster(block4,square)){
           square.shapeColor = "yellow";
           square.velocityX = 0;
           square.velocityY = 0;
           music.stop();
        } else{
            if(CollisionMaster(block3,square)){
               square.shapeColor = "green";
               square.velocityX = 0;
               square.velocityY = 0;
               music.stop();
            } else{
                if(CollisionMaster(block2,square)){
                   square.shapeColor = "blue";
                   square.velocityX = 0;
                   square.velocityY = 0;
                   music.stop();
              } 
        }
    } 
 }
    createEdgeSprites();
    drawSprites();
}
function CollisionMaster(object1,object2){
    if( object1.y - object2.y < object2.height/2 + object1.height/2 &&
        object1.x - object2.x < object2.width/2 + object1.width/2){
       return true;
        }
 }