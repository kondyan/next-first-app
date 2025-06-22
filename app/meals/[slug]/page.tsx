import Image from "next/image";
import styles from "./page.module.css";
import { getMeal } from "@/lib/meals";
import MealItemI from "@/components/meals/types";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const meal = getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal?.title,
    description: meal?.summary,
  };
}

const DynamicMealsPage = ({ params }: { params: { slug: string } }) => {
  const meal: undefined | MealItemI =
    typeof params?.slug === "string" ? getMeal(params.slug) : undefined;

  if (!meal) {
    notFound();
  }

  if (typeof meal.instructions === "string") {
    meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image
            src={typeof meal.image === "string" ? meal.image : ""}
            alt={typeof meal.title === "string" ? meal.title : ""}
            fill
          />
        </div>
        <div className={styles.headerText}>
          <h1>{typeof meal.title === "string" ? meal.title : ""}</h1>
          <p className={styles.creator}>
            by{" "}
            <a href={`mailto: ${meal.creator_email}`}>
              {typeof meal.creator_email === "string" ? meal.creator_email : ""}
            </a>
          </p>
          <p className={styles.summary}>
            {typeof meal.summary === "string" ? meal.summary : ""}
          </p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html:
              typeof meal.instructions === "string" ? meal.instructions : "",
          }}
        ></p>
      </main>
    </>
  );
};

export default DynamicMealsPage;
