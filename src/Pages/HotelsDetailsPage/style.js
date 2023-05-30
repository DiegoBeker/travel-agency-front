import { styled } from "styled-components";

export const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    h2{
        font-weight: 700;
        font-size: 30px;
        margin: 20px 0;
    }

   h3{
        font-weight: 700;
        font-size: 24px;
        margin: 20px 0;
    }
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    li{
        margin: 8px 0;
    }
    button{
        background-color: blueviolet;
        margin: 10px;
        color: white;
        font-size: 20px;
        font-weight: 500;
        border-radius: 5px;
    }
`;

export const PicturesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 20px;
    border: 1px solid blueviolet;
    overflow-x: scroll;
    background-color: rgba(255, 255, 255, .7);
    img{
        height: 200px;
        width:  200px;
        margin: 10px;
    }
`;

export const InfoContainer = styled.div`
    width: 45%;
    height: 300px;
    padding: 20px;
    border: 1px solid blueviolet;
    background-color: rgba(255, 255, 255, .7);
`;

export const AmenitiesContainer = styled.div`
    width: 45%;
    height: 300px;
    padding: 20px;
    border: 1px solid blueviolet;
    background-color: rgba(255, 255, 255, .7);
`;

export const HotelContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 20px 0
`;