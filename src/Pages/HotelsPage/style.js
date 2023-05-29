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

export const Content =styled.section`
    display: flex;
`;

export const Filters = styled.div`
    width:300px;
    height: calc(100vh - 80px);
    border-right: 1px solid blueviolet;
`;

export const Hotelscontainer = styled.ul`
    width: 100%;
    height: calc(100vh - 200px);
    margin-top: 60px;
    display: flex;  
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const RightContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`