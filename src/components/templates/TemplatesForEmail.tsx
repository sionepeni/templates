import { EmailForm } from "../../types/Types"
import { ContentWrapper } from "../ContentWrapper"

export const OutOfLifeCycle = (userForm: EmailForm) => {
    let text = `${userForm.ticket} - Device Upgrade Required for ${userForm.oldDevice}

Kia Ora ${userForm.user},

I am assigned the Support Ticket with the description:

Ticket ID: ${userForm.ticket}

Description: Computer System Upgrade Ticket Creation

Your device is now out of lifecycle, and we need to arrange a suitable time to swap out your device.

Device Name: ${userForm.oldDevice}

To resolve this, could you please advise a time when you can come into the Manukau Civic Building to have your device upgraded?

Please respond by return email, update the support ticket, or message me on MS Teams to discuss this further.

I will attempt to contact you again over the next two to three working days. I look forward to speaking with you soon.<br />

Thank you.`

    return (
        <ContentWrapper text={text} />
    )
}

export const DeviceUpgrade = (userForm: EmailForm) => {
    let text = `${userForm.ticket} - New, replacement or upgraded ${userForm.switch}

Kia Ora ${userForm.user},

I am assigned the Support Ticket with the description:

Ticket ID: ${userForm.ticket}

Description: New, replacement or upgraded ${userForm.switch}

Could we arrange a convenient time for you to visit the Manukau Civic Building so we can proceed with setting up your requested phone? This process will require the utilization of your credentials and is expected to take approximately 30 to 40 minutes.

I will attempt to contact you again over the next two to three working days. I look forward to speaking with you soon.

Thank you.`

    return (
        <ContentWrapper text={text} />
    )
}

export const Leaver = (userForm: EmailForm) => {
    let text = `${userForm.ticket} - ${userForm.user} - Computer and Phone Equipment

Kia Ora ${userForm.supervisor},

I am writing to follow up regarding a user, ${userForm.user}, who has yet to return the following ICT equipment:

1. User Computer: ${userForm.laptop}

2. User Mobile: ${userForm.mobile}

Please note that according to our ICT policy, failure to return the aforementioned items will result in a charge to your cost department.

Should you have any inquiries or concerns regarding this matter, please do not hesitate to inform us.

Thank you for your attention to this issue.`

    return (
        <ContentWrapper text={text} />
    )
}