import { useState } from 'preact/hooks';
import "./app.css"
import { DeviceUpgrade, LaptopReplacementSummary, Leaver, OutOfLifeCycle, PhoneReplacementSummary } from './components/Templates';
import { listForButtons, listForInputs } from './components/List';
import { BasicForm } from './types/Types';
import { JSX } from 'preact/jsx-runtime';

export function App() {
    const [formSelected, setFormSelected] = useState("")
    const [buttonIndex, setButtonIndex] = useState<string>('')
    const [userForm, setUserForm] = useState<BasicForm>({
        name: "",
        ticket: "RITM000111",
        oldDevice: "Current Device",
        newDevice: "New Device",
        user: "Users Name",
        supervisor: "Users TL",
        laptop: "Laptop",
        mobile: "Phone",
        switch: "Laptop",
    })

    const handleButtonClick = (
        event: JSX.TargetedEvent<HTMLButtonElement, Event>
    ) => {
        setFormSelected(event.currentTarget.id), setButtonIndex(event.currentTarget.value)
    }

    const handleFormDetails = (
        event: JSX.TargetedEvent<HTMLInputElement, Event>
    ) => {
        if (event.currentTarget.id === "ticket")
            return setUserForm({ ...userForm, ticket: event.currentTarget.value })
        if (event.currentTarget.id === "oldDevice")
            return setUserForm({ ...userForm, oldDevice: event.currentTarget.value })
        if (event.currentTarget.id === "newDevice")
            return setUserForm({ ...userForm, newDevice: event.currentTarget.value })
        if (event.currentTarget.id  === "user")
            return setUserForm({ ...userForm, user: event.currentTarget.value })
        if (event.currentTarget.id  === "supervisor")
            return setUserForm({ ...userForm, supervisor: event.currentTarget.value })
        if (event.currentTarget.id  === "laptop")
            return setUserForm({ ...userForm, laptop: event.currentTarget.value })
        if (event.currentTarget.id  === "mobile")
            return setUserForm({ ...userForm, mobile: event.currentTarget.value })
    }

    const handlePhoneOrLaptop = (
        event: JSX.TargetedEvent<HTMLInputElement, Event>
    ) => {
        if (event.currentTarget.checked === true)
            return setUserForm({ ...userForm, switch: "Phone" })
        return setUserForm({ ...userForm, switch: "Laptop" })
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
                {formSelected === "Phone Replacement Notes" ? (
                    <PhoneReplacementSummary {...userForm} />
                ) : formSelected === "Laptop Replacement Notes" ? (
                    <LaptopReplacementSummary {...userForm} />
                ) : formSelected === "Out of life cycle Email" ? (
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
