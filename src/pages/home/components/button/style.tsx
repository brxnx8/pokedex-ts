import styled from "styled-components";

export const ButtonLessOrPlus = styled.button`
    width: 50%;
    padding: 4%;

    border: 2px solid black;
    border-radius: 4px;

    font-size: clamp(13px, 9vw, 1.8rem);
    font-weight: 600;

    color: white;
    background-color: #444;

    box-shadow: -2px 3px 0 #222, -4px 6px 0 black;

    cursor: pointer;

    outline: none;

    &&:hover {
        background-color: #333333;
        color: #eee;
    }
    &&:active {
        box-shadow: inset -4px 4px 0 #222;
        font-size: 0.9rem;
    }
`

