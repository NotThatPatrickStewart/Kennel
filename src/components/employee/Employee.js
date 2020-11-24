import React from "react"
import "./Employee.css"

export const Employee = ({ employee, }) => ( //single line function with implied return
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__kennel">{employee.locationId}</div>
    </section>
)