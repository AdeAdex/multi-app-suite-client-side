// front-end
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FootballMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('https://footbal-matches-adex2210.vercel.app/api/football-matches');
        const response = await axios.get('/api/football-matches'); // Requests to your Node.js backend


        // Update the state with the fetched data
        setMatches(response.data);
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
