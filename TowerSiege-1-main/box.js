class Box {

    constructor(x,y,width,height){

        var Option = {
            isStatic : true
          }
        
        
        this.width= width;
        this.height= height;
          this.body= Bodies.rectangle(x,y,width,height,Option);
          World.add(world,this.body);
        
    }

    display(){

        var pos = this.body.position;

        fill("aqua");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }


}