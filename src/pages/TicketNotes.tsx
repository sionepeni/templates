import { useState } from 'preact/hooks';
import { listForTicketButtons, listForTicketInputs } from "../components/List";
import { DetailForm } from "../types/Types";
import { JSX } from 'preact/jsx-runtime';
import { LaptopReplacementSummary, PhoneReplacementSummary } from '../components/templates/TemplatesForTicketNotes';
import { handleFormDetails } from '../components/util/HandleForm';


export function TicketNotes() {
    const [formSelected, setFormSelected] = useState("")
    const [buttonIndex, setButtonIndex] = useState<string>('')
    const [userForm, setUserForm] = useState<DetailForm>({
        user: "Users Name",
        ticket: "RITM000111",
        oldDevice: "Current Device",
        supervisor: "Users TL",
        laptop: "Laptop",
        mobile: "Phone",
        switch: "Laptop",
        newDevice: "New Device",
        issue: 'Issue'
    })

    const handleButtonClick = (
        event: JSX.TargetedEvent<HTMLButtonElement, Event>
    ) => {
        setFormSelected(event.currentTarget.id), setButtonIndex(event.currentTarget.value)
    }

    return (
        <>
            <div className="options_container">
                <div className="input_container">
                    {listForTicketInputs.map((text) => (
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
                                    ) =>
                                        handleFormDetails(
                                            event,
                                            userForm,
                                            setUserForm
                                        )
                                    }
                                    style={{ width: "350px" }}
                                />
                            </div>
                        </>
                    ))}
                </div>

                <div className="button_container">
                    {listForTicketButtons.map((text) => (
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
                {formSelected === "Phone Replacement Notes" ? (
                    <PhoneReplacementSummary {...userForm} />
                ) : (
                    <LaptopReplacementSummary {...userForm} />
                )}
            </div>
        </>
    )
}