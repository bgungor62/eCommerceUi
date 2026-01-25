
export type ProductDto = {
  pid: number;
  name: string;
  stock: number;
  price: number;
  imageUrl?: string | null;
  description?: string | null;
  categoryName: string;
  sellerShopName: string;
};

export type CreateProductDto = {
  name: string;
  stock: number;
  description?: string | null;
  price: number;
  categoryId: number;
  imageUrl?: string | null;
};




