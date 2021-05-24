var hypnoticball;
var database , position;

function setup(){
    createCanvas(500,500);
    database= firebase.database();
    console.log(database);

    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";

var hypnoticballPosition=database.ref('ball/position');
hypnoticballPosition.on("value",readPosition)

}

function draw(){
    background("white");
    //undefine it and remove the error

if(position !==undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

    
}
function writePosition(x,y){
 database.ref('ball/position').set({
     'x':position.x+x,
     'y':position.y+y
 })
}

function readPosition(data){
    position=data.val();
    console.log(position.x);
    console.log(position.y);

    hypnoticball.x=position.x;
    hypnoticball.y=position.y;
}