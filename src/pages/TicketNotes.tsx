import { useState } from 'preact/hooks';
import { listForButtons, listForInputs } from "../components/List";
import { TicketForm } from "../types/Types";
import { JSX } from 'preact/jsx-runtime';
import { LaptopReplacementSummary, PhoneReplacementSummary } from '../components/templates/TemplatesForTicketNotes';


export function TicketNotes() {
    const [formSelected, setFormSelected] = useState("")
    const [buttonIndex, setButtonIndex] = useState<string>('')
    const [userForm, setUserForm] = useState<TicketForm>({
        user: "Users Name",
        ticket: "RITM000111",
        oldDevice: "Current Device",
        newDevice: "New Device",
    })

    const handleFormDetails = (
        event: JSX.TargetedEvent<HTMLInputElement, Event>
    ) => {
        if (event.currentTarget.id === "ticket")
            return setUserForm({ ...userForm, ticket: event.currentTarget.value })
        if (event.currentTarget.id === "oldDevice")
            return setUserForm({ ...userForm, oldDevice: event.currentTarget.value })
        if (event.currentTarget.id === "newDevice")
            return setUserForm({ ...userForm, newDevice: event.currentTarget.value })
        if (event.currentTarget.id === "user")
            return setUserForm({ ...userForm, user: event.currentTarget.value })
    }

    const handleButtonClick = (
        event: JSX.TargetedEvent<HTMLButtonElement, Event>
    ) => {
        setFormSelected(event.currentTarget.id), setButtonIndex(event.currentTarget.value)
    }

    return (
        <>
            <div className="options_container">
                <div className="input_container">
                    {listForInputs.map((text) => (
                        <>
                            <div className="input_field">
                                {text.text}:{" "}
                                <input
                                    id={text.id}
                                    placeholder={text.text}
                                    onChange={(
                                        event: JSX.TargetedEvent<
                                            HTMLInputElement,
                                            Event
                                        >
                                    ) => handleFormDetails(event)}
                                    style={{ width: "350px" }}
                                />
                            </div>
                        </>
                    ))}


                </div>

                <div className="button_container">
                    {listForButtons.map((text) => (
                        <button
                            key={text.index}
                            id={text.id}
                            value={text.index}
                            className={
                                parseInt(buttonIndex) === text.index
                                    ? "selectedButton"
                                    : "buttons"
                            }
                            onClick={(
                                event: JSX.TargetedEvent<
                                    HTMLButtonElement,
                                    Event
                                >
                            ) => handleButtonClick(event)}
                        >
                            {text.id}
                        </button>
                    ))}
                </div>
            </div>

            <div className="content">
                {formSelected === "Phone Replacement Notes" ?
                    <PhoneReplacementSummary {...userForm} />
                    :
                    <LaptopReplacementSummary {...userForm} />}
            </div>
        </>
    )
}