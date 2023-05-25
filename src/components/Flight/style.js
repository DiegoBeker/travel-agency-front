import { styled } from "styled-components";

export const FlightCard = styled.li`
    height: 80px;
    width: 100%;
    padding: 15px 30px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: lightgray;
    &:hover{
        background: whitesmoke;
    }
`;