"use client"

import { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import SlideItem from "./item";
import { listTalent } from "../data/list-talent";
import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";

const CarouselData = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = listTalent().map((data, index) => ({
        key: index,
        content: (
            <SlideItem key={index} data={data} />
        ),
        onClick: () => setCurrentIndex(index),
    }));

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % listTalent().length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + listTalent().length) % listTalent().length);
    };

    return (
        <div className="w-full h-96 relative px-20 mt-10 md:mt-0">
            <Carousel
                slides={slides}
                goToSlide={currentIndex}
                offsetRadius={2} // Jarak antar kartu
                animationConfig={{ tension: 120, friction: 14 }} // Konfigurasi animasi
                showNavigation={false}
            />
            {/* Tombol navigasi kiri */}
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-0 rounded-full"
            >
                <ArrowLeft01Icon />
            </button>

            {/* Tombol navigasi kanan */}
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-0 rounded-full"
            >
                <ArrowRight01Icon />
            </button>
        </div>
    );
}

export default CarouselData;
