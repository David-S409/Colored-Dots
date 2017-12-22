let jsonPage = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json';
let colorData;
let dots = [];
let dot;
let idList = {};
let reduction = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON(jsonPage,setData);
}

function setData(data) {
  colorData = data;
}



function draw() {
  background(0);
  pushDots();
  for(let i = 0; i < dots.length ; i++) {
    dots[i].paint();
    dots[i].move();
  }
  listNames();
  findClosest();
  //checkClosest();


}


function pushDots() {
  if (colorData) {
    if (dots.length != colorData.colors.length - reduction) {
      for (let i = 0; i < colorData.colors.length - reduction; i++) {
        let col = colorData.colors[i].color;
        let hex = colorData.colors[i].hex;
        dot = new Dot(i, col, hex, random(width), random(height));
        dots.push(dot);
      }
    }
  }
  dot = null;
}


function listNames() {
  if  (idList[0] == null) {
    for (let i = 0; i < dots.length; i++ ) {
      let id = dots[i].id;
      idList[id] = dots[i].name;

    }
  }
}

function findClosest() {

  for (let i = 0; i < dots.length; i++) {
    for (let j = 0; j < dots.length; j++) {
      if (i != j) {
        if (dots[i].measureDistance(dots[j]) < 65 && !dots[i].nearestDots.includes(dots[j])) {
          stroke(255,0,0);
          line(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
          dots[i].nearestDots.push(dots[j]);
          }
        }
        dots[9].nearestDots.forEach(checkClosest);
      }
    }
  }


  function checkClosest(nearestDot) {
    let indexOfNearest;
    let distance = dist(dots[9].x, dots[9].y, nearestDot.x, nearestDot.y);
    //for (let i = dots.length; i = 0; i--) {
    if (distance > 70) {
    //  indexOfNearest = dots[9].nearestDots.indexOf(nearestDot);

    }
   //print(distance);
  //  }
  }
