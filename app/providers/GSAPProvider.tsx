"use client";

import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Use useLayoutEffect on client, useEffect on server (for SSR safety)
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface GSAPProviderProps {
    children: React.ReactNode;
}

export default function GSAPProvider({ children }: GSAPProviderProps) {
    useIsomorphicLayoutEffect(() => {
        // Register all GSAP plugins here
        gsap.registerPlugin(ScrollTrigger);

        // Optional: Configure GSAP defaults
        // gsap.defaults({ ease: "power2.out", duration: 0.5 });

        return () => {
            // Cleanup ScrollTrigger on unmount
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return <>{children}</>;
}
