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
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    h3{
        font-weight: 700;
        font-size: 20px;
    }
`;