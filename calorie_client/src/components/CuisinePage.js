import React, { useEffect, useState } from "react";

function CuisinePage() {
  const [cuisine, setCuisines] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/meals")
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
        setCuisines(data)
    })
  },[]);
  return (
    <div className="cuisine_page">
        <h1>CUISINE</h1>
        <div className="cuisine_header">
            <div><h3>Images</h3></div>
            <div><h3> Name</h3></div>
            <div><h3> Category</h3></div>
            <div><h3>Calories</h3></div>
            <div><h3>Choose Meal</h3></div>
        </div>
           {cuisine.map((cus)=>(
            <div className="cuisine_card">
                <div className="tr"><img src={cus.img_url}/></div>
                <div className="tr"><h4>{cus.name}</h4></div>
                <div className="tr"><h4>{cus.category}</h4></div>
                <div className="tr"><h4>{cus.calories}</h4></div>
                <div className="tr"><button style={{backgroundColor:"red", color:"white", width:"50px", height:"40px",borderRadius:"8px", fontSize:"24px"}}>+</button></div>
               
            </div>
           ))
           }

    </div>
  );
}

export default CuisinePage;