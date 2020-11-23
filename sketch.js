var dog;
var hdog;
var foodstock;
var database;
var foods;


function preload()
{
  dogImage= loadImage("images/dogImg.png");
  hdogImage= loadImage("images/dogImg1.png");

}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale=0.2;

  foodstock= database.ref('food');
  foodstock.on("value",readstock);

}


function draw() {  
 background(46,139,87);

 if(keyWentDown(UP_ARROW)){
 writestock(foods);
 dog.addImage(hdogImage);
}
  drawSprites();
  //add styles here
  fill(0);
text("food left:" + foods ,250,30);
}

function readstock(data){
foods=data.val();
}

function writestock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  food:x
})
}

