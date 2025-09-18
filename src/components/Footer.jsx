const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1440px] bg-white font-poppins text-gray-800">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-[78px] text-center md:grid-cols-4 md:text-left">
          {/* Column 1: Logo */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-sky-600">LOGO</h2>
            <p className="mb-2 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="mt-[25px] text-gray-500">@Lorem</p>
          </div>

          {/* Column 2: About us */}
          <div>
            <h3 className="mb-4 text-lg font-bold">About us</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-gray-400">Lorem</li>
              <li className="cursor-pointer hover:text-gray-400">Portfolio</li>
              <li className="cursor-pointer hover:text-gray-400">Careers</li>
              <li className="cursor-pointer hover:text-gray-400">Contact us</li>
            </ul>
          </div>

          {/* Column 3: Contact us */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact us</h3>
            <p className="mb-2 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="mt-[11px] text-gray-600">+908 89097 890</p>
          </div>

          {/* Column 4: Social Icons */}
          <div className="flex flex-col justify-end gap-4">
            <div className="flex justify-center gap-4 md:justify-start">
              {[
                { icon: "fa-facebook-f", href: "#" },
                { icon: "fa-twitter", href: "#" },
                { icon: "fa-instagram", href: "#" },
                { icon: "fa-linkedin-in", href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-colors hover:bg-gray-300 hover:shadow-lg"
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        <p>Copyright ©2021 Lorem All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
