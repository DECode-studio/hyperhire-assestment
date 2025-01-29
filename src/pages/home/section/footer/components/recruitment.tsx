import { AlphabetKoreanIcon, ArrowRight02Icon, Settings02Icon, SourceCodeIcon, UserIcon } from "hugeicons-react"
import React from "react"

const RecruitmentGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 ml-0 xl:ml-5 mt-5 xl:mt-0">
            <ItemCard
                icon={<SourceCodeIcon className="h-6 w-6 text-[#2C599B] text-center font-extrabold" />}
                title="해외 개발자 원격 채용"
                desc="바로가기"
            />

            <ItemCard
                icon={<UserIcon className="h-6 w-6 text-[#2C599B] text-center font-extrabold" />}
                title="외국인 원격 채용 (비개발)"
                desc="바로가기"
            />

            <ItemCard
                icon={<AlphabetKoreanIcon className="h-6 w-6 text-[#2C599B] text-center font-extrabold" />}
                title="한국어 가능 외국인 채용"
                desc="바로가기"
            />

            <ItemCard
                icon={<Settings02Icon className="h-6 w-6 text-[#2C599B] text-center font-extrabold" />}
                title="해외 개발자 활용 서비스"
                desc="바로가기"
            />
        </div>

    )
}

type ComponentsProps = {
    icon: React.ReactNode,
    title: string
    desc: string
}

const ItemCard = ({ icon, title, desc }: ComponentsProps) => {
    return (
        <div className="bg-white p-5 flex flex-col rounded-lg">

            <div className="p-2 bg-[#EFF1F6] rounded-lg h-10 w-10 items-center justify-center">
                {icon}
            </div>

            <span className="text-black font-semibold text-md mt-3">
                {title}
            </span>

            <div className="mt-2 text-[#5E626F] flex flex-row items-center">

                <span className="font-semibold text-md">
                    {desc}
                </span>

                <div className="p-1 bg-white rounded-lg h-6 w-6 items-center justify-center ml-3 border border-[#5E626F]">
                    <ArrowRight02Icon className="h-4 w-4 text-[#5E626F] text-center font-extrabold" />
                </div>

            </div>

        </div>
    )
}

export default RecruitmentGrid