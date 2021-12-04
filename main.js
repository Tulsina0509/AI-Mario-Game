img=**;
noseX= 0;
noseY=0;
marioX=325;
marioY=325

function preload() {
	img=loadImage("mario05.png")
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	createCanvas(650,400);
	video=createCapture(VIDEO);
	video.size(600,300);
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	
	poseNet = nl5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function modelLoaded(){
	console.log('Model Loaded!);
		    }

function draw() {
	game()
}






