import { DetailForm } from "../../types/Types"
import { Greeting, LineBreak, Signature } from "../list and sigs/EmailFillers"
import { HandleEmailAddress } from "../util/HandleEmailFunctions"

export const ChargeLostEquipment = (userForm: DetailForm) => {
    const address = HandleEmailAddress(userForm.supervisor)
    const subject = `${userForm.ticket} - Cost Centre Charge`
    const hello = Greeting(userForm.supervisor)
    const text = `${hello}
    ${LineBreak}
Kia Ora ${userForm.supervisor},${LineBreak}
${LineBreak}
I hope this message finds you well. ${LineBreak}
${LineBreak}
I wanted to inform you that ${userForm.ticket} recently lost their ${userForm.lostDevice}. As a result, a ${userForm.lostDevice} has been provided and charged to your cost centre.${LineBreak}
${LineBreak}
Please note that the cost for the replacement ${userForm.lostDevice} amounts to $${userForm.amount}.${LineBreak}
${LineBreak}
Should you have any inquiries or concerns regarding this matter, please do not hesitate to inform us.${LineBreak}
${LineBreak}
Thank you for your attention to this matter.${LineBreak}
${LineBreak}
${Signature}`
    return (
        <button className="button" onClick={() => window.location.href = `mailto:${address}?subject=${subject}&body=${text}`}>Send Email</button>
    )
}