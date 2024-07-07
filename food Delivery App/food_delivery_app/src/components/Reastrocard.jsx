import React from 'react'
import {IMG_URL} from "../utils/constant"
const Reastrocard = (props) => {
  const {restData} = props;
  
  const {cloudinaryImageId, name , cuisines, avgRating, costForTwo} = restData?.info;
  const {deliveryTime} = restData?.info.sla;
  return (
    <div className=' w-60 h-auto text-center'>
    <img className=' w-56 h-32 mx-auto' src={IMG_URL + cloudinaryImageId} alt = "looooooooooooooogo"  />  
    <h1>{name}</h1>
    <h2>{cuisines.join(", ")}</h2>
    <h3>{avgRating}</h3>
    <h4>{costForTwo}</h4>
    <h5>{deliveryTime} min</h5>
    </div>
  )
}

export default Reastrocard