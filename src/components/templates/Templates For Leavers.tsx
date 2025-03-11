import { Greeting } from "../email fillers/Email Greeting"
import { HandleEmailAddress } from "../util/HandleEmailFunctions"

interface LeaverProps2 {
    user: string;
    ticket: string;
    supervisor: string;
    equipment: { [key: string]: string };
}

export const TemplatesForLeavers = (userForm: LeaverProps2) => {
    const address = HandleEmailAddress(userForm.supervisor);
    const subject = encodeURIComponent(`${userForm.ticket} - ${userForm.user} - Equipment Return`);
    const hello = Greeting(userForm.supervisor); 
    
    const equipmentList = Object.entries(userForm.equipment)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n'); 

    const emailBody = `${hello}\nI am writing to follow up regarding a user, ${userForm.user}, who has yet to return the following ICT equipment:\n\n${equipmentList}\n\nPlease note that according to our ICT policy, failure to return the aforementioned items will result in a charge to your cost department.\n\nShould you have any inquiries or concerns regarding this matter, please do not hesitate to inform me.\n\nThank you for your attention to this matter.`;

    const mailtoLink = `mailto:${address}?subject=${subject}&body=${encodeURIComponent(emailBody)}`;

    return (
        <button
            className="button"
            onClick={() => window.location.href = mailtoLink}
        >
            Send Email
        </button>
    );
};