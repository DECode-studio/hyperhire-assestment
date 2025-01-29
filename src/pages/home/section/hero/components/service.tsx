const ServiceData = () => {
    return (
        <div className="hidden md:block">
            <div className="flex flex-row flex-wrap mt-14">

                <div className="flex flex-col text-start justify-start w-36">

                    <div className="border-b border-white mb-2"></div>

                    <span className="text-lg font-semibold text-white">
                        평균 월 120만원
                    </span>

                    <span className="text-lg font-normal text-white flex flex-col">
                        임금을 해당 국가를 기준 으로 계산합니다.
                    </span>

                </div>

                <div className="flex flex-col text-start justify-start ml-10 w-36">

                    <div className="border-b border-white mb-2"></div>

                    <span className="text-lg font-semibold text-white">
                        최대 3회 인력교체
                    </span>

                    <span className="text-lg font-normal text-white flex flex-col">
                        막상 채용해보니 맞지 않 아도 걱정하지 마세요.
                    </span>

                </div>

                <div className="flex flex-col text-start justify-start ml-10 w-36   ">

                    <div className="border-b border-white mb-2"></div>

                    <span className="text-lg font-semibold text-white">
                        평균 3일, 최대 10일
                    </span>

                    <span className="text-lg font-normal text-white flex flex-col">
                        급하게 사람이 필요한 경 우에도 빠른 채용이 가능 합니다.
                    </span>

                </div>

            </div>
        </div>
    )
}

export default ServiceData