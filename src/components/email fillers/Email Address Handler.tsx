export const HandleEmailAddress = (name: string | undefined) => {
    if (name === undefined) return
    const aklc = '@aucklandcouncil.govt.nz'
    const formattedName = name.replace(/\s+/g, '.')

    return (formattedName + aklc)
}