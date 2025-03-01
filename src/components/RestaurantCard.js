import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
    const { resList } = props;
  
    // const { name, cuisines, avgRating, costForTwo, deliveryTime, address } =
    //   resList.card.info;
  
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
        <h3>{resList.card.info.address}</h3>
        <h3>{resList.card.info.name}</h3>
        <h3>{resList.card.info.cuisines.join(", ")}</h3>
        <h4>{resList.card.info.avgRating}</h4>
        <h4>RS:{resList.card.info.costForTwo}</h4>
        <h4>{resList.card.info.sla.deliveryTime} minutes</h4>
      </div>
    );
};
  
export default RestaurantCard;