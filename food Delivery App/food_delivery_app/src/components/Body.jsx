import React, { useEffect } from "react";
import Reastrocard from "./Reastrocard";
import resList from "../utils/data";
import { Link } from "react-router-dom";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  
  const [searchTxt, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await result.json();
    console.log(json);
    setListOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };
  if (listOfRestaurants.length === 0) return <h1>Loading..</h1>;

  return (
    <div className=" mx-48 items-center justify-center">
      <div className="flex mb-2">
        <input
          className=" p-2"
          type="text"
          placeholder="Search..."
          value={searchTxt}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="m-2 p-2 border border-black hover:bg-black hover:text-white"
          onClick={() => {
            console.log(searchTxt);
            const filterList = listOfRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchTxt.toLowerCase());
            });
            setFilterRestaurants(filterList);
          }}
        >
          Search
        </button>
      </div>
      <div className=" inline">
        <button className=" p-4 bg-gray-400">Top Rated Restro</button>
      </div>
      <div className=" flex flex-wrap m-12">
        {filterRestaurants.map((restaurant) => (<Link to={"/restaurants/"+restaurant.info.id}><Reastrocard key={restaurant.info.id} restData={restaurant} /></Link>))
         
        }
      </div>
    </div>
  );
};

export default Body;
