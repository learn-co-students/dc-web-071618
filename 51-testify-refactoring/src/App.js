import './App.css';

class GildedRose {
    constructor(sellIn, quality, name) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    tick () {
        if (this.name === 'normal') { return this.normalTick(); }
        if (this.name === 'Aged Brie') { return this.brieTick(); }
        if (this.name === 'Sulfuras, Hand of Ragnaros') {
            return this.sulfurasTick();
        }
        if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
            return this.backstageTick();
        }
   }

    normalTick () {
        this.sellIn = this.sellIn - 1;
        this.quality = this.quality - 1;
        if (this.sellIn <= 0) { this.quality = this.quality - 1; }
        if (this.quality < 0) { this.quality = 0; }
    }

    brieTick() {
        this.sellIn = this.sellIn - 1;
        this.quality = this.quality + 1;
        if (this.sellIn <= 0) { this.quality = this.quality + 1; }
        if (this.quality > 50) { this.quality = 50; }
    }

    sulfurasTick() { }

    backstageTick() {
        if (this.sellIn > 10) { this.quality = this.quality + 1; }
        if (this.sellIn > 5 && this.sellIn <= 10) {
            this.quality = this.quality + 2;
        } else if (this.sellIn <= 5) {
            this.quality = this.quality + 3;
        }
        if (this.sellIn <= 0) { this.quality = 0; }
        if (this.quality > 50) { this.quality = 50; }
        this.sellIn = this.sellIn - 1;
    }

}

export default GildedRose;
