import { useState } from 'preact/hooks';
import { listForLeaverInputs } from "../components/List";
import { DetailForm, LeaverInputs } from "../types/Types";
import { JSX } from 'preact/jsx-runtime';
import { handleFormDetails } from '../components/util/HandleForm';
import { ContentWrapper } from '../components/ContentWrapper';

export function LeaversTemplates() {
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
    const [phoneSelected, setPhoneSelected] = useState(false)
    const [laptopSelected, setLaptopSelected] = useState(false)
    const [devices, setDevices] = useState<any>([{ laptop: '', phone: '' }])

    const handleCheckboxInputs = (event: JSX.TargetedEvent<HTMLInputElement, Event>) => {
        switch (event.currentTarget.value) {
            case 'Leavers Phone':
                return event.currentTarget.checked === true ? setDevices({ ...devices, phone: `User Phone: ${userForm.mobile}` }) : setDevices({ ...devices, phone: `` })
            case 'Leavers Laptop':
                return event.currentTarget.checked === true ? setDevices({ ...devices, laptop: `User Laptop: ${userForm.mobile}` }) : setDevices({ ...devices, laptop: `` })
        }
    }

    let text = `${userForm.ticket} - ${userForm.user} - Computer and Phone Equipment

Kia Ora ${userForm.supervisor},
    
I am writing to follow up regarding a user, ${userForm.user}, who has yet to return the following ICT equipment:
    
${devices.map((i: any) => (
        { i }
    ))}
    
Please note that according to our ICT policy, failure to return the aforementioned items will result in a charge to your cost department.
    
Should you have any inquiries or concerns regarding this matter, please do not hesitate to inform us.
    
Thank you for your attention to this issue.`

    return (
        <>
            <div className="options_container">
                <div className="input_container">
                    {listForLeaverInputs.map((text) => (
                        <>
                            <div className="input_field">
                                {text.text}{text.checkbox === true ? <input type='checkbox' value={text.text} onChange={(event: JSX.TargetedEvent<HTMLInputElement, Event>) => handleCheckboxInputs(event)} /> : ''}
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
                <ContentWrapper text={text} />
            </div>
        </>
    )
}

