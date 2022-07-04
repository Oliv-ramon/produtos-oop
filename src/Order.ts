import { Item, TaxItem } from "./Item";

export default class Order {
  items: (Item | TaxItem)[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item | TaxItem) {
    this.items.push(item);
  }

  getTotal() {
    const prices = this.items.map((item) => item.price);
    return prices.reduce((prev, curr) => prev + curr);
  }

  getTaxes() {
    let taxes = 0;

    this.items.forEach((item) => {
      if ("calculateTax" in item) taxes += item.calculateTax();
    });

    return taxes;
  }
}
