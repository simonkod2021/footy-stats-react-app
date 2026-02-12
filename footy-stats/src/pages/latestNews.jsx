import styled from "styled-components"

const NewsContainer = styled.div`
    width: 80%;
    margin: 1rem auto;
    background: linear-gradient(135deg, #ffffff, #000000);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
        margin-top: 0;
        color: #333;
        text-align: center;
        font-size: 5rem;
        background: -webkit-linear-gradient(45deg, #ffffff, #000000);
        -webkit-background-clip: text;
    }

    p {
        color: #555;
        line-height: 1.5;
    }
`

export const LatestNews = () => {
    return (
        <NewsContainer>
            <h2>Page in progress</h2>
        </NewsContainer>
    )
}

export default LatestNews;