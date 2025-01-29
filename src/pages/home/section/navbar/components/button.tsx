type ComponentsPorps = {
  className?: string;
};

const ContactButton = ({ className = '' }: ComponentsPorps) => {
  return <button className={`bg-white text-[#4A77FF] rounded-lg py-2 px-5 ${className}`}>문의하기</button>;
};

export default ContactButton;
