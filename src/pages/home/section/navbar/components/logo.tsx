import Image from "next/image"

type ComponentsProps = {
    isScrolled: boolean
}

const LogoApp = ({ isScrolled }: ComponentsProps) => {
    return (
        <a href="#" className="text-2xl font-semibold">
            <Image
                alt={"logo"}
                src={'/images/logo/app_logo_white.png'}
                width={115}
                height={20}
                className={isScrolled ? "filter brightness-0" : ""} // Ubah warna logo saat di-scroll
            />
        </a>
    )
}

export default LogoApp