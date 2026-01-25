import { api } from "./client";

export type CategoryDto = {
  cid: number;
  name: string;
};

export async function getAll(): Promise<CategoryDto[]> {
  const { data } = await api.get<CategoryDto[]>("/api/Categories");
  return data;
}
