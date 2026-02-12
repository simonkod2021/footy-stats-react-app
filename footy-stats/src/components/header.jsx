import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const StyledHeader = styled.header`
    background-color: #555;
    color: #fff;
    padding: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledButton = styled.button`
    background-color: #444;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 1rem;
    
    &:hover {
        background-color: #777;
    }
`;

const StyledButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const StyledTitle = styled.h1`
    font-size: 2rem;
    margin: auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const CustomHeader = () => {

    const navigate = useNavigate();

    return (
        <>
        <StyledHeader>
            <StyledTitle>
                Footy Stats
            </StyledTitle>
            <StyledButtonContainer>
                <StyledButton onClick={() => navigate('/')}>Home</StyledButton>
                <StyledButton onClick={() => navigate('/news')}>Latest News</StyledButton>
                <StyledButton onClick={() => navigate('/top-scorers')}>Top Scorers</StyledButton>
                <StyledButton onClick={() => navigate('/leagues')}>Leagues</StyledButton>

            </StyledButtonContainer>
        </StyledHeader>
        </>
    )
}

export default CustomHeader;