import Image from 'next/image';

const ProfileDetail = () => {
  return (
    <div className="flex flex-col">
      <Image src={'/images/logo/app_logo.png'} alt="logo" width={187} height={34} />

      <span className="mt-5 text-black font-semibold text-md">
        우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
      </span>

      <span className="mt-5 text-black font-extrabold text-md">010-0000-0000</span>

      <span className=" text-black font-extrabold text-md">aaaaa@naver.com</span>
    </div>
  );
};

export default ProfileDetail;
