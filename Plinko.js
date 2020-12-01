class Plinko{
   constructor(x,y,radius){
    
    var options = {
        isStatic:true,
        
    }

    this.body = Bodies.circle(x,y,radius,options)
    
    this.radius = radius;
   
    World.add(world, this.body); 

}
    display() {
        var plink = this.body.position;
        ellipseMode(RADIUS)
        fill("white");
        ellipse(plink.x,plink.y,this.radius);
       
}
}