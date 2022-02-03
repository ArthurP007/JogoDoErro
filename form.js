class Form{
    constructor(){
         this.imput = createInput("name")
         this.buttom = createButton("Play")
         this.greetings = createElement("h3") 
    }
    display(){
        var title = createElement("h2")
        title.html("Cathau!!")
        title.position(130,0)
        
        this.imput.position(130,160);
        this.buttom.position(250,200);
        this.buttom.mousePressed(()=>{
            this.imput.hide();
            this.buttom.hide();
        player.name = this.imput.value();
        this.greetings.html("Olá: "+player.name);
        this.greetings.position(130,160);
        playercount+=1;
        player.index=playercount;
        player.update();
        player.updateCount(playercount);
        })
    }
    hide(){
        this.imput.hide()
        this.buttom.hide()
        this.greetings.hide()
    }
}
    