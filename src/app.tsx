import { useState } from 'preact/hooks';
import { EmailTemplates } from './pages/EmailTemplates';
import { TicketNotes } from './pages/TicketNotes';
import "./app.css"
import { JSX } from 'preact/jsx-runtime';
import { LeaversTemplates } from './pages/LeaversTemplate';
import { NewStarterEmail } from './pages/NewStarterEmail';
import { Header } from './components/header/Header';

export function App() {

    const [formToRender, setFormToRender] = useState<JSX.Element>(<TicketNotes />)

    const handlePageSelection = (e: JSX.TargetedEvent<HTMLButtonElement>) =>{
        if (e.currentTarget.value === '1') return setFormToRender(<TicketNotes />)
            if (e.currentTarget.value === '2') return setFormToRender(<EmailTemplates />)
            if (e.currentTarget.value === '3') return setFormToRender(<LeaversTemplates />)
            if (e.currentTarget.value === '4') return setFormToRender(<NewStarterEmail />)
    }

    return (
        <>
        <Header selectPageDetails={handlePageSelection}/>
            {formToRender}
        </>
    )
}
