import { styled } from "styled-components";

export const CityCard = styled.div`
    height: 300px;
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    background-image: url(${(props) => props.picture});
    background-position: center;
    display: flex;
    justify-content: center;
    h3{
        font-weight: 700;
        font-size: 20px;
    }
`;