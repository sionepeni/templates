export interface DetailProps {
    oldDevice?: string,
    newDevice?: string,
    user?: string,
    ticket?: string,
    supervisor?: string,
    laptop?: string,
    mobile?: string,
    switch?: string,
    issue?: string,
    date?: string,
    lostDevice?: string,
    amount?: string,
    oolcDevice?: string,
    location?: string,
}

export type DetailForm = {
    oldDevice: string,
    newDevice: string,
    user: string,
    ticket: string,
    supervisor: string,
    laptop: string,
    mobile: string,
    switch: string,
    issue: string,
    date: string,
    lostDevice: string,
    amount: string
}

export type EmailProps = {
    user: string,
    ticket: string,
    switch: string,
    issue: string,
    oolcDevice: string,
    location: string,
}

export type LeaverProps = {
    user: string,
    ticket: string,
    supervisor: string,
    laptop: string,
    mobile: string,
}

export type TicketProps = {
    oldDevice: string,
    newDevice: string,
}

export type TextTemplate = {
    text: string
}

export type LeaverInputs = [{
    laptop: string,
    phone: string
}]