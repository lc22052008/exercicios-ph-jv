let bowX, bowY;
let pulling = false;
let pullStart = null;
let maxForce = 50;

let arrows = [];
let gravity = 0.45;

let wind = 0;
let windChangeTimer = 0;
let windChangeInterval = 240;

let targets = [];
let score = 0;
let shots = 0;

function setup() {
  createCanvas(900, 500);
  bowX = 120;
  bowY = height / 2;

  textFont("Arial");

  spawnTarget();
  spawnTarget();
  windRandomize();
}

function draw() {
  background(200, 235, 255);

  noStroke();
  fill(100, 200, 100);
  rect(0, height - 60, width, 60);

  windChangeTimer++;
  if (windChangeTimer > windChangeInterval) {
    windRandomize();
    windChangeTimer = 0;
  }

  for (let t of targets) {
    t.update();
    t.display();
  }

  for (let i = arrows.length - 1; i >= 0; i--) {
    arrows[i].update();
    arrows[i].display();

    for (let j = targets.length - 1; j >= 0; j--) {
      if (targets[j].isHitBy(arrows[i])) {
        score += targets[j].points;
        targets.splice(j, 1);
        if (random() < 0.6) spawnTarget();
        arrows.splice(i, 1);
        break;
      }
    }

    if (i < arrows.length && arrows[i].offscreen()) {
      arrows.splice(i, 1);
    }
  }

  drawBow();

  if (pulling && pullStart) {
    push();
    stroke(20);
    strokeWeight(2);
    line(bowX, bowY, mouseX, mouseY);
    pop();

    let distPull = constrain(dist(bowX, bowY, mouseX, mouseY), 0, maxForce * 2);
    let forcePct = map(distPull, 0, maxForce * 2, 0, 1);
    showPowerBar(forcePct);
  }

  drawHUD();
}

function mousePressed() {
  if (dist(mouseX, mouseY, bowX, bowY) < 80) {
    pulling = true;
    pullStart = createVector(mouseX, mouseY);
  }
}

function mouseReleased() {
  if (pulling) {
    let pullVec = createVector(bowX - mouseX, bowY - mouseY);
    let power = constrain(pullVec.mag() / 2, 0, maxForce);
    let dir = pullVec.copy().normalize();
    let v = dir.mult(power * 0.6);

    let a = new Arrow(bowX, bowY, v.x, v.y);
    arrows.push(a);
    shots++;
  }
  pulling = false;
  pullStart = null;
}

function keyPressed() {
  if (key === "R" || key === "r") {
    targets = [];
    spawnTarget();
  }
  if (key === "N" || key === "n") {
    spawnTarget();
  }
}

function drawBow() {
  push();
  translate(bowX, bowY);

  stroke(70, 30, 10);
  strokeWeight(6);
  noFill();
  arc(0, 0, 160, 260, -PI / 2 + 0.2, PI / 2 - 0.2);

  stroke(20);
  strokeWeight(2);
  line(-70, -90, -70, 90);
  line(70, -90, 70, 90);

  if (pulling) {
    stroke(0);
    line(-70, 0, mouseX - bowX, mouseY - bowY);
  } else {
    line(-70, -90, 70, 90);
    line(-70, 90, 70, -90);
  }

  pop();
}

function showPowerBar(pct) {
  push();
  let w = 140;
  let h = 12;
  fill(255);
  stroke(0);
  rect(10, height - 40, w, h);
  noStroke();
  let pw = pct * w;
  fill(200, 50, 50);
  rect(10, height - 40, pw, h);
  fill(0);
  textSize(12);
  textAlign(LEFT, CENTER);
  text("Força: " + nf(pct * 100, 2, 0) + "%", 12, height - 52);
  pop();
}

function drawHUD() {
  push();
  fill(0);
  noStroke();
  textSize(16);
  textAlign(LEFT, TOP);
  text("Pontos: " + score, 12, 12);
  text("Tiros: " + shots, 12, 36);
  text("Alvos: " + targets.length, 12, 60);

  textAlign(RIGHT, TOP);
  textSize(14);
  let dir = wind > 0 ? "→" : wind < 0 ? "←" : "•";
  text("Vento: " + dir + " " + nf(abs(wind), 1, 1), width - 12, 12);
  pop();
}

function windRandomize() {
  wind = random(-0.6, 0.9);
}

function spawnTarget() {
  let x = random(width * 0.5, width - 80);
  let y = random(80, height - 120);
  let r = floor(random(22, 50));
  let points = floor(map(r, 50, 22, 5, 15));
  targets.push(new Target(x, y, r, points));
}

class Arrow {
  constructor(x, y, vx, vy) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.len = 34;
    this.angle = 0;
    this.stuck = false;
  }

  update() {
    if (this.stuck) return;
    this.vel.x += wind * 0.02;
    this.vel.y += gravity * 0.6;

    this.pos.add(this.vel);
    this.angle = this.vel.heading();
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);

    stroke(30);
    strokeWeight(3);
    line(-this.len / 2, 0, this.len / 2, 0);

    fill(80);
    noStroke();
    triangle(
      this.len / 2,
      0,
      this.len / 2 - 8,
      -5,
      this.len / 2 - 8,
      5
    );

    fill(180, 40, 40);
    rect(-this.len / 2 - 1, -4, 6, 8);

    pop();
  }

  offscreen() {
    return (
      this.pos.x < -50 ||
      this.pos.x > width + 50 ||
      this.pos.y > height + 50 ||
      this.pos.y < -50
    );
  }
}

class Target {
  constructor(x, y, r, points) {
    this.pos = createVector(x, y);
    this.r = r;
    this.points = points || 10;

    this.vx = random(-1, 1) * 0.4;
    this.vy = random(-0.3, 0.3);
    this.t = random(1000);
  }

  update() {
    this.t += 0.02;
    this.pos.x += this.vx + sin(this.t) * 0.2;
    this.pos.y += this.vy;

    this.pos.x = constrain(this.pos.x, width * 0.5, width - 40);
    this.pos.y = constrain(this.pos.y, 80, height - 100);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);

    noStroke();
    fill(220, 60, 60);
    ellipse(0, 0, this.r * 2);

    fill(255);
    ellipse(0, 0, this.r * 1.4);

    fill(220, 160, 0);
    ellipse(0, 0, this.r * 0.8);

    fill(0);
    ellipse(0, 0, this.r * 0.35);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(12);
    text(this.points + " pts", 0, this.r + 14);

    pop();
  }

  isHitBy(arrow) {
    let tipX = arrow.pos.x + cos(arrow.angle) * arrow.len / 2;
    let tipY = arrow.pos.y + sin(arrow.angle) * arrow.len / 2;
    let d = dist(tipX, tipY, this.pos.x, this.pos.y);
    return d < this.r * 0.6;
  }
}
