import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 6rem;
    color: #ffffff;
    margin: 0;
  }

  h2 {
    font-size: 2rem;
    color: #ffffff;
    margin: 1rem 0;
  }

  p {
    font-size: 1.2rem;
    color: #cccccc;
    margin: 1rem 0 2rem;
  }

  a {
    padding: 1rem 2rem;
    background-color: #ffffff;
    color: #000000;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #cccccc;
    }
  }
`;

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to Home</Link>
    </NotFoundContainer>
  );
};

export default NotFound;
