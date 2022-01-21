class Drops{
    constructor(x,y){
var Options = {
    friction :0.001,
    restitution:0.1
}

this.drop = Bodies.circle(x,y,5,Options)
World.add(world,this.drop)
this.radius = 5;

    }
updateY(){
    if(this.drop.position.y>height){
        Matter.Body.setPosition(this.drop,{x:random(0,500),y:random(0,500)})
    }
}


display(){
fill('blue');
ellipseMode(CENTER);
ellipse(this.drop.position.x,this.drop.position.y,this.radius,this.radius);

}
}