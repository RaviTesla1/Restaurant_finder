import { CDN_URL } from "../utisils/constants";

const RestaurantCard = (props) => {
    
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;

    const styleCard = {
        backgroundColor: "#f0f0f0",
      };
  
    
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL
        + cloudinaryImageId}
        />
        <h3>{name}</h3>
  
        <h3>{cuisines.join(",")}</h3>
        <h3>{avgRating} stars</h3>
        <h3>रु {costForTwo / 100} for two</h3>
        <h3>{deliveryTime}</h3>
      </div>
    );
  };

  export default RestaurantCard;