import { styled } from "styled-components";

export const StepsInfo = styled.section`
    width: 100vw;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StepsContainer = styled.div`
    display: flex;
`;

export const Step = styled.div`
    width: 300px;
    height: 80px;
    margin: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const CitiesContainer = styled.section`
    margin: 50px 0;
    padding: 10px;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
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
