var car, wall, thickness;
var bullet, speed, weight;

function setup() {
    createCanvas(1500, 400);

    speed = random(223, 321);
    weight = random(30, 52);
    thickness = random(22, 83);

    car = createSprite(50, 200, 150, 25);

    wall = createSprite(1200, 200, thickness, height / 2);

    car.velocityX = speed;

}

function draw() {
    background(0);

    if (car.isTouching(wall)) {
        car.velocityX = 0;

        if (wall.x - car.x < (car.weidth + wall.weidth) / 2) {
            car.velocityX = 0;
        }
        var deformation = 0.5 * weight * speed * speed / 22509;
        if (deformation > 180) {
            car.shapeColor = "red";
        }
        if (deformation < 180 && deformation > 100) {
            car.shapeColor = "yellow";
        }
        if (deformation < 100) {
            car.shapeColor = "green";
        }



    }

    if (hasCollided(bullet, wall)) {

        bullet.velocityX = 0;
        var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

        if (damage > 10) {
            wall.shapeColor = color(225, 0, 0);
        }

        if (damage < 10) {
            wall.shapeColor = color(0, 255, 0);
        }

    }


    hascollied();

    drawSprites();
}

function hasCollided(lbullet, wall) {

    bulletRightEdgs = lbullet.x + lbullet.weidht;
    wallLeftEdge = wall.x;
    if (bulletRightEdgs >= wallLeftEdge) {
        return true
    }
    return false

}