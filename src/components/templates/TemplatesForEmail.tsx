import { EmailProps, NewStarterProps } from "../../types/Types"
import { Greeting, LineBreak } from "../list and sigs/EmailFillers"
import { HandleEmailAddress } from "../util/HandleEmailFunctions"

export const OutOfLifeCycle = (userForm: EmailProps) => {
    const address = HandleEmailAddress(userForm.user)
    const subject = `${userForm.ticket} - Device Upgrade Required for ${userForm.switch} - ${userForm.oolcDevice}`
    const hello = Greeting(userForm.user)
    const text = `${hello}
    ${LineBreak}
I am assigned the Support Ticket with the description: ${LineBreak}
 ${LineBreak}
Ticket ID: ${userForm.ticket} ${LineBreak}
Description: Computer System Upgrade Ticket Creation for ${userForm.switch} ${LineBreak}
 ${LineBreak}
Your device is now out of lifecycle, and we need to arrange a suitable time to swap out your device. ${LineBreak}
 ${LineBreak}
${userForm.switch} Name: ${userForm.oolcDevice} ${LineBreak}
${LineBreak}
To resolve this, could you please advise a time when you can come into the ${userForm.location} to have your device upgraded? ${LineBreak}
Please respond by return email, update the support ticket, or message me on MS Teams to discuss this further. ${LineBreak}
${LineBreak}
I will attempt to contact you again over the next two to three working days. I look forward to speaking with you soon. ${LineBreak}
${LineBreak}
Thank you. ${LineBreak}
${LineBreak}
`
    return (
        <button className="button" onClick={() => window.location.href = `mailto:${address}?subject=${subject}&body=${text}`}>Send Email</button>
    )
}

export const DeviceUpgrade = (userForm: EmailProps) => {
    const address = HandleEmailAddress(userForm.user)
    const subject = `${userForm.ticket} - New, replacement or upgraded ${userForm.switch}`
    const hello = Greeting(userForm.user)
    console.log(userForm.switch)
    const text = `${hello}
    ${LineBreak}
I am assigned the Support Ticket with the description:${LineBreak}
${LineBreak}
Ticket ID: ${userForm.ticket}${LineBreak}
Description: New, replacement or upgraded ${userForm.switch}${LineBreak}
${LineBreak}
Could we arrange a convenient time for you to visit the ${userForm.location} so we can proceed with setting up your requested ${userForm.switch}? This process will require the utilization of your credentials and is expected to take approximately 30 to 40 minutes.${LineBreak}
${LineBreak}
I will attempt to contact you again over the next two to three working days. I look forward to speaking with you soon.${LineBreak}
${LineBreak}
Thank you.${LineBreak}
${LineBreak}
`
    return (
        <button className="button" onClick={() => window.location.href = `mailto:${address}?subject=${subject}&body=${text}`}>Send Email</button>
    )
}

export const Incident = (userForm: EmailProps) => {
    const address = HandleEmailAddress(userForm.user)
    const hello = Greeting(userForm.user)
    const text = `${hello}
    ${LineBreak}
I am assigned the Support Ticket with the description:${LineBreak}
${LineBreak}
Ticket ID: ${userForm.ticket}${LineBreak}
Issue: ${userForm.issue}${LineBreak}
${LineBreak}
[More Info]${LineBreak}
${LineBreak}
Please respond by return email, update the support ticket, or message me on MS Teams to discuss this further.${LineBreak}
${LineBreak}
I will attempt to contact you again over the next two to three working days. I look forward to speaking with you soon.${LineBreak}
${LineBreak}
Thank you.${LineBreak}
${LineBreak}
`
    return (
        <button className="button" onClick={() => window.location.href = `mailto:${address}?subject=${userForm.ticket}&body=${text}`}>Send Email</button>
    )
}

export const NewStarterPackage = (userForm: NewStarterProps) => {
    const address = HandleEmailAddress(userForm.supervisor)
    const subject = `${userForm.ticket} - ${userForm.user} - New Starter Package`
    const hello = Greeting(userForm.supervisor)
    const text = `${hello}
    ${LineBreak}
I hope this message finds you well. ${LineBreak}
${LineBreak}
I am pleased to inform you that the new starter package for ${userForm.user} is ready to be collected on ${userForm.date} from the ${userForm.location}. ${LineBreak}
${LineBreak}
Should you have any inquiries or require further assistance, please do not hesitate to reach out.${LineBreak}
${LineBreak}
`

    return (
        <button className="button" onClick={() => window.location.href = `mailto:${address}?subject=${subject}&body=${text}`}>Send Email</button>
    )
}