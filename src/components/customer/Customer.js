import React from "react"
import "./Customer.css"

export const Customer = ({ customer }) => ( //single line function with implied return
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
    </section>
)