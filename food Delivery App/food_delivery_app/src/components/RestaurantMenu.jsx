import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
     try {
      // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.63133&restaurantId=322540&catalog_qa=undefined&submitAction=ENTER"
      const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7367349&lng=75.8878878&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json);
     } catch (error) {
       console.log(error)
     }
    
  };

  if(resInfo === null) return <h1>Loading...</h1>

  const {name ,costForTwoMessage,cuisines,avgRating, totalRatingsString} =  resInfo?.data?.cards[2]?.card?.card?.info;
  // const costForTwoMessage = resInfo?.data?.cards[2]?.card?.card?.info.costForTwoMessage;
  
  // const cuisines = resInfo?.data?.cards[2]?.card?.card?.info.cuisines;
  // const avgRating = resInfo?.data?.cards[2]?.card?.card?.info.avgRating;
  // const totalRatingsString =  resInfo?.data?.cards[2]?.card?.card?.info.totalRatingsString;

  const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return  (
    <div>
      <h1>{name}</h1>
      <h2>{avgRating}  &#10748; {totalRatingsString} &#x29FD;  - {costForTwoMessage} </h2>
      <h3 className=" text-red-500 font-bold ">{cuisines.join(",")}</h3>
      <h4>Menu:</h4>
      <ol>
       {itemCards.map((item) => (<li key ={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>)
        
          
        
       )}
      </ol>
    </div>
  );
};

export default RestaurantMenu;
