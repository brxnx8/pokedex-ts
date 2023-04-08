import styled from "styled-components";

interface ContainerChooseStatsProps {
    display:string
}

export const ContainerChooseStats = styled.section<ContainerChooseStatsProps>`
    background-color: rgba(0, 0, 0, 0.774);

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

    
    .containerStats{
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
    


    .containerStats > h2 {
        font-size: 40px;
    }
    .statsInfomations {
        display: flex;
        flex-direction: column;
        gap: 20px;

        width: 100%;
        padding: 0 20px;
    }
    .statsNames {
        background-color: black;
        border-radius: 8px;

        display: flex;
        justify-content: space-between;
        gap: 20px;
        align-items: center;

        font-size: 25px;

        width: 100%;
        padding: 10px;

        cursor: pointer;
    }
    .statsNames:hover{
        background-color: gray;
    }
    .statsNames > p {
        word-break: keep-all;
    }

    @media (max-width: 749px) {
        .containerStats > h2 {
            font-size: clamp(30px, 5vw, 30px);
        }
        .statsNames {
            font-size: 20px;
        }
    }
    @media (max-width: 519px) {
        .containerStats {
            gap: 5px;
            margin-top: 5px;
        }
        .statsNames {
            flex-direction: column;
            gap: 5px;
        }
    }

`
    

