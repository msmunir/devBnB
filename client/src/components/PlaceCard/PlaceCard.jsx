/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PlaceCard = ({ place }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <Link
          to={`/details/${place._id}`}
          className="text-dark text-decoration-none"
        >
          <img
            src={place.imageUrl}
            className="card-img-top"
            alt={place.title}
          />
          <div className="card-body">
            <h5 className="card-title">
              <strong> {place.title}</strong>
            </h5>
            <p className="card-text text-muted">
              {place.description
                ? `${place.description.substring(0, 50)}...`
                : "No description available"}
            </p>
            <div className="flex justify-content-spacearound">
              <span className="text-muted">
                {" "}
                <strong>{place.price} kr SEK</strong> night
              </span>
              <span className="float-end">
                <FontAwesomeIcon icon={faWifi} className="wifi-icon" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
