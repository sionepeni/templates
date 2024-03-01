// import { useState } from 'preact/hooks'
// import { listForLeaverInputs } from "./List"
// import '../app.css'

// type Devices = {
//     id: number,
//     name: string
// }

// export const LeaverTemplate = (userForm: BasicForm, { handleFormDetails }: any) => {
//     const [deviceCount, setDeviceCount] = useState(0)
//     const [laptopSelected, setLaptopSelected] = useState(false)
//     const [phoneSelected, setPhoneSelected] = useState(false)
//     const [devices, setDevices] = useState<Devices[]>([{ id: 0, name: '' }])

//     const handleDeviceSelection = (e: any) => {
//         if (e.target.value === 'laptop') return handleLaptopSelection(e)
//         if (e.target.value === 'mobile') return handlePhoneSelection(e)
//     }

//     const handleLaptopSelection = (e: any) => {
//         // if (e.target.checked === true) return setLaptopSelected(true), setDeviceCount(deviceCount + 1)
//         // if (e.target.checked === false) return setLaptopSelected(false), setDeviceCount(deviceCount - 1)
//         const newId = devices.length
//         if (e.target.checked === true) return setDevices([...devices, { id: newId, name: `User Computer: ${e.currentTarget.value}` }])
//         if (e.target.checked === false) return setDevices([...devices, { id: newId, name: `` }])
//     }

//     const handlePhoneSelection = (e: any) => {
//         if (e.target.checked === true) return setPhoneSelected(true), setDeviceCount(deviceCount + 1)
//         if (e.target.checked === false) return setPhoneSelected(false), setDeviceCount(deviceCount - 1)
//     }


//     let text =
//         `${userForm.ticket} - ${userForm.user} - Computer and Phone Equipment

// Kia Ora ${userForm.supervisor},
    
// I am writing to follow up regarding a user, ${userForm.user}, who has yet to return the following ICT equipment:
    
// ${devices.map((i) => (<p>${i.name}</p>))}
// 1. User Computer: ${userForm.laptop}
// 2. User Mobile: ${userForm.mobile}
    
// Please note that according to our ICT policy, failure to return the aforementioned items will result in a charge to your cost department.
    
// Should you have any inquiries or concerns regarding this matter, please do not hesitate to inform us.
    
// Thank you for your attention to this issue.`

//     return (
//         <div className='input_container'>
//             {listForLeaverInputs.map((text) => (
//                 <>
//                     <div className='input_field'>
//                         {text.text}: {text.checkbox === true ? <input value={text.id} type='checkbox' onChange={(e) => handleDeviceSelection(e)}></input> : ''}
//                         <input id={text.id} placeholder={text.text} onChange={(e) => handleFormDetails(e)} style={{ width: '350px' }} />
//                     </div>
//                 </>
//             ))}
//             <ContentWrapper text={text} />
//         </div>)
// }