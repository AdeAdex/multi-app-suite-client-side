import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FootballMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.football-data.org/v4/matches', {
          headers: {
            'X-Auth-Token': '70f5fc17b1374351b458e3f71cb76249', // Replace with your API key
          },
        });

        // Update the state with the fetched data
        setMatches(response.data.matches);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Football Matches</h1>
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
