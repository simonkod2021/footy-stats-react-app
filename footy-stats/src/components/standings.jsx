import styled from "styled-components";

const StyledTable = styled.table`
    width: 50%;
    margin: 1rem auto;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    th, td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f4f4f4;
        color: #333;
    }

    tr:hover {
        background-color: #f9f9f9;
    }
`
const StyledDiv = styled.div`
    width: 50%;
    margin: 1rem auto;
    background-color: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
        margin-top: 0;
        color: #333;
        text-align: center;
    }

    p {
        color: #555;
        line-height: 1.5;
        text-align: center;
    }
`

export const Standings = () => {
    return (
        <>
        <StyledDiv>
            <h2>Premier League Standings</h2>
        </StyledDiv>
        <StyledTable>
            <tbody> 
                <tr><td>1. Manchester City</td></tr>
                <tr><td>2. Arsenal</td></tr>
                <tr><td>3. Manchester United</td></tr>
                <tr><td>4. Newcastle United</td></tr>
                <tr><td>5. Brighton & Hove Albion</td></tr>
                <tr><td>6. Brentford</td></tr>
                <tr><td>7. Fulham</td></tr>
                <tr><td>8. Crystal Palace</td></tr>
                <tr><td>9. Liverpool</td></tr>
            </tbody>
        </StyledTable>
        </>
    )
}