import { fetchTopScorersLeagueOne, fetchTopScorersPL, fetchTopScorersChampionship, fetchPremierLeagueStandings, fetchChampionshipStandings, fetchLeagueOneStandings } from "../api/FootballEnglandAPIs";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCachedData, setCachedData } from "../utils/cache";

const LeagueHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;

  img {
    width: 65px;
    height: 65px;
    object-fit: contain;
  }

  h2 {
    margin: 0;
    color: #ffffff;
  }
`;

const ContentSection = styled.div`
    width: 45%;
    height: 100%;
    margin: 0;
    flex: 0 0 45%;
    background-color: #555;
    padding: 1rem;
    border-radius: 8px;
    margin-left: 2rem;
    margin-right: 2rem;

    h2 {
        color: #ffffff;
        text-align: center;
        margin-bottom: 1rem;
    }

    p {
        color: #ffffff;
        line-height: 1.5;
        text-align: center;
    }
`

const StandingsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #444;
  border-radius: 8px;
  overflow: hidden;

  th, td {
    padding: 0.75rem;
    text-align: left;
    color: #ffffff;
    border-bottom: 1px solid #555;
  }

  th {
    background-color: #222;
    font-weight: bold;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover {
    background-color: #444;
  }

  td:first-child {
    font-weight: bold;
  }
`;

const StandingsContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;

  h2 {
    margin-top: 0;
    color: #ffffff;
    text-align: center;
  }
`;

  const FootballLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5rem;
    width: 100%;
    margin: 1rem auto;
    justify-content: space-between;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  `;

export const Football = () => {
  const [topScorersPL, setTopScorersPL] = useState([]);
  const [topScorersChampionship, setTopScorersChampionship] = useState([]);
  const [topScorersLeagueOne, setTopScorersLeagueOne] = useState([]);
  const [standingsPL, setStandingsPL] = useState([]);
  const [standingsChampionship, setStandingsChampionship] = useState([]);
  const [standingsLeagueOne, setStandingsLeagueOne] = useState([]);
  const [leaguePL, setLeaguePL] = useState(null);
  const [leagueChampionship, setLeagueChampionship] = useState(null);
  const [leagueLeagueOne, setLeagueLeagueOne] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTopScorers = async () => {
      try {
        setLoading(true);

        // Premier League
        const cachedPL = getCachedData('topScorersPL');
        if (cachedPL) {
          console.log('Using cached PL data');
          setTopScorersPL(cachedPL);
        } else {
          const dataPL = await fetchTopScorersPL();
          console.log('Fetched PL top scorers data:', dataPL);
          const scorersPL = Array.isArray(dataPL) ? dataPL : dataPL?.response ?? [];
          setCachedData('topScorersPL', scorersPL);
          setTopScorersPL(scorersPL);
        }

        // Championship
        const cachedChampionship = getCachedData('topScorersChampionship');
        if (cachedChampionship) {
          console.log('Using cached Championship data');
          setTopScorersChampionship(cachedChampionship);
        } else {
          const dataChampionship = await fetchTopScorersChampionship();
          console.log('Fetched Championship top scorers data:', dataChampionship);
          const scorersChampionship = Array.isArray(dataChampionship)
            ? dataChampionship
            : dataChampionship?.response ?? [];
          setCachedData('topScorersChampionship', scorersChampionship);
          setTopScorersChampionship(scorersChampionship);
        }

        // League One
        const cachedLeagueOne = getCachedData('topScorersLeagueOne');
        if (cachedLeagueOne) {
          console.log('Using cached League One data');
          setTopScorersLeagueOne(cachedLeagueOne);
        } else {
          const dataLeagueOne = await fetchTopScorersLeagueOne();
          console.log('Fetched LeagueOne top scorers data:', dataLeagueOne);
          const scorersLeagueOne = Array.isArray(dataLeagueOne)
            ? dataLeagueOne
            : dataLeagueOne?.response ?? [];
          setCachedData('topScorersLeagueOne', scorersLeagueOne);
          setTopScorersLeagueOne(scorersLeagueOne);
        }

        // Premier League Standings
        const cachedPLStandings = getCachedData('plStandings');
        const cachedPLLeague = getCachedData('plLeague');
        if (cachedPLStandings && cachedPLLeague) {
          console.log('Using cached PL standings data');
          setStandingsPL(cachedPLStandings);
          setLeaguePL(cachedPLLeague);
        } else {
          const standingsDataPL = await fetchPremierLeagueStandings();
          console.log('Fetched PL standings data:', standingsDataPL);
          const standingsArrayPL = standingsDataPL?.response?.[0]?.league?.standings?.[0] ?? [];
          const leagueInfo = standingsDataPL?.response?.[0]?.league ?? null;
          setCachedData('plStandings', standingsArrayPL);
          setCachedData('plLeague', leagueInfo);
          setStandingsPL(standingsArrayPL);
          setLeaguePL(leagueInfo);
        }

        // Championship Standings
        const cachedChampionshipStandings = getCachedData('championshipStandings');
        const cachedChampionshipLeague = getCachedData('championshipLeague');
        if (cachedChampionshipStandings && cachedChampionshipLeague) {
          console.log('Using cached Championship standings data');
          setStandingsChampionship(cachedChampionshipStandings);
          setLeagueChampionship(cachedChampionshipLeague);
        } else {
          const standingsDataChampionship = await fetchChampionshipStandings();
          console.log('Fetched Championship standings data:', standingsDataChampionship);
          const standingsArrayChampionship = standingsDataChampionship?.response?.[0]?.league?.standings?.[0] ?? [];
          const leagueInfoChampionship = standingsDataChampionship?.response?.[0]?.league ?? null;
          setCachedData('championshipStandings', standingsArrayChampionship);
          setCachedData('championshipLeague', leagueInfoChampionship);
          setStandingsChampionship(standingsArrayChampionship);
          setLeagueChampionship(leagueInfoChampionship);
        }

        // League One Standings
        const cachedLeagueOneStandings = getCachedData('leagueOneStandings');
        const cachedLeagueOneLeague = getCachedData('leagueOneLeague');
        if (cachedLeagueOneStandings && cachedLeagueOneLeague) {
          console.log('Using cached League One standings data');
          setStandingsLeagueOne(cachedLeagueOneStandings);
          setLeagueLeagueOne(cachedLeagueOneLeague);
        } else {
          const standingsDataLeagueOne = await fetchLeagueOneStandings();
          console.log('Fetched League One standings data:', standingsDataLeagueOne);
          const standingsArrayLeagueOne = standingsDataLeagueOne?.response?.[0]?.league?.standings?.[0] ?? [];
          const leagueInfoLeagueOne = standingsDataLeagueOne?.response?.[0]?.league ?? null;
          setCachedData('leagueOneStandings', standingsArrayLeagueOne);
          setCachedData('leagueOneLeague', leagueInfoLeagueOne);
          setStandingsLeagueOne(standingsArrayLeagueOne);
          setLeagueLeagueOne(leagueInfoLeagueOne);
        }

      } catch (err) {
        console.error('Error fetching top scorers:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTopScorers();
  }, []);

  if (loading) return <p>Loading top scorers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {/* Premier League */}
      <FootballLayout>
        <ContentSection>
          {standingsPL.length > 0 && (
            <StandingsContainer>
              {leaguePL && (
                <LeagueHeader>
                  <img src={leaguePL.logo} alt={leaguePL.name} />
                  <h2>{leaguePL.name} Standings</h2>
                </LeagueHeader>
              )}
              <StandingsTable>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>P</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {standingsPL.map((team) => (
                    <tr key={team.team.id}>
                      <td>{team.rank}</td>
                      <td>{team.team.name}</td>
                      <td>{team.all.played}</td>
                      <td>{team.all.win}</td>
                      <td>{team.all.draw}</td>
                      <td>{team.all.lose}</td>
                      <td>{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </StandingsTable>
            </StandingsContainer>
          )}
        </ContentSection>
        
        <ContentSection>
          {topScorersPL.length > 0 && (
            <StandingsContainer>
              <h2>Premier League Top Scorers 2024</h2>
              <StandingsTable>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Goals</th>
                  </tr>
                </thead>
                <tbody>
                  {topScorersPL.slice(0, 18).map((scorer, index) => (
                    <tr key={scorer.player?.id ?? scorer.id}>
                      <td>{index + 1}</td>
                      <td>{scorer.player?.name ?? scorer.name}</td>
                      <td>{scorer.statistics?.[0]?.team?.name ?? 'N/A'}</td>
                      <td>{scorer.statistics?.[0]?.goals?.total ?? 0}</td>
                    </tr>
                  ))}
                </tbody>
              </StandingsTable>
            </StandingsContainer>
          )}
        </ContentSection>
      </FootballLayout>

      {/* Championship */}
      <FootballLayout>
        <ContentSection>
          {standingsChampionship.length > 0 && (
            <StandingsContainer>
              {leagueChampionship && (
                <LeagueHeader>
                  <img src={leagueChampionship.logo} alt={leagueChampionship.name} />
                  <h2>{leagueChampionship.name} Standings</h2>
                </LeagueHeader>
              )}
              <StandingsTable>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>P</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {standingsChampionship.map((team) => (
                    <tr key={team.team.id}>
                      <td>{team.rank}</td>
                      <td>{team.team.name}</td>
                      <td>{team.all.played}</td>
                      <td>{team.all.win}</td>
                      <td>{team.all.draw}</td>
                      <td>{team.all.lose}</td>
                      <td>{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </StandingsTable>
            </StandingsContainer>
          )}
        </ContentSection>
        
        <ContentSection>
          {topScorersChampionship.length > 0 && (
            <StandingsContainer>
              <h2>Championship Top Scorers 2024</h2>
              <StandingsTable>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Goals</th>
                  </tr>
                </thead>
                <tbody>
                  {topScorersChampionship.slice(0, 18).map((scorer, index) => (
                    <tr key={scorer.player?.id ?? scorer.id}>
                      <td>{index + 1}</td>
                      <td>{scorer.player?.name ?? scorer.name}</td>
                      <td>{scorer.statistics?.[0]?.team?.name ?? 'N/A'}</td>
                      <td>{scorer.statistics?.[0]?.goals?.total ?? 0}</td>
                    </tr>
                  ))}
                </tbody>
              </StandingsTable>
            </StandingsContainer>
          )}
        </ContentSection>
      </FootballLayout>

      {/* League One */}
      <FootballLayout>
        <ContentSection>
          {standingsLeagueOne.length > 0 && (
            <StandingsContainer>
              {leagueLeagueOne && (
                <LeagueHeader>
                  <img src={leagueLeagueOne.logo} alt={leagueLeagueOne.name} />
                  <h2>{leagueLeagueOne.name} Standings</h2>
                </LeagueHeader>
              )}
              <StandingsTable>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>P</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {standingsLeagueOne.map((team) => (
                    <tr key={team.team.id}>
                      <td>{team.rank}</td>
                      <td>{team.team.name}</td>
                      <td>{team.all.played}</td>
                      <td>{team.all.win}</td>
                      <td>{team.all.draw}</td>
                      <td>{team.all.lose}</td>
                      <td>{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </StandingsTable>
            </StandingsContainer>
          )}
        </ContentSection>
        
        <ContentSection>
          {topScorersLeagueOne.length > 0 && (
            <StandingsContainer>
              <h2>League One Top Scorers 2024</h2>
              <StandingsTable>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Goals</th>
                  </tr>
                </thead>
                <tbody>
                  {topScorersLeagueOne.slice(0, 18).map((scorer, index) => (
                    <tr key={scorer.player?.id ?? scorer.id}>
                      <td>{index + 1}</td>
                      <td>{scorer.player?.name ?? scorer.name}</td>
                      <td>{scorer.statistics?.[0]?.team?.name ?? 'N/A'}</td>
                      <td>{scorer.statistics?.[0]?.goals?.total ?? 0}</td>
                    </tr>
                  ))}
                </tbody>
              </StandingsTable>
            </StandingsContainer>
          )}
        </ContentSection>
      </FootballLayout>
    </>
  );
}

export default Football;