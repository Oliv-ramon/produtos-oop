import TaxItem from "./TaxItem";

export default class Order {
  items: TaxItem[];

  constructor() {
    this.items = [];
  }

  addItem(item: TaxItem) {
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

    this.items.forEach((item) => {
      const taxRate = categorieToTaxRate[item.category];
      taxes += item.calculateTax(taxRate);
    });

    return taxes;
  }
}
