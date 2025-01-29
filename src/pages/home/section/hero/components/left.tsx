import ServiceData from './service';

const LeftSide = () => {
  return (
    <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7 mt-28 md:mt-0">
      <div className="relative flex items-center opacity-0 animate-fade-in duration-[1000ms]">
        <div className="bg-white text-[#71D2E2] font-bold text-lg px-4 py-2 rounded-lg shadow-lg">풀타임, 파트타임</div>
        <div className="absolute bottom-[-6px] left-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
      </div>

      <h2 className="flex flex-col text-4xl !leading-tight font-bold text-neutral-900 md:text-4xl xl:text-4xl dark:text-neutral-100 opacity-0 animate-fade-in-up duration-[500ms]">
        최고의 실력을 가진 외국인 인재를 찾고 계신가요?
      </h2>

      <span className="text-lg text-white flex flex-col opacity-0 animate-fade-in-up duration-[500ms]">
        <span>법률 및 인사관리 부담없이</span>
        <span>1주일 이내에 원격으로 채용해보세요.</span>
      </span>

      <span className="text-lg text-white underline hidden md:block">개발자가 필요하신가요?</span>

      <ServiceData />
    </div>
  );
};

export default LeftSide;
