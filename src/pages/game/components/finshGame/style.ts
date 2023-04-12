import styled from "styled-components";

interface PropsContainerFinishGame {
    display: string;
}

export const ContainerFinishGame = styled.div<PropsContainerFinishGame>`
    background-color: rgba(0, 0, 0, 0.955);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;

    display: flex;
    align-items: center;
    justify-content: center;

    display: ${(props) => props.display};

    > section {
        color: white;
        background-color: #cd0000;
        padding: 1.2rem 0.8rem;

        margin: auto;
        width: 70%;

        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        justify-content: center;

        border-radius: 8px;

        cursor: default;
    }
    button {
        color: white;
        background-color: black;
        font-size: 25px;
    }

    h1 {
        font-size: 40px;
    }
`;
