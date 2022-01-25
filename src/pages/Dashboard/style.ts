import styled from 'styled-components';
import { shade } from 'polished';

export const Box = styled.main`
    display: flex;
    flex-wrap: wrap;

    height: 100%;
    width: 100%;
`;

export const Title = styled.image`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 100%;
    display: flex;
    input {
        flex: 1;
        height: 40px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        margin-bottom: 25px;
    }
    button {
        width: 210px;
        height: 40px;
        background: #ff0000;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        &:hover {
            background: ${shade(0.2, "#ff0000")};
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
        color: #fff;
        padding: 10px;
        justify-content: center;
        display: flex;
    }

    img{
        width: 350px;
        height: 300px;
    }
`;