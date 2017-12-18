class Dot {
  constructor(_name, _hex, _x, _y) {
    this.name = _name;
    this.hex = _hex;
    this.x = _x;
    this.y = _y;
    this.xSpeed = random(-3,3);
    this.ySpeed = random(-5, 5);
    this.closeDots = [];
  }

  paint() {
    stroke(255);
    fill(this.hex);
    ellipse(this.x, this.y, 25);

    noStroke();
    fill(255);
    text(this.name, this.x - 20, this.y - 20);
  }

  move() {


    if (this.x > width || this.x < 0) {
      this.xSpeed = -this.xSpeed;
    }

    if (this.y > height || this.y < 0) {
      this.ySpeed = -this.ySpeed;
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;

  }

  detectDots(_allDots) {
    let dotList = _allDots;


    for (let i = 0; i < dotList.length; i++) {
      if (dist(this.x, this.y, dotList[i].x, dotList[i].y) < 3 && !this.closeDots.includes(dotList[i]) ) {
        this.closeDots.push(dotList[i]);
      }
    }


    for (let i = this.closeDots.length; i = 0; i--) {
      if (this.closeDots) {
        if (dist(this.x, this.y, this.closeDots[i].dot.x, this.closeDots[i].dot.y) > 3) {
          this.closeDots.splice(this.closeDots.indexOf(closeDots[i]), 1);
        }
      }
    }


  }
}
