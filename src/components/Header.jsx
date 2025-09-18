import { useState, useEffect } from "react";

const Header = () => {
  const [activePage, setActivePage] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
  ];

  // Track active page on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActivePage(link.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-[999] bg-white shadow-sm font-poppins">
      {/* Main container */}
      <div className="container mx-auto max-w-[90%] px-0 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <span className="text-2xl font-bold text-sky-600 cursor-pointer">
          LOGO
        </span>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-15 ml-auto">
          <nav className="flex gap-[30px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-normal text-gray-600 hover:text-sky-600 transition-colors duration-200 group ${
                  activePage === link.name ? "text-sky-600" : ""
                }`}
              >
                {/* Active indicator dot */}
                <span
                  className={`absolute -top-2 -left-2 w-2 h-2 rounded-full bg-teal-400 transition-transform duration-200 ${
                    activePage === link.name ? "scale-100" : "scale-0"
                  }`}
                ></span>
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact button */}
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg font-normal bg-sky-600 text-white shadow-md hover:bg-sky-600 transition-colors duration-200"
          >
            Contact us
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg
            className="relative z-50 w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-end space-y-6 px-6 py-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-medium text-gray-600 hover:text-sky-600 transition-colors duration-200 ${
                activePage === link.name ? "text-sky-600" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white shadow-md hover:bg-sky-600 transition-colors duration-200"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
