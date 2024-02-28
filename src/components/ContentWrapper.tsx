import { TextTemplate } from "../types/Types"


export const ContentWrapper = ({ text }: TextTemplate) => {
    return (
        <>
            <button className="button" onClick={() => navigator.clipboard.writeText(text)}>Copy</button>
        </>
    )
}