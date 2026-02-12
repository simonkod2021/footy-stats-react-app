import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
    height: 30%;
`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 15vh;
`;

const LeftFooter = styled.div`
    margin-bottom: 0.5rem;
    align-self: flex-start;
    color: #aaa;
    margin-bottom: 0.5rem;
`;

const CenterFooter = styled.div`
    margin-bottom: 0.5rem;
    align-self: center;
    color: #aaa;
    margin-bottom: 0.5rem;
`;

const RightFooter = styled.div`
    margin-bottom: 0.5rem;
    align-self: flex-end;
    color: #aaa;
    margin-bottom: 0.5rem;
`;

export const CustomFooter = () => {
    return (
        <StyledFooter>
            <FooterContent>
                <LeftFooter>
                    <p>Germany</p>
                    <small>Bundesliga</small><br />
                    <small>Bundesliga. 2</small><br />
                    <small>3. Liga</small>
                </LeftFooter>
                <CenterFooter>
                    Facebook | Twitter | Instagram
                </CenterFooter>
                <RightFooter>   
            &copy; 2024 Footy Stats. All rights reserved.
                </RightFooter>
            
            </FooterContent>
        </StyledFooter>
    )
}

export default CustomFooter;