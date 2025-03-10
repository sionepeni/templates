import { useState, useEffect } from 'preact/hooks';
import { listForEmailButtons, listForEmailInputs } from "../components/List";
import { EmailProps } from "../types/Types";
import { JSX } from 'preact/jsx-runtime';
import { handleFormDetailsForEmails } from '../components/util/HandleForm2';
import { OutOfLifeCycle } from '../components/templates/Out Of Life Cycle Template';
import { DeviceUpgrade } from '../components/templates/Device Upgrade Template';

export function EmailTemplates() {
    const [userForm, setUserForm] = useState<EmailProps>({
        user: "Users Name",
        ticket: "RITM000111",
        oolcDevice: "Device to upgrade",
        switch: "Laptop",
        issue: 'Issue',
        location: 'Location',
    })
    const [generateForm, setGenerateForm] = useState(<OutOfLifeCycle {...userForm} />)

    const handleButtonClick = (
        event: JSX.TargetedEvent<HTMLButtonElement, Event>
    ) => {
        handleFormShown(event.currentTarget.id)
    }

    const handleFormShown = (phrase: string) => {
        if (phrase === "Out of life cycle Email") return setGenerateForm(<OutOfLifeCycle {...userForm} />)
        if (phrase === "New, replacement Email") return setGenerateForm(<DeviceUpgrade {...userForm} />)
    }

    useEffect(() => {

    }, [userForm.switch])

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
                            {userForm.switch === "Laptop"
                                ? "Laptop"
                                : "Mobile Phone"}
                        </div>
                    </div>
                </div>

                <div className="button_container">
                    {listForEmailButtons.map((text) => (
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

