//Create variables here

var dog , happyDog,database,foodS,foodStock;
var database;
function preload()
{
	//load images here
  dog1 = loadImage("images/dog1.png")
 dog2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(200,200,20,20)
  dog.addImage(dog1)
  dog.scale = 0.2
  database = firebase.database();

  foodStock = database.ref('food')
  foodStock.on("value",readStock)
 
}


function draw() {  
background(46,139,87)
  
  
if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(dog2)
  
}
drawSprites();

text("Stock remaining "+foodS,100,100)
}
function readStock(data){
foodS=data.val;

}

function writeStock(x){
  if(x<=0){
    x= 0
     }
     else{
       x= x-1
     }
database.ref('/').update({
  food:x
})
}



