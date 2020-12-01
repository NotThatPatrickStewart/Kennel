import React from "react"
import "./Location.css"

export const Location = ({ location, employee, animal }) => ( //single line function with implied return
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <div className="location__employee">{employee.name}</div>
        <div className="location__animal">{animal.name}</div>
    </section>
)