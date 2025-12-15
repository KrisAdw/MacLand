'use client'
import { Canvas } from "@react-three/fiber"
import StudioLight from "./three/StudioLight"
import { features } from "./constants"
import clsx from "clsx"
import ModelScroll from "./features/ModelScroll"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
    const containerRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.to('.box', {
            scrollTrigger: {
                trigger: '#features',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
            opacity: 1,
            y: 0,
            stagger: 0.5,
        })
    }, { scope: containerRef })

    return (
        <section id="features" ref={containerRef}>
            <h2>See it all in a new light.</h2>

            <Canvas id="f-canvas">
                <StudioLight />
                <ambientLight intensity={0.5} />
                {/* 3D Model */}
                <ModelScroll />
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
                        {feature.text}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features