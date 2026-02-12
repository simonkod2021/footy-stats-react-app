import styled from "styled-components";

import { useEffect, useState } from "react";

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
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        const getStandings = async () => {
            const data = await fetchPLStandings();
            console.log("Fetched standings data:", data);
            setStandings(data?.standings?.[0]?.table ?? []);
        };

        getStandings();
    }, []);

    return (
        <>
        <StyledDiv>
            <h2>Premier League Top Scorers</h2>
        </StyledDiv>
        <StyledTable>
            <tbody> 
                {standings.map((team, index) => (
                    <tr key={team.team?.id ?? index}>
                        <td>{index + 1}. {team.team?.name ?? "Unknown"}</td>
                    </tr>
                ))}
            </tbody>
        </StyledTable>
        </>
    )
}