class Dot {
  constructor(_id, _name, _hex, _x, _y, _r = 25) {
    this.id = _id;
    this.name = _name;
    this.hex = _hex;
    this.x = _x;
    this.y = _y;
    this.xSpeed = random(-3,3);
    this.ySpeed = random(-5, 5);
    this.nearestDots = [];
	this.radius = _r;
  }

  paint() {
    stroke(255);
    fill(this.hex);
    ellipse(this.x, this.y, this._r);

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
  
  changeSize(r) {
	  this.r = r;
  }

  measureDistance(_other) {
    let other = _other;
    let distance = dist(this.x, this.y, other.x, other.y);

    return distance;
  }
}
