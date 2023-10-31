
class AnObject {
    constructor(x, y, name) {
        
        this.name = name
    }

    create(x, y) {
        this.sprite = new Sprite(x, y, 10)
    }
}