export const Greeting = (name: string | undefined): string => {
    if (!name) return ''; 

    const firstName = name.split(' ')[0]; 
    return `Kia Ora ${firstName},\n`;
};