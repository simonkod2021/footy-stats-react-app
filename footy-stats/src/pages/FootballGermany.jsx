import { fetchTopScorersBundesliga2, fetchTopScorersBundesliga, fetchTopScorers3Liga } from "../api/GermanyFootballAPIs";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCachedData, setCachedData } from "../utils/cache";


const StyledList = styled.ol`
    width: 100%;
    margin: 1rem 0;
    border: 1px solid #ffffff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-image: url('../src/assets/ball_fire.jpg');
    background-size: cover;
    background-position: center;

    li {
        padding: 0.5rem 0;
        color: #ffffff;
        margin-left: 1rem;
        border-bottom: 1px solid #ffffff;
    }

    li:last-child {
        border-bottom: none;
    }
`
const TopScorersContainer = styled.div`
    margin: 0;
    padding: 1rem;
    border-radius: 8px;
    min-width: 324px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        margin-top: 0;
        background: #151515;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
    }

    p {
        color: #555;
        line-height: 1.5;
        text-align: center;
    }
`

const TopScorersRow = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-right: 2rem;
  min-width: 30%;
`

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
  `

export const FootballGermany = () => {
  const [topScorersBundesliga, setTopScorersBundesliga] = useState([]);
  const [topScorersBundesliga2, setTopScorersBundesliga2] = useState([]);
  const [topScorers3Liga, setTopScorers3Liga] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTopScorers = async () => {
      try {
        setLoading(true);

        // Bundesliga
        const cachedBundesliga = getCachedData('topScorersBundesliga');
        if (cachedBundesliga) {
          console.log('Using cached Bundesliga data');
          setTopScorersBundesliga(cachedBundesliga);
        } else {
          const dataBundesliga = await fetchTopScorersBundesliga();
          console.log('Fetched Bundesliga top scorers data:', dataBundesliga);
          const scorersBundesliga = Array.isArray(dataBundesliga) ? dataBundesliga : dataBundesliga?.response ?? [];
          setCachedData('topScorersBundesliga', scorersBundesliga);
          setTopScorersBundesliga(scorersBundesliga);
        }

        // Bundesliga 2
        const cachedBundesliga2 = getCachedData('topScorersBundesliga2');
        if (cachedBundesliga2) {
          console.log('Using cached Bundesliga 2 data');
          setTopScorersBundesliga2(cachedBundesliga2);
        } else {
          const dataBundesliga2 = await fetchTopScorersBundesliga2();
          console.log('Fetched Bundesliga 2 top scorers data:', dataBundesliga2);
          const scorersBundesliga2 = Array.isArray(dataBundesliga2)
            ? dataBundesliga2
            : dataBundesliga2?.response ?? [];
          setCachedData('topScorersBundesliga2', scorersBundesliga2);
          setTopScorersBundesliga2(scorersBundesliga2);
        }

        // 3. Liga
        const cached3Liga = getCachedData('topScorers3Liga');
        if (cached3Liga) {
          console.log('Using cached 3. Liga data');
          setTopScorers3Liga(cached3Liga);
        } else {
          const data3Liga = await fetchTopScorers3Liga();
          console.log('Fetched 3. Liga top scorers data:', data3Liga);
          const scorers3Liga = Array.isArray(data3Liga)
            ? data3Liga
            : data3Liga?.response ?? [];
          setCachedData('topScorers3Liga', scorers3Liga);
          setTopScorers3Liga(scorers3Liga);
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
    <FootballLayout>
      <TopScorersRow>
        {topScorersBundesliga.length > 0 || topScorersBundesliga2.length > 0 || topScorers3Liga.length > 0 ? (
          <>
            <TopScorersContainer>
                <h2>Bundesliga 2024</h2>
            <StyledList>
              {topScorersBundesliga.slice(0, 18).map((scorer) => (
                <li key={scorer.player?.id ?? scorer.id}>
                  {scorer.player?.name ?? scorer.name} - {scorer.statistics?.[0]?.goals?.total ?? 0} goals
                </li>
              ))}
            </StyledList>
            </TopScorersContainer>
            <TopScorersContainer>
                <h2>Bundesliga 2 2024</h2>
            <StyledList>
              {topScorersBundesliga2.slice(0, 20).map((scorer) => (
                <li key={scorer.player?.id ?? scorer.id}>
                  {scorer.player?.name ?? scorer.name} - {scorer.statistics?.[0]?.goals?.total ?? 0} goals
                </li>
              ))}
            </StyledList>
            </TopScorersContainer>
            <TopScorersContainer>
                <h2>3. Liga 2024</h2>
            <StyledList>
              {topScorers3Liga.slice(0, 18).map((scorer) => (
                <li key={scorer.player?.id ?? scorer.id}>
                  {scorer.player?.name ?? scorer.name} - {scorer.statistics?.[0]?.goals?.total ?? 0} goals
                </li>
              ))}
            </StyledList>
            </TopScorersContainer>
          </>
        ) : (
          <p>No top scorers data available.</p>
        )}
      </TopScorersRow>
    </FootballLayout>
  );
}

export default FootballGermany;