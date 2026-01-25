import { api } from "./client";

export type MeDto = {
  fullName: string;
  email: string;
  sellerProfile: SellerProfileDto | null;
};
export type SellerProfileDto = {
  id: number;
  shopName: string;
  description?: string | null;
  status: string;
};

export type CreateSellerProfileDto = {
  shopName: string;
  description?: string | null;
};

export async function getMe(): Promise<MeDto> {
  const { data } = await api.get("/api/Profile/me");
  return data;
}

export async function becomeSeller(dto: CreateSellerProfileDto) {
  const { data } = await api.post("/api/Profile/become-seller", dto);
  return data;
}
