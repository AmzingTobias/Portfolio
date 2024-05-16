import Link from "next/link";

const NavBar = () => {
  const navbarStyles =
    "sm:inline sm:text-white pb-2 last:pb-0 sm:pb-0 underline sm:no-underline hover:underline hover:text-red-500 font-bold sm:ml-16 sm:first:ml-0";

  return (
    <div>
      <nav className="text-center mb-4 text-2xl select-none">
        <ul>
          <li className={navbarStyles}>
            <Link href="/" className="no-underline">
              About me
            </Link>
          </li>
          <li className={navbarStyles}>
            <Link href="/projects" className="no-underline">
              My projects
            </Link>
          </li>
          <li className={navbarStyles}>
            <Link href="/prior-experience" className="no-underline">
              My experience
            </Link>
          </li>
          <li className={navbarStyles}>
            <Link href="/ctf-walkthroughs" className="no-underline">
              CTF walkthroughs
            </Link>
          </li>
        </ul>
      </nav>
      <hr className="border-gray-400" />
    </div>
  );
};

export default NavBar;
