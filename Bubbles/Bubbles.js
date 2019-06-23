let bubbles = []; 

//let kitten; 
//let turtle;
//let bear;  
let animals = []; 
function preload(){
    //kitten = loadImage('assets/jojoCat.jpg');
    //turtle = loadImage('assets/turtle0.jpg');  
    //bear = loadImage('assets/grizzboi.jpg'); 
    for (let i = 0; i < 3; i++){
        animals[i] = loadImage(`assets/animal${i}.jpg`); 
    }                           //this is an ES6 template literal use
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 
}

class Bubble { 
    constructor(x,y,r,img){
        this.x = x; 
        this.y = y; 
        this.r = r; 
        this.animal = img; 
    }
    move(){    
        this.x = this.x + random(-5,5); 
        this.y = this.y + random(-5,5); 
    }
    show(){
       image(this.animal, this.x, this.y,this.r,this.r); 
        // stroke(255); 
        // strokeWeight(3);  
        // fill(this.brightness,125);
        // ellipse(this.x, this.y, this.r*2); 
    }

    // hover(px,py){
    //     let distance = dist(px,py,this.x,this.y);
    //     return distance < this.r; 
    // }

    dragged(arrowX,arrowY){
        let distance = dist(arrowX,arrowY,this.x,this.y);
        if (distance < this.r) {
             this.r += 2; 
             if (this.r >= 130) {
                 this.r = random(10,90); 
             }
            // console.log("bubble clicked !!!"); 
        }
    }
    clicked(px,py){
        //let distance = dist(px,py,this.x,this.y);
        if(px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r){
            this.animal = random(animals); 
        }
    }
    changeColor(... culors){
        this.brightness = culors; 
    }
}

function mouseDragged(){
    for(let x = 0; x < bubbles.length; x++){
        bubbles[x].dragged(mouseX,mouseY); 
        // if (bubbles[x].hover(mouseX,mouseY)) {
        //     bubbles[x].changeColor(255,150,60);    
        // }
    }
}
function mousePressed(){
    for(let b of bubbles){
        b.clicked(mouseX,mouseY); 
    }
}
function setup(){
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 30; i++) { 
        let x = random(width);
        let y = random(height); 
        let r = random(10,90);
        let animal = random(animals); 
        let b = new Bubble(x,y,r,animal);
        bubbles.push(b); 
 
    }
}
function draw(){
    background(0);

    for(let b of bubbles){
        b.move(); 
        b.show();       
    }
}
