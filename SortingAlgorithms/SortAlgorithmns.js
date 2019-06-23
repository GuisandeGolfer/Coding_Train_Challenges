
/**
 * This is going to be a page for visualizations of all the common sorting algorithmns 
 * 
 * Design will come from Coding Train, and is the property of Coding train 
 * 
 * I could just pull the code from Github and play with it, but I want to code it out by hand
 * 
 * and then put a personal creative twist on it for coding practice
 * 
 * after the project is how I like it, I will push it to a remote repository in Github 
 * 
 * once that is successful, I will get creative with the rest of my coding challenges I have done, and then push those to their own 
 * github repo's as well. 
 * 
 * 
 * Date: 5/29/2019
 * Time: 5:22 pm 
 * 
 * Context: Currently waiting on dad to wake up // he didnt tell me that he was at work or something 
 * in the next 30 minutes (if there is still no reponse, I will either go home or find a better cafe or something). 
 * 
 * 
 */

 let values = []; 


function setup(){
    createCanvas(600, 600); 
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height); 
    }


}


function draw(){
    background(0); 
    for (let j = 0; j < values.length; j++){
        stroke(255); 
        line(i, height, i, height - values[i]);
    }
}

