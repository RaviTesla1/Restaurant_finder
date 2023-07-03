import RestaurantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
        let [listOfRestaurants, setlistOfRestaurants] = useState([]);

        const [searchText, setSearchText] = useState("");

        useEffect(() => {
          console.log("useEffect called 🚀🚀🚀");

          fetchData();
          
        },[])

        const fetchData =async () => {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

          const json =await data.json();
          console.log(json)
          console.log(json?.data?.cards[2]?.data?.data?.cards)
          
            //  optional chaining
          setlistOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
          
          
        }
           
        
        
           
          console.log("body Render");
          
          // CONDITIONAL RENDERRING
          // if( listOfRestaurants.length === 0){
          //   return <Shimmer/>
          // }

          

    return  listOfRestaurants.length === 0 ? (<Shimmer/>) : (
      <div className="body">
        <div className="filter">

          {/* SEARCH BUTTON STARTS */}
            <div   className="search">
              <input  type="text" className="search" value={searchText}/>
              <button   onClick={() => {
                  
              }}>Search</button>
            </div>
          {/* SEARCH BUTTON ENDS */}
          {/*  */}

          {/* TOP RATED BUTTON START */}
            <button  className="filter-btn"   onClick={ ()=>{
                listOfRestaurants = listOfRestaurants.filter( (restro) => 
                        restro.data.avgRating > 4.2
                );
                setlistOfRestaurants(listOfRestaurants);
            }} 
               >
                Top Rated Restaurant</button> 
        </div>
          {/* TOP RATED BUTTON ENDSSSS */}

          {/* firstly restro list is displayed on ui by using map AND when we use the button state variable changes and REACT refresh the BODY component */}
  
        <div className="res-container">
  
          {listOfRestaurants.map(  (restaurant) => 
             <RestaurantCard key = {restaurant.data.id}  resData= {restaurant}/>
          ) }
         </div>
      </div>
    );
          
          
  };

  export  default Body;