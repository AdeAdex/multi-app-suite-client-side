// front-end
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FootballMatches.css'; // Import your CSS file

const FootballMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://multi-app-suite-server-side.vercel.app/api/football-matches');
        console.log('Response data:', response.data.matches); // Debugging line
        setMatches(response.data.matches);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="football-matches-container">
      <h1 className="matches-heading">Football Matches Update</h1>
      <ul className="matches-list">
        {matches.map((match) => (
          <li className="match-item" key={match.id}>
            <div className="match-details">
              <div className="team-info">
                {match.homeTeam && (
                  <div className="team">
                    <img className="team-crest" src={match.homeTeam.crest} alt={match.homeTeam.name} />
                    <span className="team-name">{match.homeTeam.name}</span>
                  </div>
                )}
              </div>
              <div className="score">
                {match.score && (
                  <div className="match-score">
                    {match.score.winner === 'HOME_TEAM' && <span className="winner-text">(Winner)</span>}
                    {match.score.fullTime && (
                      <span className="score-text">
                        {match.score.fullTime.home} - {match.score.fullTime.away}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="team-info">
                {match.awayTeam && (
                  <div className="team">
                    <img className="team-crest" src={match.awayTeam.crest} alt={match.awayTeam.name} />
                    <span className="team-name">{match.awayTeam.name}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="match-info">
              {match.competition && (
                <div className="competition-info">
                  <p className="competition-name">{match.competition.name}</p>
                  <p className="match-location">{match.competition.area && match.competition.area.name}</p>
                </div>
              )}
              <p className="match-status">{match.status}</p>
              <p className="match-date">{match.utcDate && new Date(match.utcDate).toLocaleDateString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FootballMatches;

