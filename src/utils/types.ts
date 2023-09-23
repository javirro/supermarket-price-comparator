export enum Supermarkets {
  gadis = "Gadis",
  carrefour = "Carrefour",
  alcampo = "Alcampo",
  mercadona = "Mercadona",
}

export interface Items {
  name: string;
  price: number;
  brand: string;
  other?: string;
}
