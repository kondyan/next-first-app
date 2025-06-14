import Link from "next/link";
import logoImg from "../assets/logo.png";
import Image from "next/image";

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <Image src={logoImg.src} alt="Logo" width={300} height={300} />
        NextLevel Food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
