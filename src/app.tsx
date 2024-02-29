import { useState } from 'preact/hooks';
import { EmailTemplates } from './pages/EmailTemplates';
import { TicketNotes } from './pages/TicketNotes';
import "./app.css"
import { JSX } from 'preact/jsx-runtime';

export function App() {
    const [buttonIndex, setButtonIndex] = useState<string>('1')
    const [formToRender, setFormToRender] = useState<JSX.Element>(<TicketNotes />)

    const handleFormSelection = (e: JSX.TargetedEvent<
        HTMLButtonElement,
        Event
    >) => {
        if (e.currentTarget.value === '1') return setFormToRender(<TicketNotes />), setButtonIndex('1')
        if (e.currentTarget.value === '2') return setFormToRender(<EmailTemplates />), setButtonIndex('2')
    }

    return (
        <>
            <div class='app_container'>
                <button className={buttonIndex === '1' ? 'selected_app_button' : 'app_buttons'} value='1' onClick={(event: JSX.TargetedEvent<
                    HTMLButtonElement,
                    Event
                >) => handleFormSelection(event)}>Ticket Notes</button>
                <button className={buttonIndex === '2' ? 'selected_app_button' : 'app_buttons'} value='2' onClick={(event: JSX.TargetedEvent<
                    HTMLButtonElement,
                    Event
                >) => handleFormSelection(event)}>Email Templates</button>
            </div>
            {formToRender}
        </>
    )
}
