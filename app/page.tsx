import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <Link href="/meals">Meals Page</Link>
      <Link href="/meals/share">Meals Share Page</Link>
      <Link href="/meals/community">Meals Community Page</Link>
    </div>
  );
}
