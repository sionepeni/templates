export const Greeting = (name: string | undefined) => {
    if (name === undefined) return ''; // Return an empty string if name is undefined

    const newName = name.split(" ")[0]; // Get the first name
    return `Kia Ora ${newName},\n`; // Use \n for line breaks
};