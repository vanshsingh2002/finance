import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">
            Manage data analytics centrally
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            dolore expedita provident vel voluptates itaque, consequatur dicta
            est dolorem consequuntur, placeat ut? Hic labore numquam tenetur
            eius repellendus consequatur minus?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
