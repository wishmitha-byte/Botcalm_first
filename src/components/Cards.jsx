import bell from '../assets/bell.png';

const CardsSection = () => (
  <section className="bg-white py-24 relative overflow-hidden max-w-[1440px] mx-auto" id='services'>
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
      
      <div className="bg-gray-100 rounded-2xl shadow-lg p-12 max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Lorem Ipsum is simply dummy text.
        </h2>
        <p className="text-lg text-center text-gray-600 leading-relaxed mb-10">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications
          and website builders measuring dozens of completed projects. We build and develop
          mobile applications for several top platforms, including Android & IOS.
        </p>
        <div className="flex justify-center md:justify-center space-x-4">
          <a
            href="#"
            className="bg-sky-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-sky-600 transition-colors duration-200"
          >
            View more
          </a>
        </div>
      </div>

      <div className="absolute w-90 h-90 bg-pink-200 blur-2xl rounded-full bottom-5 right-10 opacity-50 z-0"></div>

      <div className="group relative bg-sky-600 rounded-2xl shadow-lg p-12 max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Lorem Ipsum is simply dummy text.
        </h2>
        <p className="text-lg text-center text-white leading-relaxed mb-10">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications
          and website builders measuring dozens of completed projects. We build and develop
          mobile applications for several top platforms, including Android & IOS.
        </p>
        <div className="flex justify-center md:justify-center space-x-4">
          <a
            href="#"
            className="bg-white text-sky-600 px-8 py-3 rounded-lg font-bold shadow-lg ring-1 ring-gray-200 hover:bg-gray-100 transition-colors duration-200"
          >
            View more
          </a>
        </div>

        <img src={bell} alt="" className="absolute top-0 right-[40px] w-[120px] -translate-y-1/2 translate-x-1/3 rotate-[20.37deg] z-50 group-hover:rotate-[15deg] transition-transform duration-[500ms]"/>
      </div>
    </div>
  </section>
);

export default CardsSection;