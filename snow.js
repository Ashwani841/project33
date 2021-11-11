class Snow{
        constructor(x, y, radius) {
            var options = {
                'friction':0.0000001,
                'density':1.0,
                'restitution':0.8,
            }

            this.body = Bodies.circle(x,y,radius,options);
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = 50;
            this.height = 50;
            this.radius = radius;
            var img="snow4.webp";
            this.image = loadImage(img);
            World.add(world, this.body);
          }
          display(){
            var angle = this.body.angle;
            push();
            image(this.image, this.body.position.x, this.body.position.y,70,70);
            pop();
          }
    }
    