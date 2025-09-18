import star from '../assets/star.png';
import pie from '../assets/pie.png';

const SubscribeSection = () => {
  return (
    <div className="relative">
      {/* Star decoration (top-left outside the section) */}
      <img
        src={star}
        alt="star decoration"
        className="absolute -top-8 left-1/2 -translate-x-[calc(50%+500px)] w-[66px] -rotate-[20.37deg] z-50 max-w-[1440px] mx-auto"
      />

      {/* Section wrapper */}
      <section className="relative flex items-center justify-center h-[500px] max-w-[1440px] mx-auto font-poppins bg-sky-50 group overflow-hidden">
        
        {/* Pie decoration (rotates on hover) */}
        <img
          src={pie}
          alt="pie decoration"
          className="absolute top-24 left-1/2 -translate-x-[calc(50%-320px)] w-[66px] rotate-[20.37deg] z-50 transition-transform duration-[1000ms] group-hover:rotate-[360deg] hidden md:block"
        />

        {/* Content container */}
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="max-w-2xl">
            
            {/* Heading */}
            <p className="mb-10 text-3xl font-bold leading-snug text-gray-900 md:text-3xl">
              Lorem Ipsum is simply dummy text of the printing.
            </p>

            {/* Form */}
            <form className="flex flex-row items-center gap-4 xs:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 text-gray-800 bg-white rounded-lg shadow-2xl transition focus:outline-none focus:ring-2 focus:ring-black sm:flex-1 md:w-[532px]"
              />
              <button
                type="submit"
                className="px-6 py-4 font-normal uppercase bg-black rounded-lg shadow-md text-red-50 hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
              >
                Subscribe
              </button>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscribeSection;
