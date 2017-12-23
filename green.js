
class GreenBeam {
  constructor(_x, _y, _rad) {
    this.x = _x;
    this.y = _y;
    this.rad = _rad;
    this.xSpeed = 3;
    this.ySpeed = 3;
  }

  paint() {
    fill(0, 255, 0, 90);
    ellipse(this.x, this.y, this.rad);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.checkPos();
  }

  checkPos() {
    if (this.x - this.rad/2 < 0 || this.x + this.rad/2 > width ||  this.x < 0 || this.x > width ) {
      this.xSpeed *= -1;
    }

    if (this.y < 0 || this.y > height || this.y - this.rad/2 < 0 || this.y + this.rad / 2 > height) {
      this.ySpeed *= -1;
    }
  }
}
