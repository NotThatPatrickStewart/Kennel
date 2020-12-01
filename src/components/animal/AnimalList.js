import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { LocationContext } from "../location/LocationProvider"
// import { CustomerContext } from "../customer/CustomerProvider"


export const AnimalList = ({history}) => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
    // const { locations, getLocations } = useContext(LocationContext)
    // const { customers, getCustomers } = useContext(CustomerContext)
    const [ filteredAnimals, setFiltered ] = useState([])

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        // console.log("AnimalList: Initial render before data")
        getAnimals()
        
        // .then(getCustomers)
        // .then(getAnimals)
    }, [])

  /*
        This effect hook function will run when the following two state changes happen:
            1. The animal state changes. First when it is created, then once you get the animals from the API
            2. When the search terms change, which happens when the user types something in the AnimalSearch component
    */

    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching animals
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
        // If the search field is blank, display all animals
        setFiltered(animals)
        }
    }, [searchTerms, animals])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the animal state changed.
    */
    // useEffect(() => {
    //     console.log("AnimalList: Animal state changed")
    //     console.log(animals)
    // }, [animals])

    return (
        <>
            <h1>Animals</h1>

            {/* {console.log(animals, locations, customers)} */}
                <button onClick={() => history.push("/animals/create")}>
                    Make Appointment
                </button>
            <div className="animals">
            {
                filteredAnimals.map(animal => {
                    // const owner = customers.find(c => c.id === animal.customerId)
                    // const clinic = locations.find(l => l.id === animal.locationId)
                    // debugger
                return <Animal key={animal.id} animal={animal} /> //customer={owner} location={clinic}
                })
            }
            </div>
        </>
    )
}