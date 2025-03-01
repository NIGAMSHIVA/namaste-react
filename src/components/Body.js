import RestaurantCard from "./RestaurantCard";
import data from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setresList] = useState(data);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn"
          onClick={() => {
            // filter logic here
            const filteredData = resList.filter(
              (t) => t.card.info.avgRating >= 4.0
            );
            console.log(filteredData);
            setresList(filteredData);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {resList.map((t) => (
          <RestaurantCard key={t.card.info.id} resList={t} />
        ))}
      </div>
    </div>
  );
};

export default Body;
