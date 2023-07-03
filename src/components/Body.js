import RestaurantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utisils/useOnlineStatus";


const Body = () => {
        let [listOfRestaurants, setlistOfRestaurants] = useState([]);
        let [filteredRestaurant, setFilteredRestaurant] = useState([])

        const [searchText, setSearchText] = useState("");

        useEffect(() => {
          fetchData();
          
        },[])

        const fetchData = async () => {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

          const json = await data.json();
          
          
            //  optional chaining
          setlistOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
          setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
          
          
        }

        const onlineStatus = useOnlineStatus();

        if(onlineStatus === false) return <h1>Look's like you are offline !! Please check your internet connection</h1>
           
                  
          // CONDITIONAL RENDERRING
          // if( listOfRestaurants.length === 0){
          //   return <Shimmer/>
          // }

          

    return  listOfRestaurants.length === 0 ? (<Shimmer/>) : (
      <div className="body">
        <div className="filter">

          {/* SEARCH BUTTON STARTS */}
            <div   className="search">
              <input  type="text" className="search" value={searchText}  onChange={(e) => {
                setSearchText(e.target.value)
              }}
             />
              <button   onClick={() => {
                console.log(listOfRestaurants);
                  
                let filteredRestaurant = listOfRestaurants.filter( (res) => res.data?.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurant(filteredRestaurant)
              }}>Search</button>
            </div>
          {/* SEARCH BUTTON ENDS */}
          {/*  */}

          {/* TOP RATED BUTTON START */}
            <button  className="filter-btn"   onClick={ ()=>{
                // listOfRestaurants = listOfRestaurants.filter( (restro) => 
                //         restro.data.avgRating > 4.2
                // );
                // setlistOfRestaurants(listOfRestaurants);

                let listOfTopRestaurants = listOfRestaurants.filter( (restro) => 
                restro.data.avgRating > 4.2
        );
        setFilteredRestaurant(listOfTopRestaurants);





            }} 
               >
                Top Rated Restaurant</button> 
        </div>
          {/* TOP RATED BUTTON ENDSSSS */}

          {/* firstly restro list is displayed on ui by using map AND when we use the button state variable changes and REACT refresh the BODY component */}
  
        <div className="res-container">
  
          {filteredRestaurant.map(  (restaurant) => 
             <Link  to={"/restaurants/"+restaurant.data.id}  key = {restaurant.data.id}>
               <RestaurantCard   resData= {restaurant}/>
             </Link>
          ) }
         </div>
      </div>
    );
          
          
  };

  export  default Body;