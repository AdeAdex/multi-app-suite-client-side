import axios from "axios";
import React, { useState, useEffect } from "react";

const Jokes = () => {
  const endpoint =
    "https://v2.jokeapi.dev/joke/Any?type=single&fbclid=IwAR0rXrfhchsotkwWKqWdS4lQx4liT647rySgCagfQF2dI1p7IaQ67J_i9sM";
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIsLoading(true); // Show loading state
    axios
      .get(endpoint)
      .then((result) => {
        setResponse(result.data);
        setIsLoading(false); // Hide loading state
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false); // Hide loading state on error
      });
  };

  const shareJoke = () => {
    if (navigator.share) {
      navigator.share({
        title: "Check out this Joke!",
        text: response.joke,
        url: window.location.href,
      });
    } else {
      alert("Sorry, your browser doesn't support sharing.");
    }
  };

  return (
    <>
      <section
        className="w-100 d-flex"
        style={{ height: "100vh", backgroundColor: "#F2F2F2" }}
      >
        <div
          className="container-fluid d-flex flex-column align-items-center justify-content-center h-75"
          style={{ marginTop: "50px" }}
        >
          <h1 className="text-center text-bold mb-4">
            Welcome to the Jokes App{" "}
            <img
              src="emoji.png"
              alt="Laughing Emoji"
              style={{ width: "100px" }}
            />
          </h1>
          {response.id && (
            <div className="container bg-white shadow p-4 rounded-lg text-center">
              <h3 className="mb-3">Here's a Joke for You:</h3>
              <p className="fs-3">{response.joke}</p>
              <div
                className="text-end mt-3"
                style={{ fontStyle: "italic", fontSize: "14px" }}
              >
                Category: "{response.category}"
              </div>
              <div className="mt-3 gap-3 d-flex justify-content-center">
              <button
                className={`btn btn-primary my-4   ${
                  isLoading ? "disabled" : ""
                }`}
                onClick={getData}
              >
                {isLoading ? "Generating..." : "Next Joke 🎉"}
              </button>
              <button className="btn btn-success my-4" onClick={shareJoke}>
                Share this Joke 🚀
              </button>
              </div>
             
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Jokes;
