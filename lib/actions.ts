"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text: FormDataEntryValue | null) {
  if (typeof text === "string") {
    return !text || text.trim() === "";
  }
}

export async function shareMeal(prevState: unknown, formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instruction"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    typeof meal.creator_email !== "string" ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    !(meal.image instanceof File) ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
