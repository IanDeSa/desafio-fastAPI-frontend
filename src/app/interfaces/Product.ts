export interface IProduct {
  id?: number;
  name: string;
  category_id: number;
  price: number;
  serie: number;
}

export interface IProductSend {
  name: string;
  category_id: number;
  price: number;
  serie: number;
}