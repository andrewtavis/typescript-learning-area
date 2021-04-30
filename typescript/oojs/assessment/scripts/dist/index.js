"use strict";
// define variable for ball count paragraph
var para = document.querySelector("p");
var count = 0;
// setup canvas
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight);
// function to generate random number
function random(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
// define Ball constructor
function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}
function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(this, x, y, velX, velY, exists);
    this.color = color;
    this.size = size;
}
// define Ball methods
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};
Ball.prototype.update = function () {
    if (this.x + this.size >= width) {
        this.velX = -this.velX;
    }
    if (this.x - this.size <= 0) {
        this.velX = -this.velX;
    }
    if (this.y + this.size >= height) {
        this.velY = -this.velY;
    }
    if (this.y - this.size <= 0) {
        this.velY = -this.velY;
    }
    this.x += this.velX;
    this.y += this.velY;
};
Ball.prototype.collisionDetect = function () {
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j]) && balls[j].exists) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color =
                    "rgb(" +
                        random(0, 255) +
                        "," +
                        random(0, 255) +
                        "," +
                        random(0, 255) +
                        ")";
            }
        }
    }
};
// define EvilCircle constructor
function EvilCircle(x, y, velX, velY, exists, color, size) {
    if (velX === void 0) { velX = 20; }
    if (velY === void 0) { velY = 20; }
    if (exists === void 0) { exists = true; }
    if (color === void 0) { color = "red"; }
    if (size === void 0) { size = 10; }
    Shape.call(this, x, y, velX, velY, exists);
    this.color = color;
    this.size = size;
}
EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;
// define EvilCircle methods
EvilCircle.prototype.draw = function () {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
};
EvilCircle.prototype.checkBounds = function () {
    if (this.x + this.size >= width) {
        this.x -= this.size;
    }
    if (this.x - this.size <= 0) {
        this.x += this.size;
    }
    if (this.y + this.size >= height) {
        this.y -= this.size;
    }
    if (this.y - this.size <= 0) {
        this.y += this.size;
    }
};
EvilCircle.prototype.setControls = function () {
    var _this = this;
    window.onkeydown = function (e) {
        if (e.key === "a") {
            _this.x -= _this.velX;
        }
        else if (e.key === "d") {
            _this.x += _this.velX;
        }
        else if (e.key === "w") {
            _this.y -= _this.velY;
        }
        else if (e.key === "s") {
            _this.y += _this.velY;
        }
    };
};
EvilCircle.prototype.collisionDetect = function () {
    for (var j = 0; j < balls.length; j++) {
        if (balls[j].exists) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + balls[j].size) {
                balls[j].exists = false;
                count--;
                para.textContent = "Ball count: " + count;
            }
        }
    }
};
// add balls to the canvas
var balls = [];
while (balls.length < 25) {
    var size = random(10, 20);
    var ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size), random(0 + size, height - size), random(-7, 7), random(-7, 7), true, "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")", size);
    balls.push(ball);
    count++;
    para.textContent = "Ball count: " + count;
}
var evilCircSize = 20;
var evilCircSpeed = 20;
var evil = new EvilCircle(random(0 + evilCircSize, width - evilCircSize), random(0 + evilCircSize, height - evilCircSize), evilCircSpeed, evilCircSpeed, true, "red", evilCircSize);
evil.setControls();
function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
    for (var i = 0; i < balls.length; i++) {
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        }
    }
    evil.draw();
    evil.checkBounds();
    evil.collisionDetect();
    requestAnimationFrame(loop);
}
loop();
