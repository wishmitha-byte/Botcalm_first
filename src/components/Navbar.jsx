import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Constrain width */}
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-8 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-sky-500">LOGO</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700 items-center">
          {["Home", "About us", "Services", "Blog"].map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className="relative cursor-pointer"
            >
              <a
                href="#"
                className={`${
                  active === item ? "text-sky-500 font-semibold" : "hover:text-sky-500"
                }`}
              >
                {item}
              </a>
              {active === item && (
                <span className="absolute -top-2 -left-2 w-2 h-2 bg-sky-500 rounded-full"></span>
              )}
            </li>
          ))}

          {/* Contact Us button */}
          <li>
            <a
              href="#"
              className="px-4 py-2 bg-sky-400 text-white rounded-lg shadow"
            >
              Contact us
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-sky-500 text-white"
          onClick={() => setActive(active === "menu" ? "" : "menu")}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {active === "menu" && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-6 bg-white shadow-md">
          {["Home", "About us", "Services", "Blog"].map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className="relative cursor-pointer"
            >
              <a
                href="#"
                className={`${
                  active === item ? "text-sky-500 font-semibold" : "hover:text-sky-500"
                }`}
              >
                {item}
              </a>
              {active === item && (
                <span className="absolute -top-2 -left-2 w-2 h-2 bg-sky-500 rounded-full"></span>
              )}
            </li>
          ))}

          {/* Contact Us button */}
          <li>
            <a
              href="#"
              className="px-4 py-2 bg-sky-400 text-white rounded-lg shadow"
            >
              Contact us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
