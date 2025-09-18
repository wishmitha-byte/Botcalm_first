import hero3 from '../assets/hero3.svg';
import feature1 from '../assets/feature1.svg';
import feature2 from '../assets/feature2.svg';
import feature3 from '../assets/feature3.svg';
import feature4 from '../assets/feature4.svg';

const FeatureCard = ({ icon, bgColor, hoverColor, title, description }) => (
  <div className="rounded-xl p-6 flex flex-row items-center gap-4 bg-white group">
    <div
      className={`w-20 h-20 flex items-center justify-center rounded-[20px] transition duration-500 ${bgColor} group-hover:${hoverColor}`}
    >
      <img src={icon} alt={title} />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 group-hover:tracking-wide transition-all duration-500">
        {title}
      </h3>
      <p className="text-gray-600 text-sm group-hover:tracking-wide transition-all duration-500">
        {description}
      </p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: feature1,
      bgColor: "bg-purple-100",
      hoverColor: "bg-violet-100",
      title: "Web Application",
      description: "Lorem ipsum is simply",
    },
    {
      icon: feature2,
      bgColor: "bg-green-100",
      hoverColor: "bg-green-200",
      title: "SEO",
      description: "Lorem ipsum is simply",
    },
    {
      icon: feature3,
      bgColor: "bg-blue-100",
      hoverColor: "bg-blue-200",
      title: "AR/VR Solutions",
      description: "Lorem ipsum is simply",
    },
    {
      icon: feature4,
      bgColor: "bg-orange-100",
      hoverColor: "bg-orange-200",
      title: "Mobile Application",
      description: "Lorem ipsum is simply",
    },
  ];

  return (
    <div className="relative">
      <img
        src={hero3}
        className="absolute -top-[150px] w-[66px] z-50 hidden lg:block"
        alt=""
      />

      <section className="py-20 bg-white flex justify-center font-poppins max-w-[1440px] mx-auto">
        <div className="flex flex-col">
          <div className="container max-w-8xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
          <hr className="mt-[50px] w-[calc(100vw-15px)] border-gray-300 mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;