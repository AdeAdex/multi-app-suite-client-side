import axios from "axios";
import React, { useState } from "react";

const Fetch = () => {
  const endpoint = "https://jsonplaceholder.typicode.com/users/";
  const [response, setresponse] = useState([]);
  const getData = () => {
    axios
      .get(endpoint)
      .then((result) => {
        console.log(result);
        setresponse(result.data);
        // console.log(results)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div>Fetch</div>
      <button onClick={getData}>Get Info</button>
      <table className="table table-striped table-bordered table-responsive">
        <thead>
          <tr>
            <td>S/N</td>
            <td>Names</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Address</td>
            <td>Website</td>
          </tr>
        </thead>

        {response.map((items, index) => (
          <tbody key={items.id}>
            <tr>
              <td>{items.id}</td>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.phone}</td>
              <td>{items.address.street}, {items.address.city}</td>
              <td>{items.website}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default Fetch;
