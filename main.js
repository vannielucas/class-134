img = "";
status = "";
objects = [];

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "status:detecting objects";
}
function modelloaded(){
    console.log ("modelloaded");
    status = true;
    objectDetector.detect(video, gotresult);
}
function gotresult (error, results) {
    if(error){
        console.log(error);
    }  
    console.log(results);
    objects = results;
}
function draw(){
    image(video, 0, 0, 380, 380);
        if(status != "")
        {
            r = random(255);
            g = random(255);
            b  = random(255);
            objectDetector,detect(video, gotresult);
            
           for (i = 0; i < objects.length; i++) {
               document.getElementById("status").innerHTML = "Status : Object Detection";
               document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;
               fill("r,g,b");
               percent = floor(objects[i].confidence * 100);
               text(objects[i].label +" "+percent + "% ", objects[i].x, objects[i].y);
               noFill();
               stroke("r,g,b");
               rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
           } 
        }
}
