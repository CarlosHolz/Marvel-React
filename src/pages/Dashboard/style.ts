import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
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
    background: #f1f1f1;
    height: 450px;
    width: 300px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;

    strong, 
    p{
        padding: 5px;
        text-align: center;

    }

    div#img{
        background: #f1f1f1;
        background-size: cover;

        height: 400px;
        width: 100%;

    }
`;