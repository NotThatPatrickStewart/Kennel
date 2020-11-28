import React from "react"
import { LocationList } from "./location/LocationList" 
import { LocationProvider } from "./location/LocationProvider" 
import { location } from "./location/Location"
import "./Kennel.css"
import { Animal } from "./animal/Animal"
import { AnimalList } from "./animal/AnimalList" 
import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { Employee } from "./employee/Employee"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { Customer } from "./customer/Customer"
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