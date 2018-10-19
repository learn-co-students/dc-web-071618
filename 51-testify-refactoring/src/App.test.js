import GildedRose from './App';

describe('An inventory system ...', () => {

    it("test_normal_item_before_sell_date", () => {
        let item = new GildedRose(5, 10, 'normal');
        item.tick();
        expect(item.quality).toBe(9);
        expect(item.sellIn).toBe(4);
    });

    it("test_normal_item_on_sell_date", () => {
        let item = new GildedRose(0, 10, 'normal');
        item.tick();
        expect(item.quality).toBe(8);
        expect(item.sellIn).toBe(-1);
    });

    it("test_normal_item_after_sell_date", () => {
        let item = new GildedRose(-10, 10, 'normal');
        item.tick();
        expect(item.quality).toBe(8);
        expect(item.sellIn).toBe(-11);
    });

    it("test_normal_item_of_zero_quality", () => {
        let item = new GildedRose(5, 0, 'normal');
        item.tick();
        expect(item.quality).toBe(0);
        expect(item.sellIn).toBe(4);
    });

    it("test_brie_before_sell_date", () => {
        let item = new GildedRose(5, 10, 'Aged Brie');
        item.tick();
        expect(item.quality).toBe(11);
        expect(item.sellIn).toBe(4);
    });

    it("test_brie_before_sell_date_with_max_quality", () => {
        let item = new GildedRose(5, 50, 'Aged Brie');
        item.tick();
        expect(item.quality).toBe(50);
        expect(item.sellIn).toBe(4);
    });

    it("test_brie_on_sell_date", () => {
        let item = new GildedRose(0, 10, 'Aged Brie');
        item.tick();
        expect(item.quality).toBe(12);
        expect(item.sellIn).toBe(-1);
    });

    it("test_brie_on_sell_date_near_max_quality", () => {
        let item = new GildedRose(0, 49, 'Aged Brie');
        item.tick();
        expect(item.quality).toBe(50);
        expect(item.sellIn).toBe(-1);
    });

    it("test_brie_on_sell_date_with_max_quality", () => {
        let item = new GildedRose(0, 50, 'Aged Brie');
        item.tick();
        expect(item.quality).toBe(50);
        expect(item.sellIn).toBe(-1);
    });

    it("test_brie_after_sell_date", () => {
        let item = new GildedRose(-10, 10, 'Aged Brie');
        item.tick();
        expect(item.quality).toBe(12);
        expect(item.sellIn).toBe(-11);
    });

    it("test_brie_after_sell_date_with_max_quality", () => {
        let item = new GildedRose(-10, 50, 'Aged Brie');
        item.tick();
        expect(item.quality).toBe(50);
        expect(item.sellIn).toBe(-11);
    });

    it("test_sulfuras_before_sell_date", () => {
        let item = new GildedRose(5, 80, 'Sulfuras, Hand of Ragnaros');
        item.tick();
        expect(item.quality).toBe(80);
        expect(item.sellIn).toBe(5);
    });

    it("test_sulfuras_on_sell_date", () => {
        let item = new GildedRose(0, 80, 'Sulfuras, Hand of Ragnaros');
        item.tick();
        expect(item.quality).toBe(80);
        expect(item.sellIn).toBe(0);
    });

    it("test_sulfuras_after_sell_date", () => {
        let item = new GildedRose(-10, 80, 'Sulfuras, Hand of Ragnaros');
        item.tick();
        expect(item.quality).toBe(80);
        expect(item.sellIn).toBe(-10);
    });

    it("test_backstage_pass_long_before_sell_date", () => {
        let item = new GildedRose(11, 10, 'Backstage passes to a TAFKAL80ETC concert');
        item.tick();
        expect(item.quality).toBe(11);
        expect(item.sellIn).toBe(10);
    });

    it("test_backstage_pass_medium_close_to_sell_date_upper_bound", () => {
        let item = new GildedRose(10, 10, 'Backstage passes to a TAFKAL80ETC concert');
        item.tick();
        expect(item.quality).toBe(12);
        expect(item.sellIn).toBe(9);
    });

    it("test_backstage_pass_medium_close_to_sell_date_upper_bound_at_max_quality", () => {
        let item = new GildedRose(10, 50, 'Backstage passes to a TAFKAL80ETC concert');
        item.tick();
        expect(item.quality).toBe(50);
        expect(item.sellIn).toBe(9);
    });

    it("test_backstage_pass_medium_close_to_sell_date_lower_bound", () => {
        let item = new GildedRose(6, 10, 'Backstage passes to a TAFKAL80ETC concert');
        item.tick();
        expect(item.quality).toBe(12);
        expect(item.sellIn).toBe(5);
    });

    it("test_backstage_pass_medium_close_to_sell_date_lower_bound_at_max_quality", () => {
        let item = new GildedRose(6, 50, 'Backstage passes to a TAFKAL80ETC concert');
        item.tick();
        expect(item.quality).toBe(50);
    });

    it("test_backstage_pass_very_close_to_sell_date_upper_bound", () => {
        let item = new GildedRose(5, 10, 'Backstage passes to a TAFKAL80ETC concert');
        item.tick();
        expect(item.quality).toBe(13);
        expect(item.sellIn).toBe(4);
    });

    it("test_backstage_pass_very_close_to_sell_date_upper_bound_at_max_quality", () => {
        let item = new GildedRose(5, 50, 'Backstage passes to a TAFKAL80ETC concert');
        item.tick();
        expect(item.quality).toBe(50);
        expect(item.sellIn).toBe(4);
    });

    it("test_backstage_pass_very_close_to_sell_date_lower_bound", () => {
        let item = new GildedRose(1, 10, 'Backstage passes to a TAFKAL80ETC concert');
        item.tick();
        expect(item.quality).toBe(13);
        expect(item.sellIn).toBe(0);
    });

    it("test_backstage_pass_very_close_to_sell_date_lower_bound_at_max_quality", () => {
        let item = new GildedRose(1, 50, 'Backstage passes to a TAFKAL80ETC concert');
        item.tick();
        expect(item.quality).toBe(50);
        expect(item.sellIn).toBe(0);
    });

    it("test_backstage_pass_on_sell_date", () => {
        let item = new GildedRose(0, 10, 'Backstage passes to a TAFKAL80ETC concert');
        item.tick();
        expect(item.quality).toBe(0);
        expect(item.sellIn).toBe(-1);
    });

    it("test_backstage_pass_after_sell_date", () => {
        let item = new GildedRose(-10, 10, 'Backstage passes to a TAFKAL80ETC concert');
        item.tick();
        expect(item.quality).toBe(0);
        expect(item.sellIn).toBe(-11);
    });

    it.skip("test_conjured_item_before_sell_date", () => {
        let item = new GildedRose(5, 10, 'Conjured Mana Cake');
        item.tick();
        expect(item.quality).toBe(8);
        expect(item.sellIn).toBe(4);
    });

    it.skip("test_conjured_item_at_zero_quality", () => {
        let item = new GildedRose(5, 0, 'Conjured Mana Cake');
        item.tick();
        expect(item.quality).toBe(0);
        expect(item.sellIn).toBe(4);
    });

    it.skip("test_conjured_item_on_sell_date", () => {
        let item = new GildedRose(0, 10, 'Conjured Mana Cake');
        item.tick();
        expect(item.quality).toBe(6);
        expect(item.sellIn).toBe(-1);
    });

    it.skip("test_conjured_item_on_sell_date_at_zero_quality", () => {
        let item = new GildedRose(0, 0, 'Conjured Mana Cake');
        item.tick();
        expect(item.quality).toBe(0);
        expect(item.sellIn).toBe(-1);
    });

    it.skip("test_conjured_item_after_sell_date", () => {
        let item = new GildedRose(-10, 10, 'Conjured Mana Cake');
        item.tick();
        expect(item.quality).toBe(6);
        expect(item.sellIn).toBe(-11);
    });

    it.skip("test_conjured_item_after_sell_date_at_zero_quality", () => {
        let item = new GildedRose(-10, 0, 'Conjured Mana Cake');
        item.tick();
        expect(item.quality).toBe(0);
        expect(item.sellIn).toBe(-11);
    });

});
