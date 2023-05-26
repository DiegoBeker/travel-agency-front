import { styled } from "styled-components";

export const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    h2{
        font-weight: 700;
        font-size: 30px;
        margin: 20px 0;
    }
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Details = styled.ul`
    li{
        margin: 10px 0;
        font-size: 18px;
    }
`;