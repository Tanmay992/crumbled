class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      
      this.width = 200;
      this.height = 100;
      this.thickness= 20;
      this.angle=0;

      this.leftbody = Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
      Matter.Body.setAngle(this.leftbody, this.angle);
      this.rightbody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options);
      Matter.Body.setAngle(this.rightbody, -1*this.angle);
      this.bottombody = Bodies.rectangle(x,y,this.width,this.thickness,options);

      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
      World.add(world, this.bottombody);
    }
    display(){
      var posleft =this.leftbody.position;
      var posright =this.rightbody.position;
      var posbottom =this.bottombody.position;
      
      push()
      translate(posleft.x,posleft.y)
      rotate(this.angle)
      rectMode(CENTER);
      stroke('white')
      fill("brown");
      rect(0, 0, this.thickness, this.height);
      pop()

      push()
      translate(posright.x,posright.y)
      rotate(-1*this.angle)
      rectMode(CENTER);
      stroke('white')
      fill("brown");
      rect(0, 0, this.thickness, this.height);
      pop()

      push()
      translate(posbottom.x,posbottom.y)
      rectMode(CENTER);
      stroke('white')
      fill("brown");
      rect(0, 0, this.width, this.thickness);
      pop()
    }
  };