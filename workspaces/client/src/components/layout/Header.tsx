import Image from "next/image";
import { AntiPhish_Logo512 } from "@icons/cards";
import Link from "next/link";

export default function Header() {
  const clearGame = () => {
    // FIXME: Not very elegant, but using normal router would just stuck me in a infinite loop
    //        even if I removed query parameter and push it to load home page
    window.location.href = window.location.origin;
  };

  return (
    <div className="flex justify-center">
      <Link href="/">
        <a onClick={clearGame}>
          <div>
            <Image
              src={AntiPhish_Logo512}
              alt="AntiPhish_Logo512"
              className="ml-2"
              width={300}
              height={300}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
