noseX = 0;
noseY = 0;

leftEyeX = 0;
leftEyeY = 0;
rightEyeX = 0;
rightEyeY = 0;

function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        leftEyeX = results[0].pose.leftEye.x-10;
        leftEyeY = results[0].pose.leftEye.y-10;
        rightEyeX = results[0].pose.rightEye.x-10;
        rightEyeY = results[0].pose.rightEye.y-10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        console.log("left eye x = " + leftEyeX);
        console.log("left eye y = " + leftEyeY);
        console.log("right eye x = " + rightEyeX);
        console.log("right eye y = " + leftEyeY);
    }
}


function modelLoaded(){
    console.log('PoseNet is initialised!');
    
}
function draw(){
    //move image by the width of image to the left
  translate(video.width, 0);
  //then scale it by -1 in the x-axis
  //to flip the image
  scale(-1, 1);
    image(video, 0, 0, 300, 300);

}

function take_snapshot(){
    save('I am a detective');
}

