class Bird extends Base{
    constructor(x,y,w,h){
        super(x,y,w,h)
        this.img=loadImage("imagesok/bird.png")
    }
    display(){
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        super.display()
    }
}