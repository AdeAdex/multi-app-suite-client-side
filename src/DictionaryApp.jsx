import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const DictionaryApp = () => {
  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState([]);
  const [phonetics, setPhonetics] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (response.data.length > 0) {
        const data = response.data[0];
        setDefinitions(data.meanings);
        setPhonetics(data.phonetics);
      } else {
        setDefinitions([]);
        setPhonetics([]);
      }
    } catch (error) {
      console.error(error);
      setDefinitions([]);
      setPhonetics([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (word) {
      fetchData();
    } else {
      // Clear definitions and phonetics when the input is empty
      setDefinitions([]);
      setPhonetics([]);
    }
  }, [word]);

  return (
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
          {window.innerWidth <= 768 ? (
            <FaSearch className="search-icon" />
          ) : (
            <>
              <span className="search-text">Search</span>
              <FaSearch className="search-icon" />
            </>
          )}
        </button>
      </div>

      {phonetics.length > 0 && (
        <div className="phonetics">
          <h2>Phonetics:</h2>
          {phonetics.map((phonetic, index) => (
            <div key={index}>
              <p>{phonetic.text}</p>
              {phonetic.audio && (
                <audio controls>
                  <source src={phonetic.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))}
        </div>
      )}
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
  );
};

export default DictionaryApp;
