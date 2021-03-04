class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: .1,
            length: 100
        }
        this.pointB = pointB
        this.polygon = Constraint.create(options);
        World.add(world, this.polygon);
        
    }

  

    fly(){
        this.polygon.bodyA = null;
    }

        attach(body){
        this.polygon.bodyA = body;
    }

    
    display(){
        if(this.polygon.bodyA){
        var pointB = this.pointB;
        var pointAX = this.polygon.bodyA.position.x;
        var pointAY = this.polygon.bodyA.position.y;
        
        strokeWeight(3);
         line(pointAX, pointAY, pointB.x, pointB.y);  
        }
 
    }
    
}