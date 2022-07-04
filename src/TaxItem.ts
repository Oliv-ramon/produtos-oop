import Item from "./Item";

type Category = "Beer" | "Cigar" | "Eletronics" | "Water";

export default class TaxItem extends Item {
  constructor(category: Category, description: string, price: number) {
    super(category, description, price);
  }

  calculateTax(taxRate: number) {
    return this.price * taxRate;
  }
}
