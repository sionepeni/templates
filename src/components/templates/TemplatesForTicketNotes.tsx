import { TicketForm } from "../../types/Types"
import { ContentWrapper } from "../ContentWrapper"

export const LaptopReplacementSummary = (userForm: TicketForm) => {
    let text = `- Laptop Replacement Summary:
===========================================================================
OLD: ${userForm.oldDevice} | NEW: ${userForm.newDevice}
===========================================================================
- Provisioned a replacement laptop for the user
- Successfully replicated Active Directory (AD) group memberships
- Migrated data from the old to the new device
- Configured essential applications including Outlook, Teams, OneDrive, Printer setup, and user profile settings
- Implemented the display of bookmark bar in Chrome for user convenience
- Started Teams
- Conducted a thorough check with the user to ensure functionality and address any potential concerns
- Collected old laptop: ${userForm.oldDevice}
- Updated the Serial Number Asset Management (SNAM) database accordingly
- All necessary configurations completed, the task is now considered closed`
    return (
        <ContentWrapper text={text} />
    )
}

export const PhoneReplacementSummary = (userForm: TicketForm) => {
    let text = `- Phone Replacement Summary:
===========================================================================
OLD: ${userForm.oldDevice} | NEW: ${userForm.newDevice}
===========================================================================
- Provisioned a replacement phone for the user
- Migrated data from the old to the new device via Smart Switch
- Configured essential applications including Outlook, Teams, OneDrive, QS settings
- Conducted a thorough check with the user to ensure functionality and address any potential concerns
- Collected old phone & removed from UEM: ${userForm.oldDevice}
- Updated the Serial Number Asset Management (SNAM) database accordingly
- All necessary configurations completed, the task is now considered closed`
    return (
        <ContentWrapper text={text} />
    )
}