"use client";


import Image from "next/image";
import bI from "../../../../public/BeforeImage.jpg"
import aI from "../../../../public/LandingPageFirst.jpg"
import React from 'react'
import { useState } from 'react'

const BeforeAndAfter = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isDragging) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };
    return (
        <div className="w-full relative" onClick={handleMouseUp}>
            <div
                className="rounded-2xl relative w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
                onMouseMove={handleMove}
                onMouseDown={handleMouseDown}
            >
                <Image
                    alt=""
                    fill
                    priority
                    src={aI}
                />

                <div
                    className="rounded-2xl absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <Image
                        fill
                        priority
                        alt=""
                        src={bI}
                    />
                </div>
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{
                        left: `calc(${sliderPosition}% - 1px)`,
                    }}
                >
                    <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
                </div>
            </div>
        </div>
    )
}

export default BeforeAndAfter