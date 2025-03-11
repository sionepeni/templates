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
        location: 'Manukau Civic Building', 
    });

    const [generateForm, setGenerateForm] = useState(<OutOfLifeCycle {...userForm} />);

    const locations = [
        { label: "Manukau", value: "Manukau Building" },
        { label: "Henderson", value: "Henderson Building" },
        { label: "Albany", value: "Albany Building" },
        { label: "Albert St", value: "Albert St Building" },
    ];

    const options = [
        {label: 'Laptop', value: 'laptop'},
        {label: 'Phone', value: 'mobile phone'}
    ]

    const handleButtonClick = (event: JSX.TargetedEvent<HTMLButtonElement, Event>) => {
        handleFormShown(event.currentTarget.id);
    };

    const handleFormShown = (phrase: string) => {
        if (phrase === "Out of life cycle Email") return setGenerateForm(<OutOfLifeCycle {...userForm} />);
        if (phrase === "New, replacement Email") return setGenerateForm(<DeviceUpgrade {...userForm} />);
    };

    const handleLocationChange = (event: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
        const { value } = event.currentTarget;
        setUserForm((prevState) => ({ ...prevState, location: value }));
    };

    const handleSwitchChange = (event: JSX.TargetedEvent<HTMLInputElement, Event>) => {
        const { value } = event.currentTarget;
        setUserForm((prevState) => ({ ...prevState, switch: value }));
    };

    useEffect(() => {
    }, [userForm.switch]);

    return (
        <>
            <div className="options_container">
                <div className="input_container">
                    {listForEmailInputs.map((text) => (
                        <div key={text.id} className="input_field">
                            {text.text}
                            <input
                                id={text.id}
                                placeholder={text.text}
                                onChange={(event: JSX.TargetedEvent<HTMLInputElement, Event>) =>
                                    handleFormDetailsForEmails(event, userForm, setUserForm)
                                }
                                style={{ width: "350px" }}
                            />
                        </div>
                    ))}

                    {/* Location Dropdown */}
                    <div className="input_field">
                        Location
                        <select
                            id="location"
                            value={userForm.location}
                            onChange={handleLocationChange}
                            style={{ width: "350px" }}
                        >
                            {locations.map((location) => (
                                <option key={location.label} value={location.value}>
                                    {location.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Switch Options */}
                    <div className="extra_options">
                        <div className="little-prompt">
                            {options.map((option) => (
                                <label key={option.value}>
                                    <input
                                        type="radio"
                                        name="switch"
                                        value={option.value}
                                        checked={userForm.switch === option.value}
                                        onChange={handleSwitchChange}
                                    />
                                    {option.label}
                                </label>
                            ))}
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
                            onClick={(event: JSX.TargetedEvent<HTMLButtonElement, Event>) => handleButtonClick(event)}
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
    );
}