import { CareerModel, listCareer } from "../data/list-career"

const CareerData = () => {
    return (
        <div
            className="flex overflow-x-auto space-x-4 py-4 mt-10"
            style={{
                scrollSnapType: "x mandatory",
            }}
        >
            {
                listCareer.map((e) => (
                    <CareerItem data={e} />
                ))
            }
        </div>
    )
}

type ComponentsProps = {
    data: CareerModel
}

const CareerItem = ({ data }: ComponentsProps) => {
    return (
        <div className="bg-white bg-opacity-20 rounded-lg p-2 flex flex-row items-center justify-start w-96">

            <div className="p-2 bg-white bg-opacity-40 rounded-lg h-10 w-10">
                {data.icon}
            </div>

            <span className="ml-2 text-white text-xl">
                {data.name}
            </span>

        </div>
    )
}

export default CareerData