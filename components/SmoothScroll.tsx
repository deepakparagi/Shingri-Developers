"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{
            // @ts-ignore
            smoothTouch: false,
            syncTouch: true,
            lerp: 0.1,
            wheelMultiplier: 1.2,
            touchMultiplier: 1.2,
            infinite: false,
            // @ts-ignore
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
        }}>
            {children}
        </ReactLenis>
    );
}
