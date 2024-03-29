import styled from "styled-components";

export const ConteinerStats = styled.section`
    margin-top: 20px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    
    h2 {
        font-size: 40px;
    }
    .statsInfomations {
        display: flex;
        flex-direction: column;

        width: 100%;
        padding: 0 20px;
    }
    .statsNames {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        align-items: center;

        font-size: 25px;

        width: 100%;
    }
    .statsNames > p {
        word-break: keep-all;
    }
    .statsValues {
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
    }
    .statsValues > .input {
        width: 150px;
        height: 15px;

        border: 0.5px solid gray;
    }

    @media (max-width: 749px) {
        && > h2 {
            font-size: clamp(30px, 5vw, 30px);
        }
        .statsNames {
            font-size: 20px;
        }
    }
    @media (max-width: 519px) {
        && {
            gap: 5px;
            margin-top: 5px;
        }
        .statsNames {
            flex-direction: column;
            gap: 5px;
        }
    }
`
