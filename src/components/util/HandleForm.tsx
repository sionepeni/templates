import { JSX } from "preact/jsx-runtime"


export const handleFormDetails = (
        event: JSX.TargetedEvent<HTMLInputElement, Event>,userForm: any,setUserForm: any
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
    }

