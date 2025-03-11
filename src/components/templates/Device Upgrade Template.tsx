import { DetailProps } from "../../types/Types";
import { HandleEmailAddress } from "../email fillers/Email Address Handler";
import { Greeting } from "../email fillers/Email Greeting";

export const DeviceUpgrade = (userForm: DetailProps) => {
    const address = HandleEmailAddress(userForm.user);
    const subject = encodeURIComponent(`${userForm.ticket} - New, replacement or upgraded ${userForm.switch}`);
    const hello = Greeting(userForm.user);

    const emailBody = `${hello}\nI am assigned the Support Ticket with the description:\n\nTicket ID: ${userForm.ticket}\nDescription: New, replacement or upgraded ${userForm.switch}\n\nCould we arrange a convenient time for you to visit the ${userForm.location} so we can proceed with setting up your requested ${userForm.switch}? This process will require the utilization of your credentials and is expected to take approximately 30 to 40 minutes.\n\nI will attempt to contact you again over the next two to three working days. I look forward to speaking with you soon.\n\nThank you.`;

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