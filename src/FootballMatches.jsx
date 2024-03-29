import React, { useState, useEffect } from "react";
import axios from "axios";

const FootballMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://multi-app-suite-server-side-adex2210.vercel.app/api/football-matches"
        );
        console.log("Response:", response);
        setMatches(response.data.matches);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      console.log(matches.length);
    };

    fetchData();
  }, []);

  const groupMatchesByLeague = (matches) => {
    const groupedMatches = {
      "Premier League": [],
      "La Liga": [],
      "Serie A": [],
      Bundesliga: [],
      "Ligue 1": [],
      Eredivisie: [],
      "Campeonato Brasileiro Série A": [],
      "Primera Division": [],
      "Primeira Liga": [],
      Others: [],
    };
    matches.forEach((match) => {
      const competitionName = match.competition?.name || "Others";
      const leagueCountryName = match.area || "Unknown"; // Include area.name as league-country-name
      if (groupedMatches.hasOwnProperty(competitionName)) {
        groupedMatches[competitionName].push({ ...match, leagueCountryName });
      } else {
        groupedMatches["Others"].push({ ...match, leagueCountryName });
      }
    });
    return groupedMatches;
  };

  const groupedMatches = groupMatchesByLeague(matches);

  return (
    <>
      <div id="football-matches-page" className="">
        <div
          className={` ${
            matches.length === 0
              ? "football-matches-container2"
              : "football-matches-container"
          }`}
        >
          <h1 className="matches-heading text-center">
            Football Matches Update
          </h1>
          {matches.length === 0 ? (
            <div className="text-white mt-5">
              No football match data is currently available on this website for
              today. Kindly check back later or on a day when there are Premier
              League games scheduled. We apologize for any inconvenience.
            </div>
          ) : (
            Object.keys(groupedMatches).map((leagueName) => (
              <div key={leagueName}>
                <div className="league-info d-flex justify-content-between me-3">
                  <div className="d-flex gap-3">
                    <img
                      src={
                        groupedMatches[leagueName][0]?.leagueCountryName.flag
                      }
                      alt=""
                      style={{ width: "30px" }}
                    />
                    <div>
                      <h5 className="league-heading">
                        {" "}
                        <strong>{leagueName}</strong>
                      </h5>
                      <small className="league-country-name">
                        {groupedMatches[leagueName][0]?.leagueCountryName.name}
                      </small>
                    </div>
                  </div>
                  <img
                    className="league-flag"
                    src={groupedMatches[leagueName][0]?.competition?.emblem}
                    alt={leagueName}
                  />
                </div>
                <ul className="matches-list">
                  {groupedMatches[leagueName].map((match) => (
                    <li className="match-item" key={match.id}>
                      <div className="match-details">
                        <div className="team-info">
                          {match.homeTeam && (
                            <>
                              <img
                                className="team-crest"
                                src={match.homeTeam.crest}
                                alt={match.homeTeam.name}
                              />
                              <span className="team-name">
                                {match.homeTeam.name}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="score">
                          {match.score && (
                            <>
                              {match.score.winner === "HOME_TEAM" && (
                                <span className="winner-text">(Winner)</span>
                              )}
                              {match.score.fullTime && (
                                <>
                                  {match.score.fullTime.home} -{" "}
                                  {match.score.fullTime.away}
                                </>
                              )}
                            </>
                          )}
                        </div>
                        <div className="team-info">
                          {match.awayTeam && (
                            <>
                              <img
                                className="team-crest"
                                src={match.awayTeam.crest}
                                alt={match.awayTeam.name}
                              />
                              <span className="team-name">
                                {match.awayTeam.name}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="match-info">
                        {match.status !== "FINISHED" && (
                          <p className="match-date">
                            Match starts on{" "}
                            {new Date(match.utcDate).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FootballMatches;
