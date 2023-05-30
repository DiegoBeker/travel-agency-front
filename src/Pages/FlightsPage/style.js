import { styled } from "styled-components";

export const Content =styled.section`
    display: flex;
`;

export const Filters = styled.div`
    width:300px;
    height: calc(100vh - 80px);
    border-right: 1px solid blueviolet;
    background-color: rgba(255, 255, 255, .7);
    padding: 20px;
    display: flex;
    flex-direction: column;
    button{
        background-color: blueviolet;
        margin: 10px;
        color: white;
        font-size: 20px;
        font-weight: 500;
        border-radius: 5px;
    }
`;

export const Flightscontainer = styled.ul`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;  
    flex-direction: column;
    align-items: center;
`;

export const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    h2{
        font-weight: 700;
        font-size: 30px;
        margin: 20px 0;
    }
`;