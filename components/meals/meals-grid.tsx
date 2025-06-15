import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";
import MealItemI from "./types";

interface MealsGridProps {
  meals: MealItemI[];
}

const MealsGrid: React.FC<MealsGridProps> = ({ meals }) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal: MealItemI) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
