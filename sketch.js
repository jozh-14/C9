var box
function setup() {
  createCanvas(500,500);
  box=createSprite(200,200,30,30)

}

function draw() 
{
  background("indigo");
  if(keyDown("right")){
    box.x=box.x+14
  }
  if(keyDown("left")){
    box.x=box.x-14
  }
  if(keyDown("up")){
    box.y=box.y-14
  }
  if(keyDown("down")){
    box.y=box.y+14
  }
drawSprites()
}




