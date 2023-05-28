const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[150px] w-full mb-[200px] text-center mx-auto flex flex-col">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        <div>
          <p className="md:text-4xl sm:text-3xl font-bold py-3">
            Fast,Flexible,Financing
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your analytics to increase revenue
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
