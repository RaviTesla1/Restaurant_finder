import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utisils/useRestaurantMenu";

const RestaurantMenu = () => {


    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId)

//     useEffect(() => {
//         fetchMenu();
//     },[])

//    const fetchMenu = async () => {
//   const data = await fetch(MENU_API+resId);

//     const json = await data.json();
//         setResInfo(json.data)
//    }

   if(resInfo === null  ) {return <Shimmer/>}

   let  { name, cuisines, costForTwoMessage}  = resInfo?.cards[0]?.card?.card?.info;

//    let {id} = resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.id;
   let {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//    console.log(itemCards)




    return (
        <div>
            <h3>{name}</h3>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>

            {/* <ul>
                <li key={itemCards?.id}>{itemCards[0]?.card?.info?.name}</li>
                <li key={itemCards?.id}>{itemCards[1]?.card?.info?.name}</li>
                <li key={itemCards?.id}>{itemCards[2]?.card?.info?.name}</li>
                <li>Chaat</li>
                <li>Samosa</li>
            </ul> */}

            <ul>
                {itemCards.map( (item) => 
                    <li  key={item?.card?.info?.id}> {item?.card?.info?.name} {"- Rs."}
                    {item?.card?.info?.price/100  || item?.card?.info?.defaultPrice/100} </li>
                )}
            </ul>
        </div>
    )
}

export default RestaurantMenu;