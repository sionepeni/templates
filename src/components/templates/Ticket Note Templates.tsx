import { TicketProps } from "../../types/Types"
import { ContentWrapper } from "../ContentWrapper"

const commonDeviceReplacementSteps = [
  "Successfully replicated Active Directory (AD) group memberships",
  "Migrated data from the old to the new device",
  "Configured essential applications including Outlook, Teams, OneDrive, Printer setup, and user profile settings",
  "Implemented the display of bookmark bar in Chrome for user convenience",
  "Started Teams",
  "Conducted a thorough check with the user to ensure functionality and address any potential concerns",
  "Updated the Serial Number Asset Management (SNAM) database accordingly",
  "All necessary configurations completed, the task is now considered closed"
];

const accountLockoutText = `- Issue: Account Lockout
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
- Closing: Incident resolved and closed`;

const generateDeviceReplacementText = (
  deviceType: string,
  userForm: TicketProps,
  customSteps: string[] = []
) => {
  const header = `- ${deviceType} Replacement Summary:
===========================================================================
OLD: ${userForm.oldDevice} | NEW: ${userForm.newDevice}
===========================================================================`;
  
  const steps = [
    `Provisioned a replacement ${deviceType.toLowerCase()} for the user`,
    ...customSteps,
    `Collected old ${deviceType.toLowerCase()}: ${userForm.oldDevice}`,
    ...commonDeviceReplacementSteps
  ].filter(Boolean);

  return `${header}\n${steps.map(step => `- ${step}`).join('\n')}`;
};

export const LaptopReplacementSummary = (userForm: TicketProps) => (
  <ContentWrapper text={generateDeviceReplacementText("Laptop", userForm)} />
);

export const TabletReplacementSummary = (userForm: TicketProps) => (
  <ContentWrapper text={generateDeviceReplacementText("Tablet", userForm)} />
);

export const PhoneReplacementSummary = (userForm: TicketProps) => (
  <ContentWrapper text={generateDeviceReplacementText("Phone", userForm, [
    "Migrated data from the old to the new device via Smart Switch",
    "Configured essential applications including Outlook, Teams, OneDrive, QS settings",
    "Collected old phone & removed from UEM"
  ])} />
);

export const AccountLockout = () => (
  <ContentWrapper text={accountLockoutText} />
);