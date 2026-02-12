import styled from "styled-components"

const DashboardContainer = styled.div`
    width: 80%;
    margin: 1rem auto;
    background-color: #ffffff00;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h1 {
        margin-top: 0;
        color: #ffffff;
        text-align: center;
    }

    p {
        color: #ffffff;
        line-height: 1.5;
        text-align: center;
    }
`
const DashboardNews = styled.div`
    width: 80%;
    margin: 1rem auto;
    background-color: #333;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
        margin-top: 0;
        color: #ffffff;
        text-align: center;
    }

    p {
        color: #ffffff;
        line-height: 1.5;
        text-align: center;
    }
`

export const Dashboard = () => {
    return (
        <DashboardContainer>
            <DashboardNews>
                <h1>Welcome to the Football Stats Dashboard</h1>
                <h2>Latest News</h2>
                <p>Explore the latest standings, news, and statistics from the world of football.</p>
                <p>Manchester City wins the Premier League title!</p>
                <p>Arsenal secures a Champions League spot.</p>
                <p>Newcastle United's impressive run continues.</p>
            </DashboardNews>
        </DashboardContainer>
    )
}