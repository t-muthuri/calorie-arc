import { Route, Routes } from "react-router-dom";
import React,{useEffect, useState} from "react";
import "../CSS/SignUp.css";
import HomePage from "./HomePage";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp"
import MealPlan from './MealPlan'
import ContactUs from "./ContactUs";
import UserProfile from "./UserProfile/Index";

function App() {
  const[data,setData]=useState([])
  const[newUser, setNewUser]=useState(false)

  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
      setData(data)
    })
  },[])

  function handleNewUser(){
    setNewUser(newUser=>!newUser)
  }

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route  path="/login" element={<Login data={data} />}/>
        <Route path="/signup" element={<SignUp handleNewUser={handleNewUser}/>}/>
        <Route path="/userprofile" element={<UserProfile/>}/>
        <Route path="/meal_plan" element={<MealPlan/>}/>
        <Route path="/contact_us" element={<ContactUs/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <h1 className="text-3xl font-bold underline">Hello world</h1>
    </div>
  );
}

export default App;