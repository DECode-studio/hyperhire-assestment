import ServiceData from './service';

const LeftSide = () => {
  return (
    <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
      <h2 className="flex flex-col text-4xl !leading-tight font-bold text-neutral-900 md:text-4xl xl:text-4xl dark:text-neutral-100">
        최고의 실력을 가진 외국인 인재를 찾고 계신가요?
      </h2>

      <span className="text-lg text-white flex flex-col">
        <span>법률 및 인사관리 부담없이</span>
        <span>1주일 이내에 원격으로 채용해보세요.</span>
      </span>

      <span className="text-lg text-white underline hidden md:block">개발자가 필요하신가요?</span>

      <ServiceData />
    </div>
  );
};

export default LeftSide;
