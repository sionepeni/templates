import { JSX } from "preact/jsx-runtime";
import { DetailProps, EmailProps, LeaverProps, TicketProps } from "../../types/Types";
import { StateUpdater } from "preact/hooks";
import { HandleEmailAddress } from "./HandleEmailFunctions";

// Generic function to handle form updates
const handleFormUpdate = <T extends object>(
    event: JSX.TargetedEvent<HTMLInputElement, Event>,
    userForm: T,
    setUserForm: StateUpdater<T>,
    specialCases?: { [key: string]: (value: string) => void }
) => {
    const { id, value, checked } = event.currentTarget;

    // Handle special cases (e.g., calling HandleEmailAddress)
    if (specialCases && specialCases[id]) {
        specialCases[id](value);
    }

    // Handle checkbox cases
    if (id === "switch") {
        return setUserForm({ ...userForm, switch: checked ? 'Phone' : 'Laptop' });
    }

    // Default case: update the form field
    setUserForm({ ...userForm, [id]: value });
};

// Specific handlers for each form type
export const handleFormDetails = (
    event: JSX.TargetedEvent<HTMLInputElement, Event>,
    userForm: Partial<DetailProps>,
    setUserForm: StateUpdater<Partial<DetailProps>>
) => {
    handleFormUpdate(event, userForm, setUserForm, {
        user: (value) => HandleEmailAddress(value),
    });
};

export const handleFormDetailsForTickets = (
    event: JSX.TargetedEvent<HTMLInputElement, Event>,
    userForm: TicketProps,
    setUserForm: StateUpdater<TicketProps>
) => {
    handleFormUpdate(event, userForm, setUserForm);
};

export const handleFormDetailsForEmails = (
    event: JSX.TargetedEvent<HTMLInputElement, Event>,
    userForm: EmailProps,
    setUserForm: StateUpdater<EmailProps>
) => {
    handleFormUpdate(event, userForm, setUserForm, {
        user: (value) => HandleEmailAddress(value),
    });
};

export const handleFormDetailsForLeavers = (
    event: JSX.TargetedEvent<HTMLInputElement, Event>,
    userForm: LeaverProps,
    setUserForm: StateUpdater<LeaverProps>
) => {
    handleFormUpdate(event, userForm, setUserForm, {
        user: (value) => HandleEmailAddress(value),
    });
};