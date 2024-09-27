import city1 from "../../assets/city1.jpg";
import city2 from "../../assets/city2.jpg";
import city3 from "../../assets/city3.jpg";
import city4 from "../../assets/city4.jpg";

const Listings = () => {
  return (
    <div className="max-w-6xl mx-auto py-24">
      <h1 className="text-4xl text-center font-medium">
        Browse through our listings
      </h1>
      <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
        We are very proud of the service we provide. See what our guests have to
        say about us, our locations and services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <img src={city1} className="rounded-lg" alt="city1" />
        <img src={city2} className="rounded-lg" alt="city2" />
        <img src={city3} className="rounded-lg" alt="city3" />
        <img src={city4} className="rounded-lg" alt="city4" />
      </div>
    </div>
  );
};

export default Listings;
