let jsonPage = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json';
let colorData;
let dots = [];
let dot;

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
  for(let i = 0; i < dots.length; i++) {
    dots[i].paint();
    dots[i].move();
    dots[i].detectDots(dots);
  }
  findDots()

}





function pushDots() {
  if (colorData) {
    if (dots.length != colorData.colors.length) {
      for (let i = 0; i < colorData.colors.length; i++) {
        let col = colorData.colors[i].color;
        let hex = colorData.colors[i].hex;

        dot = new Dot(col, hex, random(width), random(height));
        dots.push(dot);
      }
    }
  }
}


function findDots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].detectDots(dots);
  }

}
