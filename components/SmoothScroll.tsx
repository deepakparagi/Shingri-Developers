"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{
            // @ts-ignore
            smoothTouch: false, // Use native momentum scroll on touch devices for better performance
            // @ts-ignore
            syncTouch: true,
            lerp: 0.1
        }}>
            {children}
        </ReactLenis>
    );
}
