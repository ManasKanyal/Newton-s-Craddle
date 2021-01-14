class Bob
{
    constructor(x,y)
    {
        var options=
        {
            restitution:1,
            isStatic:false,
            friction:0,
            density:7.8
        }

            this.body=Bodies.circle(x,y,25,options);
        World.add(world,this.body);

        
            
     }
 
    display()
    {
        var bobpos=this.body.position;
        push();
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(bobpos.x,bobpos.y,25,25);
        pop();
    }
}
    