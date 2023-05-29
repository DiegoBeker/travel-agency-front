import { styled } from "styled-components";

export const HotelCard = styled.li`
    height: 300px;
    width: 200px;
    margin: 10px;
    border-radius: 10px;
    background-color: blueviolet;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 200px;
        height: 250px;
        border-radius: 10px;
    }
    span{
        margin: 5px 0;
    }
`;