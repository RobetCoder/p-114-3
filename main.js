function preload(){
moustache = loadImage('https://i.postimg.cc/HLBcBhnB/image.jpg');
}
function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
video = createCapture(VIDEO);
video.center;
video.hide();
video.size(400, 400);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

    function take_snapshot(){
    save('myFilter.png');}

    function draw(){
        image(video, 0 , 0, 400, 400);
        image(moustache, noseX, noseY, 40, 40);
    }
    function modelLoaded(){
        console.log('PoseNet is Initialized');    }
        function gotPoses(result){
            if (result.length > 0){
                console.log(result);
                console.log("nose x axis is" + result[0].pose.nose.x);
                console.log("nose y axis is " + result[0].pose.nose.y);
            }
        }
        noseX=0;
        noseY=0;
        function gotPoses(results){
            if(results.length>0){
                    console.log(results);
                    noseX = results[0].pose.nose.x-15;
      noseY = results[0].pose.nose.y-15;
console.log("nose X = "+ noseX);
console.log("nose Y = "+ noseY);

            }
        }