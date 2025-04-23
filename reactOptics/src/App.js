import styled from '@emotion/styled';

export const MainHeader = styled.h1`
    display: block;
    padding: 10px;
    color: blue;
    border-radius: 8px 0 8px 0;
    border: 2px solid currentColor;
    margin: 0 auto;
`;

export const List = styled.ul`
    padding: 0;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;

    & h2 {
        text-align: center;
    }

    & img {
        display: block;
        width: 400px;
        height: 400px;
        border-radius: 20px;
    }

    & li {
    justify-items: center;
        width: 500px;
        height: 500px;
        align-item: center;
        background-color: skyblue;
        padding: 0;
        margin: 0;
        list-style: none;
        border-radius: 10px;
    }
    `;