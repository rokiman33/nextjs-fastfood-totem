import { db } from "@/lib/prisma";

export const getRestaurantBySlug = async (slug: string) => {
  const restaurant = await db.store.findFirst({ where: { slug } });
  return restaurant;
};