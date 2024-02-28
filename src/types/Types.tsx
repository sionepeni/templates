export type BasicForm = {
    name: string,
    user: string,
    ticket: string,
    oldDevice: string,
    newDevice: string
    supervisor: string,
    laptop: string,
    mobile: string,
    switch: string,
}

export type TicketForm = {
    oldDevice: string,
    newDevice: string
}

export type EmailForm = {
    user: string,
    ticket: string,
    oldDevice: string,
    supervisor: string,
    laptop: string,
    mobile: string,
    switch: string,
}

export type TextTemplate = {
    text: string
}