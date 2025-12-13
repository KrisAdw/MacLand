'use client'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { performanceImages, performanceImgPositions } from "./constants";

const Performance = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Text animation (runs on all screens)
        // Text animation (runs on all screens)
        gsap.fromTo(".content p",
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".content",
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        const mm = gsap.matchMedia();

        // Desktop-only image scrubbing animation
        mm.add("(min-width: 1024px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            performanceImgPositions.forEach((pos) => {
                if (pos.id === "p5") return; // Skip p5

                const animConfig: gsap.TweenVars = {
                    bottom: `${pos.bottom}%`,
                };
                if (pos.left !== undefined) animConfig.left = `${pos.left}%`;
                if (pos.right !== undefined) animConfig.right = `${pos.right}%`;

                tl.to(`.${pos.id}`, animConfig, 0);
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="performance">
            <h2>Next-level graphic performance, Game on.</h2>

            <div className="wrapper">
                {performanceImages.map(({ id, src }) => (
                    <img key={id} className={id} src={src} alt={id} />
                ))}
            </div>

            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
                        gaming feels more immersive and realistic than ever.
                    </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    );
};

export default Performance;