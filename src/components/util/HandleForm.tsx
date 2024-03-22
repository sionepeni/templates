import { JSX } from "preact/jsx-runtime"
import { DetailProps, EmailProps, LeaverProps, NewStarterProps, TicketProps } from "../../types/Types"
import { StateUpdater } from "preact/hooks"
import { HandleEmailAddress } from "./HandleEmailFunctions"

export const handleFormDetails = (
    event: JSX.TargetedEvent<HTMLInputElement, Event>, userForm: Partial<DetailProps>, setUserForm: StateUpdater<Partial<DetailProps>>
) => {
    if (event.currentTarget.id === "user")
        return setUserForm({ ...userForm, user: event.currentTarget.value }), HandleEmailAddress(event.currentTarget.value)
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
    if (event.currentTarget.id === "date")
        return setUserForm({ ...userForm, date: event.currentTarget.value })
    if (event.currentTarget.id === "lostDevice")
        return setUserForm({ ...userForm, lostDevice: event.currentTarget.value })
    if (event.currentTarget.id === "amount")
        return setUserForm({ ...userForm, amount: event.currentTarget.value })
    if (event.currentTarget.checked === true) return setUserForm({ ...userForm, switch: 'Phone' })
    if (event.currentTarget.checked === false) return setUserForm({ ...userForm, switch: 'Laptop' })
}

export const handleFormDetailsForTickets = (event: JSX.TargetedEvent<HTMLInputElement, Event>, userForm: TicketProps, setUserForm: StateUpdater<TicketProps>) => {
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
}

export const handleFormDetailsForNewStarters = (event: JSX.TargetedEvent<HTMLInputElement, Event>, userForm: NewStarterProps, setUserForm: StateUpdater<NewStarterProps>) => {
    if (event.currentTarget.id === "user")
        return setUserForm({ ...userForm, user: event.currentTarget.value }), HandleEmailAddress(event.currentTarget.value)
    if (event.currentTarget.id === "ticket")
        return setUserForm({ ...userForm, ticket: event.currentTarget.value })
    if (event.currentTarget.id === "supervisor")
        return setUserForm({
            ...userForm,
            supervisor: event.currentTarget.value,
        })
    if (event.currentTarget.id === "date")
        return setUserForm({ ...userForm, date: event.currentTarget.value })
}

export const handleFormDetailsForEmails = (event: JSX.TargetedEvent<HTMLInputElement, Event>, userForm: EmailProps, setUserForm: StateUpdater<EmailProps>) => {
    if (event.currentTarget.id === "user")
        return setUserForm({ ...userForm, user: event.currentTarget.value }), HandleEmailAddress(event.currentTarget.value)
    if (event.currentTarget.id === "ticket")
        return setUserForm({ ...userForm, ticket: event.currentTarget.value })
    if (event.currentTarget.id === "issue")
        return setUserForm({ ...userForm, issue: event.currentTarget.value })
    if (event.currentTarget.checked === true) return setUserForm({ ...userForm, switch: 'Phone' })
    if (event.currentTarget.checked === false) return setUserForm({ ...userForm, switch: 'Laptop' })
    if (event.currentTarget.id === "oldDevice")
        return setUserForm({
            ...userForm,
            oldDevice: event.currentTarget.value,
        })
}

export const handleFormDetailsForLeavers = (event: JSX.TargetedEvent<HTMLInputElement, Event>, userForm: LeaverProps, setUserForm: StateUpdater<LeaverProps>) => {
    if (event.currentTarget.id === "user")
        return setUserForm({ ...userForm, user: event.currentTarget.value }), HandleEmailAddress(event.currentTarget.value)
    if (event.currentTarget.id === "ticket")
        return setUserForm({ ...userForm, ticket: event.currentTarget.value })
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