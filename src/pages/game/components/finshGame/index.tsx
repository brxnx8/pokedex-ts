import { ContainerFinishGame } from "./style";

interface PropsFinish {
    display: string;
    text: string;
    reset: () => void;
}

export function FinishGame({ display, text, reset }: PropsFinish) {
    return (
        <ContainerFinishGame display={display}>
            <section>
                <h1>{text}</h1>
                <button onClick={() => reset()}>Fim</button>
            </section>
        </ContainerFinishGame>
    );
}
