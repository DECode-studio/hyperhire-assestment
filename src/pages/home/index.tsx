import Hero from "./section/hero"
import Navbar from "./section/navbar"

const HomePage = () => {
    return (
        <div className="min-h-screen min-w-full container bg-white">
            <Navbar />
            <Hero />
            <section className="h-screen bg-gray-100 flex items-center justify-center">
                <h2 className="text-3xl text-black">Scroll down to see the effect!</h2>
            </section>
        </div>
    )
}

export default HomePage