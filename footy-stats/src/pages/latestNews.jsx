import styled from "styled-components"

const NewsContainer = styled.div`
    width: 80%;
    margin: 1rem auto;
    background-color: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
        margin-top: 0;
        color: #333;
    }

    p {
        color: #555;
        line-height: 1.5;
    }
`

export const LatestNews = () => {
    return (
        <NewsContainer>
            <h2>Latest News</h2>
            <p>Manchester City wins the Premier League title!</p>
            <p>Arsenal secures a Champions League spot.</p>
            <p>Newcastle United's impressive run continues.</p>
        </NewsContainer>
    )
}

export default LatestNews;