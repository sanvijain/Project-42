class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("walking_1.png");
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.body)
        this.batmanImg = loadImage("Bestman-01.png");
        
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount>=200)
        image(this.batmanImg,pos.x,pos.y+80,150,230);
        else
       image(this.image,pos.x,pos.y+70,300,300);
    }
}


