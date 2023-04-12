import { ButtonLessOrPlus } from "./style";

interface PropsButton {
    action: string;
    NumberLessOrPlus: (bool: boolean) => void;
}

export function Button(props: PropsButton) {

    let lessOrPlus = props.action === "Prox >" ? true : false;

    return (
        <>
            <ButtonLessOrPlus
                onClick={() => {
                    props.NumberLessOrPlus(lessOrPlus);
                }}
            >
                {props.action}
            </ButtonLessOrPlus>
        </>
    );

}
