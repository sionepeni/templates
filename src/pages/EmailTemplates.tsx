import { useState } from 'preact/hooks';
import { listForEmailButtons, listForEmailInputs } from "../components/List";
import { EmailForm } from "../types/Types";
import { JSX } from 'preact/jsx-runtime';
import { DeviceUpgrade, Leaver, OutOfLifeCycle } from '../components/templates/TemplatesForEmail';
import { handleFormDetails } from '../components/util/HandleForm';

export function EmailTemplates() {
    const [formSelected, setFormSelected] = useState("")
    const [buttonIndex, setButtonIndex] = useState<string>('')
    const [userForm, setUserForm] = useState<EmailForm>({
        user: "Users Name",
        ticket: "RITM000111",
        oldDevice: "Current Device",
        supervisor: "Users TL",
        laptop: "Laptop",
        mobile: "Phone",
        switch: "Laptop",
    })

    const handlePhoneOrLaptop = (
        event: JSX.TargetedEvent<HTMLInputElement, Event>
    ) => {
        if (event.currentTarget.checked === true)
            return setUserForm({ ...userForm, switch: "Phone" })
        return setUserForm({ ...userForm, switch: "Laptop" })
    }

    const handleButtonClick = (
        event: JSX.TargetedEvent<HTMLButtonElement, Event>
    ) => {
        setFormSelected(event.currentTarget.id), setButtonIndex(event.currentTarget.value)
    }
    console.log(userForm)

    return (
        <>
            <div className="options_container">
                <div className="input_container">
                    {listForEmailInputs.map((text) => (
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
                                    ) => handleFormDetails(event, userForm, setUserForm)}
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
                                    ) => handlePhoneOrLaptop(event)}
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
                {formSelected === "Out of life cycle Email" ? (
                    <OutOfLifeCycle {...userForm} />
                ) : formSelected === "New, replacement Email" ? (
                    <DeviceUpgrade {...userForm} />
                ) : (
                    <Leaver {...userForm} />
                )}
            </div>
        </>
    )
}
