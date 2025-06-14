import Link from "next/link";

const MealsPage = () => {
  return (
    <div>
      <h1>Meals Page</h1>
      <Link href="/meals/blog-1">1</Link>
      <Link href="/meals/blog-2">2</Link>
      <Link href="/meals/blog-3">3</Link>
    </div>
  );
};

export default MealsPage;
