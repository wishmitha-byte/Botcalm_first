import ad1 from '../assets/ad1.png';
import ad2 from '../assets/ad2.png';
import ad3 from '../assets/ad3.png';
import happy from '../assets/happy.svg';

const AdCard = ({ iconBg, image, glowColor, glowPosition, reverse, halfGlow }) => (
  <div
    className={`container mx-auto px-4 flex flex-col-reverse ${
      reverse ? 'md:flex-row-reverse' : 'md:flex-row'
    } items-center justify-between mt-20`}
  >
    {/* Text Side */}
    <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
      <div className="flex items-center space-x-4 mb-[43px]">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full ${iconBg} text-white text-xl`}
        >
          <img src={happy} alt="happy" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900 text-lg">
            Lorem Ipsum is simply dummy text
          </span>
          <span className="text-gray-400 text-sm">
            Lorem Ipsum is simply dummy text
          </span>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-10 mt-[43px]">
        <span className="text-sky-600">Lorem Ipsum</span> is simply dummy text of
        the printing.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0  mb-[56px]">
        KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
        applications and website builders measuring dozens of completed projects.
        We build and develop mobile applications for several top platforms,
        including Android & IOS.
      </p>
    </div>

    {/* Image Side */}
    <div className="md:w-1/2 flex justify-center items-center relative">
      <div className="w-full max-w-lg relative">
        <img src={image} alt="Ad Illustration" className="z-10 relative" />

        {/* Glow */}
        <div
          className={`absolute w-80 h-80 ${glowColor} blur-2xl rounded-full opacity-50 z-0 ${glowPosition} ${
            halfGlow ? 'clip-path-right-half' : ''
          }`}
        ></div>
      </div>
    </div>
  </div>
);

const AdsSection = () => {
  const ads = [
    {
      iconBg: 'bg-teal-400',
      image: ad1,
      glowColor: 'bg-violet-300',
      glowPosition: 'bottom-5 left-120',
      reverse: false,
      halfGlow: true,
    },
    {
      iconBg: 'bg-sky-600',
      image: ad2,
      glowColor: 'bg-lime-100',
      glowPosition: 'top-20 right-70',
      reverse: true,
    },
    {
      iconBg: 'bg-purple-700',
      image: ad3,
      glowColor: 'bg-violet-200',
      glowPosition: 'bottom-10 -right-30',
      reverse: false,
    },
  ];

  return (
    <section
      className="bg-center py-20 relative overflow-hidden font-poppins max-w-[1440px] mx-auto"
      id="about"
    >
      {ads.map((ad, index) => (
        <AdCard key={index} {...ad} />
      ))}
    </section>
  );
};

export default AdsSection;
