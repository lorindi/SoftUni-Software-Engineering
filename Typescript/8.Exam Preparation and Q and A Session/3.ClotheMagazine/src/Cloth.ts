export class Cloth {
  public color: string;
  public size: number;
  private type: string;

  constructor(color: string, size: number, type: string) {
    this.color = color;
    this.size = size;
    this.type = type;
  }

  toString() {
    return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
  }
}
