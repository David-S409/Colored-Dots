let jsonPage = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json';
let colorData;
let dots = [];
let dot;
let idList = {};

//reduce number of dots by 0
let reduction = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON(jsonPage,setData);
}

function setData(data) {
  print("Data has been got");
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
  testDistance();
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

function testDistance()
{
  for (let i = 0; i < dots.length; i++) 
  {
    for (let j = 0; j < dots.length; j++) 
    {
    //  print(i, j);
      if (i != j) {
      //  print("1nd if");
        if (dots[i].measureDistance(dots[j]) < 65) 
        {
          stroke(255);
           line(dots[i].x, dots[i].y, dots[j].x, dots[j].y)
          dots[i].nearestDots.push(dots[j]);
          dots[j].nearestDots.push(dots[i]);
        //  print("2nd if");
        }
      }
    }
  }
}
