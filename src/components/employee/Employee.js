import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location, animal }) => ( //single line function with implied return
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__kennel">Works at: {location.name}</div>
        <div className="employee__animal">Cares for: {animal.name}</div>
    </section>
)