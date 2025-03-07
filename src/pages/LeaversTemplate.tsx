import { useState } from 'preact/hooks';
import { TemplatesForLeavers } from '../components/templates/Templates For Leavers';

interface LeaverProps {
    user: string;
    ticket: string;
    supervisor: string;
    equipment: { [key: string]: string }; // Dynamic equipment list
}

const listForLeaverInputs = [
    { id: 'user', text: 'User Name' },
    { id: 'ticket', text: 'Ticket Number' },
    { id: 'supervisor', text: 'Supervisor' },
];

const permanentEquipmentOptions = ['Laptop', 'Mobile']; // Permanent options
const additionalEquipmentOptions: string[] = []; // Default additional options

export function LeaversTemplates() {
    const [userForm, setUserForm] = useState<LeaverProps>({
        user: "Users Name",
        ticket: "RITM000111",
        supervisor: "Users TL",
        equipment: {}, // Initialize equipment as an empty object
    });

    const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]); // Track selected equipment
    const [additionalOptions, setAdditionalOptions] = useState<string[]>(additionalEquipmentOptions); // Dynamic additional options
    const [newEquipmentName, setNewEquipmentName] = useState<string>(''); // Input for new equipment name

    const handleFormDetailsForLeavers = (
        event: Event,
        userForm: LeaverProps,
        setUserForm: (form: LeaverProps) => void
    ) => {
        const target = event.target as HTMLInputElement;
        const { id, value } = target;
        setUserForm({ ...userForm, [id]: value });
    };

    const handleEquipmentChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const { value, checked } = target;
        if (checked) {
            setSelectedEquipment([...selectedEquipment, value]);
            setUserForm({
                ...userForm,
                equipment: { ...userForm.equipment, [value]: '' }, // Add equipment with empty value
            });
        } else {
            setSelectedEquipment(selectedEquipment.filter((item) => item !== value));
            const { [value]: _, ...remainingEquipment } = userForm.equipment; // Remove equipment
            setUserForm({ ...userForm, equipment: remainingEquipment });
        }
    };

    const handleEquipmentInputChange = (
        event: Event,
        equipmentName: string
    ) => {
        const target = event.target as HTMLInputElement;
        const { value } = target;
        setUserForm({
            ...userForm,
            equipment: { ...userForm.equipment, [equipmentName]: value },
        });
    };

    const handleAddNewEquipment = () => {
        if (newEquipmentName.trim() && !additionalOptions.includes(newEquipmentName)) {
            setAdditionalOptions([...additionalOptions, newEquipmentName]); // Add new option
            setNewEquipmentName(''); // Clear input
        }
    };

    return (
        <>
            <div className="options_container">
                <div className='equipment_container'>
                        <h4>Select Equipment:</h4>
                    <div className="equipment_selection">
                        {permanentEquipmentOptions.map((option) => (
                            <div key={option}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={option}
                                        onChange={handleEquipmentChange}
                                    />
                                    {option}
                                </label>
                            </div>
                        ))}
                        {additionalOptions.map((option) => (
                            <div key={option}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={option}
                                        onChange={handleEquipmentChange}
                                    />
                                    {option}
                                </label>
                            </div>
                        ))}
                        <div className="add_equipment">
                            <input
                                type="text"
                                placeholder="Add new equipment"
                                value={newEquipmentName}
                                onInput={(event) => {
                                    const target = event.target as HTMLInputElement;
                                    setNewEquipmentName(target.value);
                                }}
                                style={{ width: "200px", marginRight: "10px" }}
                            />
                            <button className='selected_app_button' onClick={handleAddNewEquipment}>Add</button>
                        </div>
                    </div>

                    <div className="equipment_inputs">
                        {selectedEquipment.map((equipment) => (
                            <div className="input_field" key={equipment}>
                                <label htmlFor={equipment}>{equipment}</label>
                                <input
                                    id={equipment}
                                    placeholder={`Enter ${equipment} details`}
                                    onInput={(event) =>
                                        handleEquipmentInputChange(event, equipment)
                                    }
                                    style={{ width: "350px" }}
                                />
                            </div>
                        ))}
                    </div>

                </div>
                <div className="input_container">
                    {listForLeaverInputs.map((text) => (
                        <div className="input_field" key={text.id}>
                            <label htmlFor={text.id}>{text.text}</label>
                            <input
                                id={text.id}
                                placeholder={text.text}
                                onInput={(event) =>
                                    handleFormDetailsForLeavers(event, userForm, setUserForm)
                                }
                                style={{ width: "350px" }}
                            />
                        </div>
                    ))}

                </div>
            </div>

            <div className="content">
                <TemplatesForLeavers {...userForm} />
            </div>
        </>
    );
}