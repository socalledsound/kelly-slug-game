class BlobChar{
  constructor(blobSprite, {x,y}, size){
    console.log(blobSprite)
    this.x = x
    this.y = y
    this.size = size
    this.images = loadBlobImages(blobSprite)
    this.imageCounter = 0
    this.direction = 1
    this.speed = 20
    console.log(this.images)
  }
  
  move(){
    this.x += this.direction * this.speed
  }
  
  moveLeft(){
    this.direction = -1
    this.move()
    this.nextImage(0,5)
  }
  
  moveRight(){
    this.direction = 1
    this.move()
    this.nextImage(0,5)
  }

  
  nextImage(start, end){
    if (this.imageCounter < start){
      this.imageCounter = start
    } else if (this.imageCounter>end){
      this.imageCounter = start
    } else {
      this.imageCounter+=this.direction
    }
  }
  
  render(){
    // console.log(this.images)
    image(this.images[0], this.x, this.y, this.size, this.size)
    this.imageCounter++
  }
}