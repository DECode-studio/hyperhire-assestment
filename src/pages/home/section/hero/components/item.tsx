import Image from "next/image";
import { TalentModel } from "../data/list-talent";

type ComponentsProps = {
    data: TalentModel
};

const SlideItem = ({ data }: ComponentsProps) => {
    return (
        <div className="relative h-96 w-72 overflow-hidden rounded-3xl shadow-lg bg-white p-5 flex flex-col">

            <div className="flex justify-center items-center">
                <div className="w-32 h-32 overflow-hidden relative">
                    <Image
                        src="/images/vector/vect_user.png"
                        alt="user"
                        width={128}
                        height={128}
                        className="object-cover rounded-full "
                    />

                    <Image
                        src="/images/vector/vect_flag.png"
                        alt="flag"
                        width={25}
                        height={18}
                        className="absolute right-0 bottom-0 transform -translate-y-1/2"
                    />
                </div>
            </div>

            <span className="font-extrabold text-xl text-black mt-3 text-center">
                {data.name}
            </span>

            <div className="w-full mt-1 justify-center items-center text-center flex flex-row">

                <span className="text-lg text-[#4A77FF] font-normal text-center">
                    {data.profession}
                </span>

                <span className="text-lg text-[#4A77FF] font-extrabold text-center ml-1">
                    {`· ${data.experience}`}
                </span>

            </div>

            <div className="flex flex-row flex-wrap mt-5 justify-center items-center">
                {
                    data.skills.map((e) => (
                        <div key={e} className="py-1 px-5 m-1 bg-white border border-gray-500 rounded-lg">
                            <span className="text text-gray-500 text-xs font-bold">
                                {e}
                            </span>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default SlideItem;
