import RestaurantCard from "./RestaurantCard";
import data from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

  const [resList, setresList] = useState(data);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.397862940017443&lng=80.32161757349968&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

 

    const json = await data.json();
    console.log(json);
  };

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
      {console.log("First Body-Component is rendered")}
    </div>
  );
};

export default Body;

