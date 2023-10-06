import axios from "axios";
import React, { useState, useEffect } from "react";

const DictionaryApp = () => {
  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (response.data.length > 0) {
        setDefinitions(response.data[0].meanings);
        console.log(response.data);
      } else {
        setDefinitions([]);
      }
    } catch (error) {
      console.error(error);
      setDefinitions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (word) {
      fetchData();
    }
  }, [word]);

  return (
    <>
      <div className="dictionary-app">
      <h1 className="app-title">Dictionary App</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button className="search-button" onClick={fetchData}>
          Search
        </button>
      </div>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="definitions">
          {definitions.length > 0 ? (
            definitions.map((meaning, index) => (
              <div key={index} className="definition">
                <h2 className="part-of-speech">{meaning.partOfSpeech}</h2>
                <ul>
                  {meaning.definitions.map((def, i) => (
                    <li key={i} className="definition-item">
                      {def.definition}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="no-definitions-text">No definitions found.</p>
          )}
        </div>
      )}
    </div>
    </>
  );
};

export default DictionaryApp;
