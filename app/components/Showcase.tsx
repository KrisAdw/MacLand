'use client'
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

/**
 * Showcase Component
 * 
 * Displays a promotional video and a masked image that animates on scroll.
 * Uses GSAP ScrollTrigger to pin the section and animate the chip revelation.
 */
const Showcase = () => {
    // Disable animations on tablet/mobile for better performance/UX
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    useGSAP(() => {
        if (!isTablet) {
            // Main timeline for the scroll sequence
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',   // Start when top of section hits top of viewport
                    end: 'bottom top',  // End when bottom of section hits top of viewport
                    scrub: true,        // Smooth scrubbing effect linked to scrollbar
                    pin: true,          // Pin the section during animation
                }
            });

            // Animation Sequence:
            // 1. Scale up the mask image to reveal content behind it
            // 2. Fade in and slide up the text content
            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                })
                .to('.content', {
                    opacity: 1,
                    y: 0,
                    ease: 'power1.in'
                });
        }
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    M4, the next generation of Apple silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that’s unbelievably thin, light, and powerful.
                            </p>
                            <p>
                                A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
                            </p>
                            <p className="text-primary">Learn more about Apple Intelligence</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>pro rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase