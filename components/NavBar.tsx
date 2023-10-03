import Link from "next/link";

const NavBar = () => {
  const navbarStyles =
    "sm:inline hover:underline hover:text-red-500 font-bold sm:ml-16 sm:first:ml-0";

  return (
    <div>
      <nav className="text-center mb-4 text-xl">
        <ul>
          <li className={navbarStyles}>
            <Link href="/">Home</Link>
          </li>
          <li className={navbarStyles}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={navbarStyles}>
            <Link href="/prior-experience">Prior experience</Link>
          </li>
        </ul>
      </nav>
      <hr className="border-gray-400" />
    </div>
  );
};

export default NavBar;
