import styled from 'styled-components';
import { shade } from 'polished';

export const Box = styled.main`
    display: flex;
    flex-wrap: wrap;

    height: 100%;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 48px;
    color: #f00000;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
    }
    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        &:hover {
            background: ${shade(0.2, "#04d361")};
        }
    }
`;

export const Card1 = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
`;

export const Card2 = styled.div`
    background: #ff0000;
    height: 350px;
    width: 300px;
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;

    strong {
        padding: 10px;
        justify-content: center;
        display: flex;
    }

    img{
        width: 350px;
        height: 300px;
    }

    div#img{
        background: #f1f1f1;
        background-size: cover;

        width: 100%;

    }
`;