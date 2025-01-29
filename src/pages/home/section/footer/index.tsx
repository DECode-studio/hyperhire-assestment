import { CompanyData, CompanyDetail } from "./components/company"
import ProfileDetail from "./components/profile"
import RecruitmentGrid from "./components/recruitment"

const Footer = () => {
    return (
        <div className=" w-screen px-10 lg:px-48 py-32 bg-[#FBFBFB]">

            <div className="flex flex-col">

                <div className="flex flex-col xl:flex-row">

                    <ProfileDetail />

                    <RecruitmentGrid />

                </div>

                <div className="flex flex-col xl:flex-row mt-10">

                    <CompanyDetail />

                    <CompanyData />

                </div>

                <span className="font-bold text-black text-md mt-10">
                    ⓒ 2023 Hyperhire
                </span>

            </div>

        </div>
    )
}

export default Footer