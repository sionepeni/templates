import { DetailProps } from "../../types/Types"
import { HandleEmailAddress } from "../email fillers/Email Address Handler"
import { Greeting } from "../email fillers/Email Greeting"
import { LineBreak } from "../email fillers/Email Linebreak"


export const OutOfLifeCycle = (userForm: DetailProps) => {
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