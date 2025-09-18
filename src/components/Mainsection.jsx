import hero from '../assets/hero.svg';
import hero2 from '../assets/hero2.svg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-[url('./assets/background.svg')] bg-cover bg-center py-20 overflow-hidden font-poppins"
    >
      {/* Right side decoration (hero2) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-auto">
        <img src={hero2} alt="Hero decoration" className="hidden lg:block" />
      </div>

      {/* Content wrapper (max 1440px) */}
      <div className="container mx-auto max-w-[1440px] px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left: Hero image (mobile only) */}
        <div className="flex-1 flex justify-center items-center lg:hidden relative">
          <div className="hidden lg:block w-90 h-90 bg-red-100 blur-2xl rounded-full bottom-0 left-92 opacity-50 z-0"></div>
          <img
            src={hero}
            alt="Hero illustration"
            className="w-full max-w-md lg:max-w-lg bottom-[500px] z-50 -mt-50"
          />
        </div>

        {/* Center: Text content */}
        <div className="flex-1 text-center lg:text-left relative">
          {/* Background blur */}
          <div className="absolute w-90 h-90 bg-violet-100 blur-2xl rounded-full bottom-90 left-10 opacity-50 z-0"></div>

          {/* Heading */}
          <h1 className="relative z-50 mb-15 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 font-poppins">
            Experienced <span className="text-sky-600">mobile and web</span> applications and website builders measuring.
          </h1>

          {/* Paragraph */}
          <p className="relative mb-[65px] max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl font-poppins font-normal leading-loose text-gray-600">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android &amp; IOS.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="bg-sky-600 text-white px-6 sm:px-8 py-3 rounded-lg font-normal shadow-lg hover:bg-sky-600 transition-colors duration-200"
            >
              Contact us
            </a>
            <a
              href="#"
              className="bg-white text-sky-600 px-6 sm:px-8 py-3 rounded-lg font-normal border-1 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              View more
            </a>
          </div>
        </div>

        {/* Right: Hero image (desktop only) */}
        <div className="flex-1 justify-center items-center hidden lg:block relative">
          {/* Background blur */}
          <div className="absolute top-20 left-50 w-90 h-90 bg-yellow-50 blur-2xl rounded-full opacity-100 z-0"></div>

          {/* Image */}
          <div className="z-50">
            <img
              src={hero}
              alt="Hero illustration"
              className="relative w-full max-w-md lg:max-w-lg -top-[30px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
