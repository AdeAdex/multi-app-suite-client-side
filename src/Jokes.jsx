import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Jokes = () => {
  const endpoint =
    "https://v2.jokeapi.dev/joke/Any?type=single&fbclid=IwAR0rXrfhchsotkwWKqWdS4lQx4liT647rySgCagfQF2dI1p7IaQ67J_i9sM";
  const endpoint2 =
    "https://opentdb.com/api.php?amount=50&category=15&type=multiple";
  const endpoint4 = "https://api.dictionaryapi.dev/api/v2/entries/en/word";
  const [response, setresponse] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(endpoint)
      .then((result) => {
        setresponse(result.data);
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return (
    <>
      <section
        className="w-100 d-flex"
        style={{ height: "100vh", backgroundColor: "#F2F2F2" }}
      >
        <div className="container-fluid d-flex flex-column  my-auto h-75">
          <h1 className="text-center text-bold mb-4">
            Welcome to the Jokes App
          </h1>
          <button
            className="btn btn-primary my-4 mx-auto col-lg-3 col-md-12 col-sm-12"
            onClick={getData}
          >
            Generate Jokes
          </button>
          {
            <div
              className="container-fluid bg-white shadow h-auto col-lg-6 col-sm-12 p-5 fs-2"
              style={{ borderRadius: "5px" }}
            >
              <hr
                className="mx-auto bg-primary"
                style={{ width: "90%", height: "3px" }}
              />
              <hr
                className="bg-primary"
                style={{ height: "3px", marginTop: "-10px" }}
              />
              <div>{response.id}</div>
              <div>{response.joke}</div>
              <div
                className="text-end"
                style={{ fontStyle: "italic", fontSize: "12px" }}
              >
                "{response.category}"
              </div>
              <hr
                className="mx-auto bg-primary"
                style={{ width: "90%", height: "3px" }}
              />
              <hr
                className="bg-primary"
                style={{ height: "3px", marginTop: "-10px" }}
              />
            </div>
          }
        </div>
      </section>
    </>
  );
};

export default Jokes;
