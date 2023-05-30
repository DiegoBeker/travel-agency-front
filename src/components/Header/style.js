import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    height: 80px;
    padding: 10px 20px;
    background-color: blueviolet;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    span{
        font-weight: 500;
        font-size: 28px;
        margin: 0 20px;
        cursor: pointer;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 36px;
    h1{
        font-weight: 700;
        margin: 0 10px;
    }
`;