import { api } from "./client";

export type PendingSellerDto = {
  id: number;
  fullName?: string | null;
  email?: string | null;
  shopName?: string | null;
  description?: string | null;
};

export async function getPendingSellers(): Promise<PendingSellerDto[]> {
  const { data } = await api.get("/api/Admin/pending-sellers");
  return data;
}

export async function approveSeller(id: number) {
  const { data } = await api.post(`/api/Admin/approve-seller/${id}`); //parametre verdiğimiz için eğik tek tırnak

  return data;
}
