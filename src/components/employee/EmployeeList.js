import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { EmployeeContext } from "./EmployeeProvider";
// import { Employee } from "./Employee";
import "./Employee.css";
// import { LocationContext } from "../location/LocationProvider"
// import { AnimalContext } from "../animal/AnimalProvider"

export const EmployeeList = (props) => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);
  // const { animals, getAnimals } = useContext(AnimalContext)
  // const { locations, getLocations } = useContext(LocationContext)

  /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
  useEffect(() => {
    // console.log("EmployeeList: Initial render before data")
    getEmployees();
    // .then(getLocations)
  }, []);

  /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the employee state changed.
    */
  // useEffect(() => {
  //     console.log("EmployeeList: Employee state changed")
  //     console.log(employees)
  // }, [employees])

  return (
    <div className="employees">
      <h1>Employees</h1>
      <button onClick={() => props.history.push("/employees/create")}>
        Add Employee
      </button>

      <article className="employeeList">
        {/* {console.log(employees, animals, locations)} */}
        {employees.map((employee) => {
          //   const clinic = locations.find((l) => l.id === employee.locationId);
          //   const pet = animals.find((a) => a.id === employee.animalId);
          return (
            <Link key={employee.id} to={`/employees/${employee.id}`}>
              <h3>{employee.name}</h3>
            </Link>
          );
        })}
      </article>
    </div>
  );
};
