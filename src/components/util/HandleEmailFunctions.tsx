export const HandleEmailAddress = (name: string) => {
    const aklc = '@aucklandcouncil.govt.nz'
    const formattedName = name.replace(/\s+/g, '.')

    return (formattedName + aklc)
}

export const HandleEmailBody = () => {

}