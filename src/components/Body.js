import RestaurantCard from "./RestaurantCard"
import data from "../utils/mockData"



const Body = () => {
    return (
      <div className="body">
            <div className="filter">
                <button className="btn" onClick={()=>{console.log("Button is pressed")}}>Top-Rated Restaurants</button>
        </div>
  
        <div className="res-container">
          {data.map((t) => (
            <RestaurantCard key={t.card.info.id} data={t} />
          ))}
        </div>
      </div>
    );
};
  
export default Body;