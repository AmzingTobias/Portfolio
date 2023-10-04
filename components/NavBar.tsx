import Link from "next/link";

const NavBar = () => {
  const navbarStyles =
    "sm:inline hover:underline hover:text-red-500 font-bold sm:ml-16 sm:first:ml-0";

  return (
    <div>
      <nav className="text-center mb-4 text-xl">
        <ul>
          <li className={navbarStyles}>
            <Link href="/">About me</Link>
          </li>
          <li className={navbarStyles}>
            <Link href="/projects">My project's</Link>
          </li>
          <li className={navbarStyles}>
            <Link href="/prior-experience">My experience</Link>
          </li>
        </ul>
      </nav>
      <hr className="border-gray-400" />
    </div>
  );
};

export default NavBar;
