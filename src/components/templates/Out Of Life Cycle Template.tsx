import { DetailProps } from "../../types/Types";
import { HandleEmailAddress } from "../email fillers/Email Address Handler";
import { Greeting } from "../email fillers/Email Greeting";

export const OutOfLifeCycle = (userForm: DetailProps) => {
    const address = HandleEmailAddress(userForm.user);
    const subject = encodeURIComponent(
        `${userForm.ticket} - Device Upgrade Required for ${userForm.switch} - ${userForm.oolcDevice}`
    );
    const hello = Greeting(userForm.user);

    const emailBody = `${hello}
I am assigned the Support Ticket with the description:

Ticket ID: ${userForm.ticket}
Description: Computer System Upgrade Ticket Creation for ${userForm.switch}

Your device is now out of lifecycle, and we need to arrange a suitable time to swap out your device.

Device: ${userForm.oolcDevice}

To resolve this, could you please advise a time when you can come into the ${userForm.location} to have your device upgraded?
Please respond by return email, update the support ticket, or message me on MS Teams to discuss this further.

I will attempt to contact you again over the next two to three working days. I look forward to speaking with you soon.

Thank you.`;

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