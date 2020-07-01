class Paper{
constructor(x,y){
   var options={
     isStatic: false,
     restitution: 0.3,
     friction:0.5,
     density: 1.2
   }
  this.body = Bodies.circle(200,600,25, options); 
  this.image = loadImage("paper.png");
  
   
  
  World.add(world,this.body);
}
  
    display(){
      var pos = this.body.position;
      fill("purple");
      imageMode(CENTER)
      image(this.image, pos.x, pos.y,60,60);
    }
    }