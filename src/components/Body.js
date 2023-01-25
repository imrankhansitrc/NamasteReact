import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


function filterData(searchText,restaurants){
  const filteredData = restaurants.filter((retaurant) => retaurant.data.name.includes(searchText))

  return filteredData
}


const Body = () => {
  const [restaurants, setrestaurants] = useState(restaurantList);
  const [searchText, setsearchText] = useState("");

  //const [searchClicked, setsearchClicked] = useState("false");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText,restaurants);
            setrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
