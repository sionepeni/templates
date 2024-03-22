import { useState } from 'preact/hooks';
import { listForEmailButtons, listForEmailInputs } from "../components/List";
import { EmailProps } from "../types/Types";
import { JSX } from 'preact/jsx-runtime';
import { DeviceUpgrade, Incident, OutOfLifeCycle } from '../components/templates/TemplatesForEmail';
import { handleFormDetailsForEmails } from '../components/util/HandleForm';

export function EmailTemplates() {
    const [formSelected, setFormSelected] = useState("Out of life cycle Email")
    const [buttonIndex, setButtonIndex] = useState<string>('0')
    const [userForm, setUserForm] = useState<EmailProps>({
        user: "Users Name",
        ticket: "RITM000111",
        oldDevice: "Current Device",
        switch: "Laptop",
        issue: 'Issue',
    })
    const [generateForm, setGenerateForm] = useState(<OutOfLifeCycle {...userForm} />)

    const handleButtonClick = (
        event: JSX.TargetedEvent<HTMLButtonElement, Event>
    ) => {
        handleFormShown(event.currentTarget.id), setButtonIndex(event.currentTarget.value)
    }

    const handleFormShown = (phrase: string) => {
        setFormSelected(phrase)
        if (phrase === "Out of life cycle Email") return setGenerateForm(<OutOfLifeCycle {...userForm} />)
        if (phrase === "New, replacement Email") return setGenerateForm(<DeviceUpgrade {...userForm} />)
        if (phrase === "Incident Email") return setGenerateForm(<Incident {...userForm} />)
    }

    return (
        <>
            <div className="options_container">
                <div className="input_container">
                    {listForEmailInputs.map((text) => (
                        <>
                            <div className="input_field">
                                {text.text}
                                <input
                                    id={text.id}
                                    placeholder={text.text}
                                    onChange={(
                                        event: JSX.TargetedEvent<
                                            HTMLInputElement,
                                            Event
                                        >
                                    ) =>
                                        handleFormDetailsForEmails(
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

                    {formSelected === "New, replacement Email" ? (
                        <div className="extra_options">
                            <div className="little-prompt">
                                Switch:{" "}
                                <input
                                    type="checkbox"
                                    onChange={(
                                        event: JSX.TargetedEvent<
                                            HTMLInputElement,
                                            Event
                                        >
                                    ) =>
                                        handleFormDetailsForEmails(
                                            event,
                                            userForm,
                                            setUserForm
                                        )
                                    }
                                ></input>
                                {userForm.switch === "Phone"
                                    ? "Phone"
                                    : "Laptop"}
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                <div className="button_container">
                    {listForEmailButtons.map((text) => (
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
                {generateForm}
            </div>
        </>
    )
}

