import React from "react";
import { useState } from "react";

const Navbar = () => {
  let divStyle = {
    color: "red",
    fontSize: "45px",
    backgroundColor: "green",
  };

  let food = {
    swallow: "Amala",
    soup: "Abula",
    animal: "Ponmo",
    animal2: "Beef",
  };

  let myname = "Adeolu";
  let mySchool = "SQI";
  let number = 8;
  const [first, setfirst] = useState(0);
  

  let allStudent = [
    { name: "Adeolu", school: "SQI" },
    { name: "Kunle", school: "Lautech" },
  ];

  const increment = () => {
    setfirst(first + 1);
  };

  return (
    <>
      <div style={{ color: "red", backgroundColor: "yellow" }}>Navbar</div>
      {food.swallow}
      <div style={divStyle}>This is styling</div>
      {number == 8 ? <div>Even number</div> : <div>Old Number</div>}
      <div></div>
      <button onClick={increment}>Increase</button>
      <div>{first}</div>


      <table className="table table-secondary table-bordered mt-4">
        <thead className="bg-danger text-white">
          <td className="text-center">Name</td>
          <td className="text-center">School</td>
        </thead>
        {
            allStudent.map((item) => (
          <>
            <tr className="">
              <td className="text-center">
                <div>{item.name}</div>
              </td>
              <td className="text-center">
                <div>{item.school}</div>
              </td>
            </tr>
          </>
        ))
        }
      </table>
    </>
  );
};

export default Navbar;
