class polygon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
      
        this.sling.bodyA = bodyA;
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
     fill("blue");
     image(this.image,pos.x,pos.y,this.width, this.height);
    }
  };