import Navbar from "./components/Navbar";
import heroImg from "./assets/photo2.svg"; 

// Import icons
import iconWeb from "./assets/icon-web.svg";
import iconSeo from "./assets/icon-seo.svg";
import iconVr from "./assets/icon-vr.svg";
import iconMobile from "./assets/icon-mobile.svg";

export default function App() {
  return (
    <div className="max-w-[1440px] mx-auto px-8">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 bg-[url('./assets/photo1.svg')] bg-cover bg-center py-20 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-snug">
              Experienced <span className="text-sky-500">mobile and web</span>{" "}
              applications and website builders measuring.
            </h1>
            <p className="mt-6 text-gray-600">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="bg-sky-500 text-white px-6 py-3 rounded-md font-medium hover:bg-sky-600 transition">
                Contact us
              </button>
              <button className="border border-sky-500 text-sky-500 px-6 py-3 rounded-md font-medium hover:bg-sky-100 transition">
                View more
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={heroImg}
              alt="Hero Illustration"
              className="w-[300px] md:w-[450px] lg:w-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 border-b border-gray-300">
        <div className="flex justify-between max-w-[1440px] mx-auto">
          {/* Card 1 */}
          <div className="w-[266px] h-[83px] flex items-center">
            <div className="w-[41px] h-[41px] flex items-center justify-center rounded-lg bg-purple-100">
              <img src={iconWeb} alt="Web App" className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-sm text-gray-800">Web Application</h3>
              <p className="text-gray-500 text-xs">Lorem Ipsum is simply</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[266px] h-[83px] flex items-center">
            <div className="w-[41px] h-[41px] flex items-center justify-center rounded-lg bg-green-100">
              <img src={iconSeo} alt="SEO" className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-sm text-gray-800">SEO</h3>
              <p className="text-gray-500 text-xs">Lorem Ipsum is simply</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[266px] h-[83px] flex items-center">
            <div className="w-[41px] h-[41px] flex items-center justify-center rounded-lg bg-blue-100">
              <img src={iconVr} alt="AR/VR" className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-sm text-gray-800">AR/VR Solutions</h3>
              <p className="text-gray-500 text-xs">Lorem Ipsum is simply</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-[266px] h-[83px] flex items-center">
            <div className="w-[41px] h-[41px] flex items-center justify-center rounded-lg bg-orange-100">
              <img src={iconMobile} alt="Mobile" className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-sm text-gray-800">Mobile Applications</h3>
              <p className="text-gray-500 text-xs">Lorem Ipsum is simply</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
