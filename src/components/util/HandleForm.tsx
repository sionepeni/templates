import { JSX } from "preact/jsx-runtime"
import { DetailForm } from "../../types/Types"
import { StateUpdater } from "preact/hooks"

export const handleFormDetails = (
    event: JSX.TargetedEvent<HTMLInputElement, Event>, userForm: DetailForm, setUserForm: StateUpdater<DetailForm>
) => {
    if (event.currentTarget.id === "user")
        return setUserForm({ ...userForm, user: event.currentTarget.value })
    if (event.currentTarget.id === "ticket")
        return setUserForm({ ...userForm, ticket: event.currentTarget.value })
    if (event.currentTarget.id === "oldDevice")
        return setUserForm({
            ...userForm,
            oldDevice: event.currentTarget.value,
        })
    if (event.currentTarget.id === "newDevice")
        return setUserForm({
            ...userForm,
            newDevice: event.currentTarget.value,
        })
    if (event.currentTarget.id === "user")
        return setUserForm({ ...userForm, user: event.currentTarget.value })
    if (event.currentTarget.id === "supervisor")
        return setUserForm({
            ...userForm,
            supervisor: event.currentTarget.value,
        })
    if (event.currentTarget.id === "laptop")
        return setUserForm({ ...userForm, laptop: event.currentTarget.value })
    if (event.currentTarget.id === "mobile")
        return setUserForm({ ...userForm, mobile: event.currentTarget.value })
    if (event.currentTarget.id === "issue")
        return setUserForm({ ...userForm, issue: event.currentTarget.value })
    if (event.currentTarget.checked === true) return setUserForm({ ...userForm, switch: 'Phone' })
    if (event.currentTarget.checked === false) return setUserForm({ ...userForm, switch: 'Laptop' })
}

