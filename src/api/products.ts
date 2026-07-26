import axios from "axios";
import type { Product } from "../types/product";

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data;
};

export const fetchCategories = async (): Promise<string[]> => {
  const res = await axios.get(`${BASE_URL}/products/categories`);
  return res.data;
};

export const fetchProductsByCategory = async (
  category: string,
): Promise<Product[]> => {
  const res = await axios.get(`${BASE_URL}/products/category/${category}`);
  return res.data;
};
