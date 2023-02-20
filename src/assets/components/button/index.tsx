import style from "./button.module.css";

interface PropsButton{
    action: string;
    NumberLessOrPlus: (bool: boolean) => void;
}

export function Button(props: PropsButton) {
    
    let lessOrPlus = props.action === "Next >" ? true : false;

    return (
        
        <>
            <button
                onClick={() => {
                    props.NumberLessOrPlus(lessOrPlus);
                }}
                className={style.button}
            >
                {props.action}
            </button>
        </>
    
    );

}
