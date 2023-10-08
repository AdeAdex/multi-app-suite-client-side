// front-end
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FootballMatches = () => {
  const [matches, setMatches] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const response = await axios.get('https://footbal-matches-adex2210.vercel.app/api/football-matches');
  //       const response = await axios.get('/api/football-matches');

  //       setMatches(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://multi-app-suite-server-side.vercel.app/api/football-matches');
        console.log('Response data:', response); // Debugging line
  
        // Ensure that response.data is an array before setting it in the state
        if (Array.isArray(response.data)) {
          setMatches(response.data);
          console.log('Matches state after setting:', matches); // Debugging line
        } else {
          console.error('Data received is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <h1>Football Matches Update</h1>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {match.homeTeam.name} vs. {match.awayTeam.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FootballMatches;
