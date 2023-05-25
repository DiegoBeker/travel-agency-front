import { styled } from "styled-components";

export const CityCard = styled.div`
    height: 300px;
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    background-image: linear-gradient(0deg, rgba(255,255,255,0) 73%, rgba(255,255,255,1) 100%),url(${(props) => props.picture});
    background-position: center;
    display: flex;
    justify-content: center;
    h3{
        font-weight: 700;
        font-size: 20px;
    }
`;