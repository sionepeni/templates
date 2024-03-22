import { TicketProps } from "../../types/Types"
import { ContentWrapper } from "../ContentWrapper"

export const LaptopReplacementSummary = (userForm: TicketProps) => {
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

export const TabletReplacementSummary = (userForm: TicketProps) => {
    let text = `- Tablet Replacement Summary:
===========================================================================
OLD: ${userForm.oldDevice} | NEW: ${userForm.newDevice}
===========================================================================
- Provisioned a replacement tablet for the user
- Successfully replicated Active Directory (AD) group memberships
- Migrated data from the old to the new device
- Configured essential applications including Outlook, Teams, OneDrive, Printer setup, and user profile settings
- Implemented the display of bookmark bar in Chrome for user convenience
- Started Teams
- Conducted a thorough check with the user to ensure functionality and address any potential concerns
- Collected old tablet: ${userForm.oldDevice}
- Updated the Serial Number Asset Management (SNAM) database accordingly
- All necessary configurations completed, the task is now considered closed`
    return (
        <ContentWrapper text={text} />
    )
}

export const PhoneReplacementSummary = (userForm: TicketProps) => {
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

export const AccountLockout = () => {
    let text = `- Issue: Account Lockout
- Reviewed user account status in Active Directory (AD), identified account lockout
- Unlocked the user account in Active Directory (AD) to restore access
- Utilized Splunk logs to investigate the root cause
- Discovered unsuccessful authentication attempts triggered by incorrect credentials
- Examined network logs to determine the source of authentication attempts
- Identified the user's mobile device as the source of authentication attempts
- Engaged with the user to gain access to their mobile device
- Inspected Wi-Fi settings on the mobile device, found outdated or incorrect configurations
- Updated Wi-Fi settings on the user's mobile device to rectify authentication issues
- Resolution: Account unlocked in Active Directory (AD)
- Closing: Incident resolved and closed`
    return (
        <ContentWrapper text={text} />
    )
}