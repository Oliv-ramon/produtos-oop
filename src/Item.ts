type Category = "Beer" | "Cigar" | "Eletronics" | "Water";

export class Item {
  category: Category;
  description: string;
  price: number;

  constructor(category: Category, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }
}

export class TaxItem extends Item {
  constructor(category: Category, description: string, price: number) {
    super(category, description, price);
  }

  calculateTax() {
    return this.price * this.getTax();
  }

  getTax() {
    const categorieToTaxRate = {
      Beer: 0.2,
      Cigar: 0.25,
      Eletronics: 0.3,
    };

    return categorieToTaxRate[this.category];
  }
}

export class Beer extends TaxItem {
  constructor(description: string, price: number) {
    super("Beer", description, price);
  }
}
export class Cigar extends TaxItem {
  constructor(description: string, price: number) {
    super("Cigar", description, price);
  }
}
export class Eletronics extends TaxItem {
  constructor(description: string, price: number) {
    super("Eletronics", description, price);
  }
}
export class Water extends Item {
  constructor(description: string, price: number) {
    super("Water", description, price);
  }
}
