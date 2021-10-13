let numcoins = 10
let coins
let bloby, blobSprite


function preload() {
  bg = loadImage('unnamed.png')
  coinSprite = loadImage('coin.png')
  blobSprite = loadImage('character.png')
}

function setup() {
  createCanvas(800, 400);
  
  frameRate(12)
  bloby = new BlobChar(blobSprite, {x:50, y:200}, 200)
  coins = Array.from({length:numcoins},(el,i)=>{
    return new Coin(coinSprite, {x:100*i+100, y:100}, 40)
  })

}

function draw() {
  background(bg);
  coins.forEach(coin => coin.render())
  bloby.render()
  
  checkKeys()
  
}

function checkKeys() {
  if(keyIsDown(LEFT_ARROW)){
    bloby.moveLeft()
    return
  } else if(keyIsDown(RIGHT_ARROW)){
    bloby.moveRight()
    return       
  }
}
