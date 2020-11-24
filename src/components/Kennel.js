import React from "react"
// import { LocationList } from "./location/LocationList" 
// import { LocationProvider } from "./location/LocationProvider" 
import "./Kennel.css"
// import { AnimalList } from "./animal/AnimalList" 
// import { AnimalProvider } from "./animal/AnimalProvider"
// import { EmployeeProvider } from "./employee/EmployeeProvider"
// import { EmployeeList } from "./employee/EmployeeList"
// import { CustomerProvider } from "./customer/CustomerProvider"
// import { CustomerList } from "./customer/CustomerList"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"


export const Kennel = () => ( //single line function with implied return

//use empty angle brackets as a nameless container
//because this function in JSX needs to return a single parent,
//it cannot have siblings (as this would without the brackets)
    <> 
        <NavBar />        
        <ApplicationViews />
    </>
)