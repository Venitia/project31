class Drop {
    constructor(x,y){
       var options= {
        "restitution" : 0.1,
        "friction":0.001,
      
         
       }
       this.body = Bodies.circle(x,y,5,options);
       this.radius = 5;
       
       World.add(world,this.body);
       //this.trajectory =[];
    }
    updateY(){
      if(this.body.position.y > height){
         Matter.Body.setPosition(this.body, {x: random(0,400),y: random(0,400)})
      }
    }
    display(){
       var rain = this.body.position;
       
      
       fill ("lightblue");
       ellipse(rain.x,rain.y,this.radius,this.radius);
       
       
      
       
    }
}