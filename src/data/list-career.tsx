import { AiImageIcon, CallingIcon, Gps01Icon, PackageIcon, PresentationBarChart02Icon } from "hugeicons-react"

export type CareerModel = {
    id: string
    name: string
    icon: React.ReactNode
}

export const listCareer : CareerModel[] = [
    {
        id: '0',
        name: '해외 마케팅',
        icon: <PresentationBarChart02Icon />
    },
    {
        id: '1',
        name: '퍼블리셔',
        icon: <AiImageIcon />
    },
    {
        id: '2',
        name: '캐드원(제도사)',
        icon: <PackageIcon />
    }, 
    {
        id: '3',
        name: '해외 세일즈',
        icon: <Gps01Icon />
    }, 
    {
        id: '4',
        name: '해외 CS',
        icon: <CallingIcon />
    }, 
]