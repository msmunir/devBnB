import { useAccommodations } from "../context/AccommodationContext";
// import { usePlaces } from "../context/PlaceContext";
import PlaceCard from "../components/PlaceCard/PlaceCard";
// import "./home.css";

const Home = () => {
  const { accommodations } = useAccommodations();

  // const { places } = usePlaces();
  // if (!places.length) {
  //   return <div>Loading...</div>;
  // }
  if (!accommodations.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
      {accommodations.map((place) => (
        <PlaceCard key={place._id} place={place} />
      ))}
    </div>
    // <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
    //   {places.map((place) => (
    //     <PlaceCard key={place._id} place={place} />
    //   ))}
    // </div>
  );
};

export default Home;
