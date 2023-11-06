class Flowers {

    hiveSprite = {x: 400, y: 300}; //TEMPORARY until real hive is gotten

    constructor(){
        this.scale = 0.2;
        this.flowerImgs = [];
    }
    
    preload(){
        this.file = loadJSON('files/flowers.json', "json", () => this.loadFlowers()); //async
    }

    setup(){
        this.flowers = new Group();
        this.flowers.rotationLock = true;

        for(let i = 0; i < 20; i++){
            let flower = new this.flowers.Sprite();
            flower.x = random(0 + flower.w, width - flower.w/2);
            flower.y = random(0 + flower.h/2, height - flower.h/2);

            let distance = dist(this.hiveSprite.x, this.hiveSprite.y, flower.x, flower.y);
            let min = distance - this.file.data[0].commonDist;
            let type = this.file.data[0];
            for (const flowerInfo of this.file.data) {
                let currDist = abs(distance - flowerInfo.commonDist);
                if(currDist < min){
                    min = currDist;
                    type = flowerInfo;
                }
            }

            flower.img = this.flowerImgs[type.name];
            flower.scale = this.scale;
        }
    }

    draw(player){
        player.overlaps(this.flowers)

    }

    //call this function when the JSON file is loaded.
    loadFlowers(){
        for (const flower of this.file.data) {
            this.flowerImgs[flower.name] = loadImage(flower.imgPath);
        }
    }
}