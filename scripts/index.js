

function setup() {
    var canvas = createCanvas(800, 600)
    canvas.parent('p5playCanvas')
    angleMode(DEGREES)
    frameRate(60)

    player = new Sprite(width/2, height/2, 20, 20)
    enemy = new Sprite(80,200, 20)
}

function draw() {
    background(252)

    if (mouse.presses()) {

        player.moveTo(mouse.x, mouse.y, 5)

    }

    let distanceFromPlayer = dist(
        enemy.position.x, enemy.position.y, 
        player.position.x, player.position.y
    )

    if(distanceFromPlayer <= 50){
        console.log("fiar ma lazorssss")
    }

}
