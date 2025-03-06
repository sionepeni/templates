import { NewStarterProps } from "../../types/Types"
import { HandleEmailAddress } from "../email fillers/Email Address Handler"
import { Greeting } from "../email fillers/Email Greeting"
import { LineBreak } from "../email fillers/Email Linebreak"

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