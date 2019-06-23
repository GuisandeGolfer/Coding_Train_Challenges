const flock = []; 

let alignSlider, cohesionSlider, separationSlider; 

function setup(){
    createCanvas(600, 800); 
    alignSlider = createSlider(0, 2, 1, 0.1); 
    cohesionSlider = createSlider(0, 2, 1, 0.1); 
    separationSlider = createSlider(0, 2, 1, 0.1); 

    for(let i = 0; i < 200; i++){
        flock.push(new Boid()); 
    }

}

function draw(){
    background(51); 
    flock.forEach(boid => {
        boid.edges(); 
        boid.flock(flock); 
        boid.update(); 
        boid.show(); 
    });
}