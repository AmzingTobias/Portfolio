const NavBar = () => {
  const navbarStyles =
    "sm:inline hover:underline hover:text-red-500 font-bold sm:ml-16 sm:first:ml-0";

  return (
    <div>
      <nav className="text-center mb-4 text-xl">
        <ul>
          <li className={navbarStyles}>
            <a href="/">Home</a>
          </li>
          <li className={navbarStyles}>
            <a href="/projects">Projects</a>
          </li>
          <li className={navbarStyles}>
            <a href="/prior-experience">Prior experience</a>
          </li>
        </ul>
      </nav>
      <hr className="border-gray-400" />
    </div>
  );
};

export default NavBar;
