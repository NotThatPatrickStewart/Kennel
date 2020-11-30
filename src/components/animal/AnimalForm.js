import React, { useContext, useRef, useEffect } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalContext } from "./AnimalProvider"

export const AnimalForm = (props) => {
    const { addAnimal } = useContext(AnimalContext)
    const {customers, getCustomers} = useContext(CustomerContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees } = useContext(EmployeeContext)

    const name = useRef(null)
    const customer = useRef(null)
    const location = useRef(null)
    const employee = useRef(null)

    useEffect(() => {
        getEmployees()
        .then(getLocations)
        .then(getCustomers)
    }, [])

    const constructNewAnimal = () => {
        const customerId = parseInt(customer.current.value)
        const locationId = parseInt(location.current.value)
        const employeeId = parseInt(employee.current.value)

        if (customerId === 0 || locationId === 0 || employeeId === 0) {
            window.alert("Please make sure all fields are selected")
        }
        else {
            addAnimal({
                
            })
        }
    }
}