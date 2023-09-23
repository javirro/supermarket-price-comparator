export enum Supermarkets {
  gadis = "Gadis",
  carrefour = "Carrefour",
  alcampo = "Alcampo",
}

export interface Items {
  name: string;
  price: number;
  brand: string;
  other?: string;
}
