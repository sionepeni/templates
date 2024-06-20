import { useState } from 'preact/hooks';
import { listForTicketButtons, listForTicketInputs } from "../components/List";
import { TicketProps } from "../types/Types";
import { JSX } from 'preact/jsx-runtime';
import { AccountLockout, LaptopReplacementSummary, PhoneReplacementSummary, TabletReplacementSummary } from '../components/templates/TemplatesForTicketNotes';
import { handleFormDetailsForTickets } from '../components/util/HandleForm';


export function TicketNotes() {
    const [userForm, setUserForm] = useState<TicketProps>({
        oldDevice: "Current Device",
        newDevice: "New Device",
    })
    const [generateForm, setGenerateForm] = useState(<PhoneReplacementSummary {...userForm} />)

    const handleButtonClick = (
        event: JSX.TargetedEvent<HTMLButtonElement, Event>
    ) => {
        handleFormShown(event.currentTarget.id)
    }

    const handleFormShown = (phrase: string) => {
        if (phrase === "Phone Replacement Notes") return setGenerateForm(<PhoneReplacementSummary {...userForm} />)
        if (phrase === "Laptop Replacement Notes") return setGenerateForm(<LaptopReplacementSummary {...userForm} />)
        if (phrase === "Tablet Replacement Notes") return setGenerateForm(<TabletReplacementSummary {...userForm} />)
        if (phrase === "Account Lockout") return setGenerateForm(<AccountLockout />)
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
                                        handleFormDetailsForTickets(
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
                            className="buttons"
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
                {generateForm}
            </div>
        </>
    )
}