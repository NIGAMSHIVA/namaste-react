import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
    const { resList } = props;
  
    const { name, cuisines, avgRating, costForTwo, deliveryTime, address } =
      resList.card.info;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          alt="res-logo"
          className="res-logo"
          src={
               CDN_URL +
            resList.card.info.cloudinaryImageId
          }
        />
        <h3>{address}</h3>
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
        <h4>RS:{costForTwo}</h4>
        <h4>{resList.card.info.sla.deliveryTime} minutes</h4>
      </div>
    );
};
  
export default RestaurantCard;