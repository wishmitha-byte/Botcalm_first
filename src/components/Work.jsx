import cm1 from "../assets/cm1.png";
import cm2 from "../assets/cm2.png";
import cm3 from "../assets/cm3.png";
import cm4 from "../assets/cm4.png";

const GoodCompanySection = () => {
  return (
    <section
      id="blog"
      className="relative mx-auto max-w-[1440px] bg-white py-20 overflow-hidden font-poppins"
    >
      {/* Container */}
      <div className="container relative mx-auto flex flex-col items-center justify-center px-4 text-center">
        <div className="relative z-10 max-w-6xl">
          {/* Heading */}
          <p className="mb-12 text-3xl font-medium leading-tight text-black md:text-3xl">
            You will be in good Company
          </p>

          {/* Background blur */}
          <div className="absolute -bottom-10 -left-90 h-80 w-80 rounded-full bg-lime-100 opacity-50 blur-2xl z-0"></div>

          {/* Logos grid */}
          <div className="grid grid-cols-2 justify-items-center gap-10 md:grid-cols-2 md:gap-[115px] md:-space-y-10 lg:grid-cols-4">
            <img
              src={cm1}
              alt="Company 1"
              className="w-24 md:w-32 lg:w-36"
            />
            <img
              src={cm2}
              alt="Company 2"
              className="w-24 md:w-32 lg:w-36"
            />
            <img
              src={cm3}
              alt="Company 3"
              className="w-24 md:w-32 lg:w-36"
            />
            <img
              src={cm4}
              alt="Company 4"
              className="w-24 md:w-32 lg:w-36"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoodCompanySection;
