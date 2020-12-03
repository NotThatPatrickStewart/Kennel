import React, { useContext, useRef, useEffect, useState } from "react";
// import { CustomerContext } from "../customer/CustomerProvider"
// import { EmployeeContext } from "../employee/EmployeeProvider"
import { LocationContext } from "../location/LocationProvider";
import { AnimalContext } from "./AnimalProvider";

export const AnimalForm = (props) => {
  const { addAnimal, animals, updateAnimal, getAnimals } = useContext(
    AnimalContext
  );
  // const {customers, getCustomers} = useContext(CustomerContext)
  const { locations, getLocations } = useContext(LocationContext);
  // const { employees, getEmployees } = useContext(EmployeeContext)

  // const name = useRef(null)
  // const location = useRef(null)
  // const customer = useRef(null)
  // const employee = useRef(null)

  const [animal, setAnimal] = useState({});

  const editMode = props.match.params.hasOwnProperty("animalId");

  const handleControlledInputChange = (event) => {
    /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
    const newAnimal = Object.assign({}, animal);
    newAnimal[event.target.name] = event.target.value;
    setAnimal(newAnimal);
  };

  /*
        If there is a URL parameter, then the user has chosen to
        edit an animal.
            1. Get the value of the URL parameter.
            2. Use that `id` to find the animal.
            3. Update component state variable.
    */

  const getAnimalInEditMode = () => {
    if (editMode) {
      const animalId = props.match.params.animalId; //did not add parseInt here
      const selectedAnimal = animals.find((a) => a.id === animalId) || {};
      setAnimal(selectedAnimal);
    }
  };

  // Get animals from API when component initializes
  useEffect(() => {
    getAnimals();
    getLocations();
  }, []);

  // Once provider state is updated, determine the animal (if edit)
  useEffect(() => {
    getAnimalInEditMode();
  }, [animals]);

  const constructNewAnimal = () => {
    // const customerId = parseInt(customer.current.value)
    const locationId = parseInt(animal.locationId);
    // const employeeId = parseInt(employee.current.value)

    if (locationId === 0) {
      window.alert("Please make sure location is selected");
    } else {
      if (editMode) {
        updateAnimal({
          id: animal.id,
          name: animal.name,
          breed: animal.breed,
          locationId: locationId,
          treatment: animal.treatment,
          customerId: parseInt(localStorage.getItem("kennel_customer")),
        }).then(() => props.history.push("/animals"));
      } else {
        addAnimal({
          name: animal.name,
          breed: animal.breed,
          locationId: locationId,
          treatment: animal.treatment,
          customerId: parseInt(localStorage.getItem("kennel_customer")),
        }).then(() => props.history.push("/animals"));
      }
    }
  };
  return (
    <form className="animalForm">
      <h2 className="animalForm__title">
        {editMode ? "Update Animal" : "Admit Animal"}
      </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal name: </label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            proptype="varchar"
            placeholder="Animal name"
            defaultValue={animal.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="breed">Animal breed: </label>
          <input
            type="text"
            name="breed"
            required
            className="form-control"
            proptype="varchar"
            placeholder="Animal breed"
            defaultValue={animal.breed}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationId">Location: </label>
          <select
            name="locationId"
            className="form-control"
            proptype="int"
            value={animal.locationId}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="treatment">Treatments: </label>
          <textarea
            type="text"
            name="treatment"
            className="form-control"
            proptype="varchar"
            value={animal.treatment}
            onChange={handleControlledInputChange}
          ></textarea>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          constructNewAnimal();
        }}
        className="btn btn-primary"
      >
        {editMode ? "Save Updates" : "Make Reservation"}
      </button>
    </form>
  );
};
