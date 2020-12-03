import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalDetail = (props) => {
    const { releaseAnimal, getAnimalById } = useContext(AnimalContext)

    const [animal, setAnimal] = useState({ location: {}, customer: {}}) //array destructuring, rewatch recording for correct terms

    useEffect(() => {
        const animalId = parseInt(props.match.params.animalId) // or getAnimalById(props.match.params.animalId)
        getAnimalById(animalId)
            .then(setAnimal) // written explicitly: .then(parsedAnimal => setAnimal(parsedAnimal))
    }, [])

    return (
        <>
        {/* {console.log(animal)} */}
            <section className="animal">
                <h3 className="animal__name">{animal.name}</h3>
                <div className="animal__breed">Breed: {animal.breed}</div>
                <div className="animal__location">Location: {animal.location.name}</div>
                <div className="animal__owner">Customer: {animal.customer.name}</div>
                <div className="animal__treatment">Treatment: {animal.treatment}</div>
                <button onClick={
                    () => {
                        releaseAnimal(animal.id) //added .id
                        .then(() => {
                            props.history.push("/animals")
                        })
                    }
                }>
                    Release Animal
                </button>
                <button onClick={() => {
                    props.history.push(`/animals/edit/${animal.id}`)
                }}>
                    Edit
                </button>
            </section>
        </>
    )
}