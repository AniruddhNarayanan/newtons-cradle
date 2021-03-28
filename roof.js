class roof{
    constructor(x, y, width, height){
        var options={
            'restitution' : 1.2,
            'friction' :1.1,
            'density' :1.4,
            'isStatic' :true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height=height;
        this.image = loadImage("rectangle.png");
        World.add(world, this.body);
    }
    display(){
     push();
     translate(this.body.position.x, this.body.position.y);
    //  fill("gray");
     imageMode(CENTER);
     image(this.image,this.body.position.x, this.body.position.y,400,10);
     
     pop();
    }
}