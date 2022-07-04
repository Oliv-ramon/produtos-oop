import Item from "./Item";

export default class Order {
  items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  getTotal() {
    const prices = this.items.map((item) => item.price);
    return prices.reduce((prev, curr) => prev + curr);
  }

  getTaxes() {
    const categorieToTaxRate = {
      Beer: 0.2,
      Cigar: 0.25,
      Eletronics: 0.3,
      Water: 0,
    };

    let taxes = 0;

    this.items.forEach(({ price, category }) => {
      const taxRate = categorieToTaxRate[category];

      taxes += taxRate * price;
    });

    return taxes;
  }
}
