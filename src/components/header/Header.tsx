import { JSX } from "preact/jsx-runtime";
import { useState } from "preact/hooks";
import { listForAppButtons } from "../List";

export const Header = ({ selectPageDetails }: { selectPageDetails: (event: JSX.TargetedEvent<HTMLButtonElement, Event>) => void }) => {
    const [buttonIndex, setButtonIndex] = useState<string>('1');

    const handleFormSelection = (event: JSX.TargetedEvent<HTMLButtonElement, Event>) => {
        const { value } = event.currentTarget;
        selectPageDetails(event);
        setButtonIndex(value);
    };

    return (
        <header className="header">
            {listForAppButtons.map((button) => (
                <button
                    key={button.value}
                    className={buttonIndex === button.value ? 'selected_app_button' : 'app_buttons'}
                    value={button.value}
                    onClick={handleFormSelection}
                >
                    {button.text}
                </button>
            ))}
        </header>
    );
};