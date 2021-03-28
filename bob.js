class bob{
    constructor(x, y, radius){
        var options={
            'restitution' : 1.2,
            'friction' :1.1,
            'density' :1.4
            // 'isStatic' :true
            
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius=radius;
        this.image = loadImage("purple-circle-light-hi.png");
        // this.Body.scale(thixs.body, 10,10);
        World.add(world, this.body);
    }
    display(){
     push();
     translate(this.body.position.x, this.body.position.y);
     imageMode(CENTER);
     image(this.image,this.body.position.x, this.body.position.y,50,50);
     pop();
    }
}