export const CompanyDetail = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col text-black items-start">
        <span className="font-bold text-md">상호명</span>

        <span className="font-normal text-md">하이퍼하이어</span>

        <span className="font-bold text-md">Hyperhire India Private Limited</span>
      </div>

      <div className="flex flex-col text-black items-start ml-5">
        <span className="font-bold text-md">대표 CEO</span>

        <span className="font-normal text-md">김주현</span>

        <span className="font-bold text-md">Juhyun Kim</span>
      </div>
    </div>
  );
};

export const CompanyData = () => {
  return (
    <div className="flex flex-col xl:flex-row ml-0 xl:ml-5 mt-5 xl:mt-0">
      <div className="flex flex-col text-black items-start">
        <span className="font-bold text-md">사업자등록번호 CIN</span>

        <span className="font-normal text-md">427-86-01187</span>

        <span className="font-bold text-md">U74110DL2016PTC290812</span>
      </div>

      <div className="flex flex-col text-black items-start ml-0 xl:ml-5 mt-5 xl:mt-0">
        <span className="font-bold text-md">주소 ADDRESS</span>

        <span className="font-normal text-md">서울특별시 강남대로 479, 지하 1층 238호</span>

        <span className="font-bold text-md">
          D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
        </span>
      </div>
    </div>
  );
};

export default CompanyDetail;
