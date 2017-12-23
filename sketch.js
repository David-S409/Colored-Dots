let redBeams = [];
let greenBeams = []
let blueBeams = [];
let redBeam, greenBeam, blueBeam;


function setup() {
  createCanvas(windowWidth, windowHeight);
  redBeam = new RedBeam(random(width - 200), random(height - 200), 400);
  redBeams.push(redBeam);

  greenBeam = new GreenBeam(random(width - 200), random(height - 200), 400);
  greenBeams.push(greenBeam);

  blueBeam = new BlueBeam(random(width - 200), random(height - 200), 400);
  blueBeams.push(blueBeam);
}

function draw() {
  background(0);
  goGreen();
  goRed();
  goBlue();
}


function goGreen() {
  for (greenB of greenBeams) {
    greenB.paint();
    greenB.update();
  }
}

function goBlue() {
  for (blueB of blueBeams) {
    blueB.paint();
    blueB.update();
  }
}

function goRed() {
  for (redB of redBeams) {
    redB.paint();
    redB.update();
  }
}
