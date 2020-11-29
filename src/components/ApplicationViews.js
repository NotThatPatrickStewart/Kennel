import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeForm } from "./employee/EmployeeForm";


export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <EmployeeProvider>
        <LocationProvider>
        {/* Render the employee list when http://localhost:3000/ */}
        <Route exact path="/employees" render={
          props => <EmployeeList {...props} />
        }/>

        <Route exact path="employees/create" render={
          props => <EmployeeForm {...props} />
        } />
        </LocationProvider>
      </EmployeeProvider>

      <CustomerProvider>
        {/* Render the customer list when http://localhost:3000/ */}
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

          <AnimalProvider>
      <LocationProvider>
        <CustomerProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalList {...props}/>
            </Route>
        </CustomerProvider>
      </LocationProvider>
          </AnimalProvider>
    </>
  );
};
