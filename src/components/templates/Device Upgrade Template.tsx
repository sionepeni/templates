import { DetailProps } from "../../types/Types"
import { HandleEmailAddress } from "../email fillers/Email Address Handler"
import { Greeting } from "../email fillers/Email Greeting"
import { LineBreak } from "../email fillers/Email Linebreak"

export const DeviceUpgrade = (userForm: DetailProps) => {
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