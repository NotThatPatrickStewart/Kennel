import React from "react"
import { LocationList } from "./location/LocationList" 
import { LocationProvider } from "./location/LocationProvider" 
import { Employee } from "./employee/Employee" 
import { Customer } from "./customer/Customer" 
import "./Kennel.css"
import { AnimalList } from "./animal/AnimalList" 
import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"

export const Kennel = () => ( //single line function with implied return

//use empty angle brackets as a nameless container
//because this function in JSX needs to return a single parent,
//it cannot have siblings (as this would without the brackets)
    <> 
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
           

        <h2>Employees</h2>
        <EmployeeProvider>
            <EmployeeList />
        </EmployeeProvider>

        <h2>Customers</h2>
       <CustomerProvider>
           <CustomerList />
       </CustomerProvider>
    </>
)