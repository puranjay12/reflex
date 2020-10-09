var p1, screen, restart
var gameState = 0

function preload(){

}

function setup(){
    createCanvas(displayWidth,displayHeight)
  
    p1 = createSprite(0,displayHeight/2,10, 10)

screen = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
        screen.visible = false
}

function draw(){
        background(250,250,250)

fill(0)
text("tap to test your reflex",displayWidth/2,10)




if(mousePressedOver(screen)){
//text("screen",200,200)
gameState = 2
}

if(gameState === 0){
    p1.velocityX = displayWidth/10
    screen = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    screen.visible = false
}


if(gameState === 2&& p1.x <displayWidth/4){
    
    fill(0)
    text("your reflex is VERY GOOD",displayWidth/2,displayHeight/2)
    text("refresh the page to restart",displayWidth/2,displayHeight/2+20)
    p1.velocityX = 0
}
if(gameState === 2&& p1.x >displayWidth/4&& p1.x<displayWidth/2){
    
    fill(0)
    text("your reflex is GOOD",displayWidth/2,displayHeight/2)
    text("refresh the page to restart",displayWidth/2,displayHeight/2+20)
    p1.velocityX = 0
}
if(gameState === 2&& p1.x <displayWidth/1.33&& p1.x>displayWidth/2){
    
    fill(0)
    text("your reflex is POOR",displayWidth/2,displayHeight/2)
    text("refresh the page to restart",displayWidth/2,displayHeight/2+20)
    p1.velocityX = 0
}

if(gameState === 2&& p1.x >displayWidth/1.33&& p1.x>displayWidth/2){
    
    fill(0)
    text("your reflex is VERY POOR",displayWidth/2,displayHeight/2)
    text("refresh the page to restart",displayWidth/2,displayHeight/2+20)
    p1.velocityX = 0
}
console.log(gameState)
/*if(mousePressedOver()){
    gameState = 0
}*/
drawSprites()

}

