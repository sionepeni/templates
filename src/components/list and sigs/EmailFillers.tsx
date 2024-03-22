export const LineBreak = '%0D%0A'

export const Signature = `Ngā mihi, ${LineBreak}
${LineBreak}
Vinni Sionepeni | Field Support Analyst ${LineBreak}
ICT Department ${LineBreak}
Phone | 027 236 0952 ${LineBreak}
Te Kaunihera o Tāmaki Makaurau / Auckland Council ${LineBreak}
Level 9, Te Wharau o Tāmaki Auckland House, 135 Albert Street, Auckland ${LineBreak}
aucklandcouncil.govt.nz ${LineBreak}`

export const Greeting = (name: string) => {
    const newName = name.split(" ")
    return `Kia Ora ${newName[0]},${LineBreak}`
}