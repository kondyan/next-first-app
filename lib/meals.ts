import MealItemI from "@/components/meals/types";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals(): Promise<MealItemI[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare<[], MealItemI>("SELECT * FROM meals").all();
}

export function getMeal(slug: string) {
  return db
    .prepare<typeof slug, MealItemI>("SELECT * FROM meals WHERE slug = ?")
    .get(slug);
}
