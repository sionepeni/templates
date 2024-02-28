import { useState } from 'preact/hooks';
import { EmailTemplates } from './pages/EmailTemplates';
import { TicketNotes } from './pages/TicketNotes';
import "./app.css"

export function App() {
    const [formToRender, setFormToRender] = useState<any>(<TicketNotes />)

    const handleFormSelection = (e: any) => {
        setFormToRender(e)
    }

    return (
        <>
            <button onClick={() => handleFormSelection(<TicketNotes />)}>Ticket Notes</button>
            <button onClick={() => handleFormSelection(< EmailTemplates />)}>Email Templates</button>
            {formToRender}
        </>
    )
}
