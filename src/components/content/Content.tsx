import { useEffect, useState } from "preact/hooks"
import { JSX } from "preact/jsx-runtime"
import { TicketNotes } from "../../pages/TicketNotes"
import { EmailTemplates } from "../../pages/EmailTemplates"
import { LeaversTemplates } from "../../pages/LeaversTemplate"

export const Content = ({selectedValue}: any) => {

    const [formToRender, setFormToRender] = useState<JSX.Element>(<TicketNotes />)

    useEffect(() => {
    handlePageSelection(selectedValue)
    }, [selectedValue])

    const handlePageSelection = (e: string) =>{
        if (e === '1') return setFormToRender(<TicketNotes />)
            if (e === '2') return setFormToRender(<EmailTemplates />)
            if (e === '3') return setFormToRender(<LeaversTemplates />)
    }

    return(
        <>
        {formToRender}
        </>
    )
}