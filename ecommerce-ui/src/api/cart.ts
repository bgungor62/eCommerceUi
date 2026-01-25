import { api } from "./client";

export type AddToCartDto = {
  productId: number;
  quantity: number;
};
export type RemoveFromCartDto = {
  productId: number;
  quantity?: number;
};
export type CartItemDto = {
  productId: number;
  productName: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
  imageUrl: string;
};
export type CartSummaryDto = {
  items?: CartItemDto[];
  totalPrice: number;
};
export async function addToCart(dto: AddToCartDto) {
  if (!Number.isFinite(dto.productId) || dto.productId < 1)
    throw new Error("Geçersiz ürün id.");
  if (!Number.isFinite(dto.quantity) || dto.quantity < 1)
    throw new Error("Geçersiz adet eklemesi.");
  const { data } = await api.post("/api/Cart/addToCart", dto);
  return data;
}

export async function removeFromCart(dto: RemoveFromCartDto) {
  const { data } = await api.post("/api/Cart/remove", dto);
  return data;
}

export async function getMyCart(): Promise<CartSummaryDto[]> {
  const { data } = await api.get<CartSummaryDto[]>("/api/Cart/myCart");
  return data;
}

export async function name(): Promise<unknown> {
  const { data } = await api.get("/api/Cart/checkout");
  return data;
}
