import React, { useContext, useRef, useEffect } from "react"
// import { CustomerContext } from "../customer/CustomerProvider"
// import { EmployeeContext } from "../employee/EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"

export const AnimalForm = (props) => {
    const { addAnimal } = useContext(AnimalContext)
    // const {customers, getCustomers} = useContext(CustomerContext)
    const { locations, getLocations } = useContext(LocationContext)
    // const { employees, getEmployees } = useContext(EmployeeContext)

    const name = useRef(null)
    const location = useRef(null)
    // const customer = useRef(null)
    // const employee = useRef(null)



    useEffect(() => {
        getLocations()
    }, [])

    const constructNewAnimal = () => {
        // const customerId = parseInt(customer.current.value)
        const locationId = parseInt(location.current.value)
        // const employeeId = parseInt(employee.current.value)

        if (locationId === 0) {
            window.alert("Please make sure location is selected")
        }
        else {
            addAnimal({
                name: name.current.value,
                locationId,
                customerId: parseInt(localStorage.getItem("kennel_customer"))

            })
            .then(() => props.history.push("/animals"))
        }
    }
    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(a => (
                            <option key={a.id} value={a.id}>
                                {a.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                Save Appointment
            </button>
        </form>
    )
}