import { useEffect, useState } from "preact/hooks"
import { JSX } from "preact/jsx-runtime"
import { TicketNotes } from "../../pages/TicketNotes"
import { EmailTemplates } from "../../pages/EmailTemplates"
import { LeaversTemplates } from "../../pages/LeaversTemplate"

const componentMap: { [key: string]: JSX.Element } = {
    '1': <TicketNotes />,
    '2': <EmailTemplates />,
    '3': <LeaversTemplates />,
};

export const Content = ({ selectedValue }: { selectedValue: string }) => {
    const [formToRender, setFormToRender] = useState<JSX.Element>(componentMap['1']);

    useEffect(() => {
        setFormToRender(componentMap[selectedValue] || <TicketNotes />);
    }, [selectedValue]);

    return <>{formToRender}</>;
};