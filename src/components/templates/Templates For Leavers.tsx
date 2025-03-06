import { LeaverProps } from "../../types/Types"
import { Greeting } from "../email fillers/Email Greeting"
import { LineBreak } from "../email fillers/Email Linebreak"
import { HandleEmailAddress } from "../util/HandleEmailFunctions"

interface LeaverProps2 {
    user: string;
    ticket: string;
    supervisor: string;
    equipment: { [key: string]: string }; // Dynamic equipment list
}

export const TemplatesForLeavers = (userForm: LeaverProps2) => {
    const address = HandleEmailAddress(userForm.supervisor);
    const subject = encodeURIComponent(`${userForm.ticket} - ${userForm.user} - Equipment Return`);
    const hello = Greeting(userForm.supervisor); // Use the updated Greeting function

    // Generate equipment list dynamically, with each item on its own line
    const equipmentList = Object.entries(userForm.equipment)
        .map(([key, value]) => `${key}: ${value}`) // Format each equipment entry
        .join('\n'); // Join with line breaks

    const emailBody = `${hello}I am writing to follow up regarding a user, ${userForm.user}, who has yet to return the following ICT equipment:\n\n${equipmentList}\n\nPlease note that according to our ICT policy, failure to return the aforementioned items will result in a charge to your cost department.\n\nShould you have any inquiries or concerns regarding this matter, please do not hesitate to inform me.\n\nThank you for your attention to this matter.`;

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