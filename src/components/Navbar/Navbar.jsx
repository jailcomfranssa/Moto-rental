import PropTypes from "prop-types";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const NavLinks = [
  {
    id: "1",
    name: "Inicio",
    link: "/#",
  },
  {
    id: "2",
    name: "Motos",
    link: "/#motos",
  },
  {
    id: "3",
    name: "Sobre",
    link: "/#sobre",
  },
  {
    id: "4",
    name: "Booking",
    link: "/#booking",
  },
];

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-200">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-serif">Moto Rental</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                    href={data.link}
                  >
                    {" "}
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Navbar;
