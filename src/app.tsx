import { useState } from 'preact/hooks';
import { EmailTemplates } from './pages/EmailTemplates';
import { TicketNotes } from './pages/TicketNotes';
import "./app.css"
import { JSX } from 'preact/jsx-runtime';
import { LeaversTemplates } from './pages/LeaversTemplate';
import { listForAppButtons } from './components/List';
import { NewStarterEmail } from './pages/NewStarterEmail';

export function App() {
    const [buttonIndex, setButtonIndex] = useState<string>('1')
    const [formToRender, setFormToRender] = useState<JSX.Element>(<TicketNotes />)

    const handleFormSelection = (e: JSX.TargetedEvent<
        HTMLButtonElement,
        Event
    >) => {
        if (e.currentTarget.value === '1') return setFormToRender(<TicketNotes />), setButtonIndex('1')
        if (e.currentTarget.value === '2') return setFormToRender(<EmailTemplates />), setButtonIndex('2')
        if (e.currentTarget.value === '3') return setFormToRender(<LeaversTemplates />), setButtonIndex('3')
        if (e.currentTarget.value === '4') return setFormToRender(<NewStarterEmail />), setButtonIndex('4')
    }

    return (
        <>
            <div class='app_container'>
                {listForAppButtons.map((i) => (
                    <button className={buttonIndex === i.value ? 'selected_app_button' : 'app_buttons'} value={i.value} onClick={(event: JSX.TargetedEvent<
                        HTMLButtonElement,
                        Event
                    >) => handleFormSelection(event)}>{i.text}</button>
                ))}
            </div>
            {formToRender}
        </>
    )
}
