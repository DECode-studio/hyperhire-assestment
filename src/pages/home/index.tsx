import Footer from "./section/footer"
import Hero from "./section/hero"
import Navbar from "./section/navbar"

const HomePage = () => {
    return (
        <div className="min-h-screen min-w-full container bg-white">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}

export default HomePage