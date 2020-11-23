import React from "react"
import { Animal } from "./animal/Animal" //Don't need .js in react
import { Location } from "./location/Location" //Don't need .js in react
import { Employee } from "./employee/Employee" //Don't need .js in react
import { Customer } from "./customer/Customer" //Don't need .js in react
import "./Kennel.css"

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
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <Location />
            <Location />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)