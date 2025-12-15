import { Html } from "@react-three/drei"
import { Suspense, useRef } from "react"
import MacbookModel from "../models/Macbook"
import { useMediaQuery } from "react-responsive"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const ModelScroll = () => {
    const groupRef = useRef(null)
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" })

    useGSAP(() => {
        gsap.to(groupRef.current, {
            rotationY: Math.PI * 2,
            scrollTrigger: {
                trigger: '#features',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        })
    })

    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading...</h1></Html>}>
                <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
            </Suspense>
        </group>
    )
}

export default ModelScroll