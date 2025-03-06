import { useState } from 'preact/hooks';
import { listForNewStarterInputs } from "../components/List";
import { NewStarterProps } from "../types/Types";
import { JSX } from 'preact/jsx-runtime'
import { handleFormDetailsForNewStarters } from '../components/util/HandleForm';
import { NewStarterPackage } from '../components/templates/New Starter Package Template';

export function NewStarterEmail() {
    const [userForm, setUserForm] = useState<NewStarterProps>({
        user: "Users Name",
        ticket: "RITM000111",
        supervisor: "Users TL",
        date: 'dd/mm',
        location: 'Location',
    })

    return (
        <>
            <div className="options_container">
                <div className="input_container">
                    {listForNewStarterInputs.map((text) => (
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
                                        handleFormDetailsForNewStarters(
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

            </div>

            <div className="content">
                <NewStarterPackage {...userForm} />
            </div>
        </>
    )
}

