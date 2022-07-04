type Category = "Beer" | "Cigar" | "Eletronics" | "Water";

export default class Item {
  category: Category;
  description: string;
  price: number;

  constructor(category: Category, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }
}
