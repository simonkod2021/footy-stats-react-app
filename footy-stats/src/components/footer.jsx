import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
    height: 30%;
`;

export const CustomFooter = () => {
    return (
        <StyledFooter>
            &copy; 2024 Footy Stats. All rights reserved.
        </StyledFooter>
    )
}

export default CustomFooter;