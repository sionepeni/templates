import { Greeting } from "../email fillers/Email Greeting";
import { HandleEmailAddress } from "../util/HandleEmailFunctions";

interface LocationInfo {
    label: string;
    time: string;
    level: number;
}

interface LeaverProps2 {
    user: string;
    ticket: string;
    supervisor: string;
    location: LocationInfo; // Changed from string to LocationInfo
    equipment: { [key: string]: string };
}

export const TemplatesForLeavers = (userForm: LeaverProps2) => {
    const address = HandleEmailAddress(userForm.supervisor);
    const subject = encodeURIComponent(`${userForm.ticket} - ${userForm.user} - Leaver Package`);
    const hello = Greeting(userForm.supervisor); 
    
    const equipmentList = Object.entries(userForm.equipment)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n'); 

    const emailBody = `${hello}\nRe: ${userForm.ticket} - ${userForm.user} – Leaver Package\n\nThe following equipment was found to be assigned to the leaving employee.\n\n${equipmentList}\n\nCan you please advise if you have collected the above mentioned leaver package?\n\nAre you able to drop off the leaver package at ${userForm.location.label} Dock Inn on level ${userForm.location.level} between ${userForm.location.time}?\n\nPlease quote: ${userForm.ticket}\n\nPlease make sure Laptop charger and Mobile charger are in the package and work from home loan equipment Docking station, Monitor, Power cords, Display cable, Keyboard and Mouse if any.\n\nIf the items are not returned or there is physical damage to the devices there will be a charge to your cost centre.`;

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