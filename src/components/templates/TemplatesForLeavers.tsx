import { LeaverProps } from "../../types/Types"
import { Greeting, LineBreak } from "../list and sigs/EmailFillers"
import { HandleEmailAddress } from "../util/HandleEmailFunctions"

export const TemplatesForLeavers = (userForm: LeaverProps) => {
    const address = HandleEmailAddress(userForm.supervisor)
    const subject = `${userForm.ticket} - ${userForm.user} - Computer and Phone Equipment`
    const hello = Greeting(userForm.supervisor)
    const text = `${hello}
${LineBreak}
I am writing to follow up regarding a user, ${userForm.user}, who has yet to return the following ICT equipment:${LineBreak}
${LineBreak}
User Computer: ${userForm.laptop}${LineBreak}
User Mobile: ${userForm.mobile}${LineBreak}
${LineBreak}
Please note that according to our ICT policy, failure to return the aforementioned items will result in a charge to your cost department.${LineBreak}
${LineBreak}
Should you have any inquiries or concerns regarding this matter, please do not hesitate to inform me.${LineBreak}
${LineBreak}
Thank you for your attention to this matter.${LineBreak}
`
    return (
        <button className="button" onClick={() => window.location.href = `mailto:${address}?subject=${subject}&body=${text}`}>Send Email</button>
    )
}