import styled from "styled-components";
import { useNavigate } from "react-router";

const LeaguePickerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #333;
    border-top: 1px solid #7d7d7d;

    h2 {
        color: #fff;
        margin-top: 0;
    }

    button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        background-color: #555;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #777;
        }
    }
`

export const LeaguePicker = () => {
    const navigation = useNavigate();
    return (
        <LeaguePickerContainer>
            <h2>Select a Country</h2>
            <button onClick={() => navigation("/leagues/england/stats")}>England</button>
            <button onClick={() => navigation("/leagues/spain/stats")}>Spain</button>
            <button onClick={() => navigation("/leagues/italy/stats")}>Italy</button>
            <button onClick={() => navigation("/leagues/germany/stats")}>Germany</button>
            <button onClick={() => navigation("/laegues/france/stats")}>France</button>
        </LeaguePickerContainer>
    )
}

export default LeaguePicker;