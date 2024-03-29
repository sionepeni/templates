import { useState } from 'preact/hooks';
import { listForLeaverInputs } from "../components/List";
import { LeaverProps } from "../types/Types";
import { JSX } from 'preact/jsx-runtime';
import { handleFormDetailsForLeavers } from '../components/util/HandleForm';
import { TemplatesForLeavers } from '../components/templates/TemplatesForLeavers';

export function LeaversTemplates() {
    const [userForm, setUserForm] = useState<LeaverProps>({
        user: "Users Name",
        ticket: "RITM000111",
        supervisor: "Users TL",
        laptop: 'Laptop',
        mobile: 'Phone'
    })

    return (
        <>
            <div className="options_container">
                <div className="input_container">
                    {listForLeaverInputs.map((text) => (
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
                                        handleFormDetailsForLeavers(
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
                <TemplatesForLeavers {...userForm} />
            </div>
        </>
    )
}