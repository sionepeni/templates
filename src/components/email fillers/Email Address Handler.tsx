export const HandleEmailAddress = (name: string | undefined): string | undefined => {
    if (!name) return undefined;

    const domain = '@aucklandcouncil.govt.nz';
    const formattedName = name.replace(/\s+/g, '.');

    return `${formattedName}${domain}`;
};