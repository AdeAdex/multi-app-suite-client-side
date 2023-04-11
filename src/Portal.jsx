import React, { useState } from "react";

const Portal = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allStudent, setAllStudent] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    let newStudent = { firstname, lastname, email, password };
    console.log(newStudent);
    setAllStudent([...allStudent, newStudent]);
    console.log(allStudent);
  };

  return (
    <>
      <div className="container-fluid col-6 mt-lg-5 shadow py-2 px-4">
        <form action="" onSubmit={submit}>
          <h1 className="text-center my-3">Sign up</h1>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Firstname"
              name=""
              id=""
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Lastname"
              name=""
              id=""
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="email"
              className="form-control"
              placeholder="email"
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="password"
              name=""
              id=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <button type="submit" className="btn btn-success w-100">
              submit
            </button>
          </div>
        </form>
      </div>

      <table className="table table-striped table-bordered mt-4">
        <thead>
          <tr>
            <td>S/N</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Email</td>
            <td>Password</td>
          </tr>
        </thead>

        {allStudent.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            </tbody>
          
        ))}
      </table>
    </>
  );
};

export default Portal;
