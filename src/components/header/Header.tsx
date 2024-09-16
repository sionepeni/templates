import { JSX } from "preact/jsx-runtime"
import { listForAppButtons } from "../List"
import { useState } from "preact/hooks"

export const Header = ({selectPageDetails}: any) => {
    const [buttonIndex, setButtonIndex] = useState<string>('1')

    const handleFormSelection = (e: JSX.TargetedEvent<
        HTMLButtonElement,
        Event
    >) => {
        selectPageDetails(e)
        if (e.currentTarget.value === '1') return setButtonIndex('1')
        if (e.currentTarget.value === '2') return setButtonIndex('2')
        if (e.currentTarget.value === '3') return setButtonIndex('3')
        if (e.currentTarget.value === '4') return setButtonIndex('4')
    }

    return(
    <header class='header'>
                {listForAppButtons.map((i) => (
                    <button className={buttonIndex === i.value ? 'selected_app_button' : 'app_buttons'}  value={i.value} onClick={(event: JSX.TargetedEvent<
                        HTMLButtonElement,
                        Event
                    >) => handleFormSelection(event)}>{i.text}</button>
                ))}
            </header>
            )     
}