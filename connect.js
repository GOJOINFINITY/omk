class Slingshot{
    constructor(b1,b2){

    this.sling=Matter.Constraint.create({bodyA: b1,
        bodyB:b2,
        stiffness:1.00,
        length:0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000})
    World.add(world,this.sling)
    
    }

    display(){
push()
        strokeWeight(4)
        //line(x1,y1,x2,y2)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
       pop() 
    }
}