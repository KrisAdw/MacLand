import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={25} height={25}></Image>
        </Link>

        {/* Link */}
        <ul>
            {navLinks.map(({label}) => (
                <li key={label}>
                    <Link href="/">{label}</Link>
                </li>
            ))}
        </ul>

        <div className="flex-center gap-3">
            <button>
                <Image src="/search.svg" alt="Search" width={25} height={25}></Image>
            </button>
            <button>
                <Image src="/cart.svg" alt="Cart" width={25} height={25}></Image>
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
