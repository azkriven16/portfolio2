"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Transition, useAnimation, Variants, motion } from "framer-motion";

export default function ToggleTheme() {
    // FIX for hydration error
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Button
            variant="ghost"
            className="text-emerald-400 hover:text-emerald-500 border rounded-full h-10 w-10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <div className="scale-125">
                {theme === "dark" ? <SunIcon /> : <EarthIcon />}
            </div>
        </Button>
    );
}

const circleTransition: Transition = {
    duration: 0.3,
    delay: 0.1,
    opacity: { delay: 0.15 },
};

const circleVariants: Variants = {
    normal: {
        pathLength: 1,
        opacity: 1,
    },
    animate: {
        pathLength: [0, 1],
        opacity: [0, 1],
    },
};

const pathVariants: Variants = {
    normal: { opacity: 1 },
    animate: (i: number) => ({
        opacity: [0, 1],
        transition: { delay: i * 0.1, duration: 0.3 },
    }),
};
const EarthIcon = () => {
    const controls = useAnimation();

    return (
        <div
            className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
            onMouseEnter={() => controls.start("animate")}
            onMouseLeave={() => controls.start("normal")}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <motion.path
                    animate={controls}
                    d="M21.54 15H17a2 2 0 0 0-2 2v4.54"
                    transition={{
                        duration: 0.7,
                        delay: 0.5,
                        opacity: { delay: 0.5 },
                    }}
                    variants={{
                        normal: {
                            pathLength: 1,
                            opacity: 1,
                            pathOffset: 0,
                        },
                        animate: {
                            pathLength: [0, 1],
                            opacity: [0, 1],
                            pathOffset: [1, 0],
                        },
                    }}
                />
                <motion.path
                    animate={controls}
                    d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
                    transition={{
                        duration: 0.7,
                        delay: 0.5,
                        opacity: { delay: 0.5 },
                    }}
                    variants={{
                        normal: {
                            pathLength: 1,
                            opacity: 1,
                            pathOffset: 0,
                        },
                        animate: {
                            pathLength: [0, 1],
                            opacity: [0, 1],
                            pathOffset: [1, 0],
                        },
                    }}
                />
                <motion.path
                    animate={controls}
                    d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
                    transition={{
                        duration: 0.7,
                        delay: 0.5,
                        opacity: { delay: 0.5 },
                    }}
                    variants={{
                        normal: {
                            pathLength: 1,
                            opacity: 1,
                            pathOffset: 0,
                        },
                        animate: {
                            pathLength: [0, 1],
                            opacity: [0, 1],
                            pathOffset: [1, 0],
                        },
                    }}
                />
                <motion.circle
                    cx="12"
                    cy="12"
                    r="10"
                    transition={circleTransition}
                    variants={circleVariants}
                    animate={controls}
                />
            </svg>
        </div>
    );
};

const SunIcon = () => {
    const controls = useAnimation();

    return (
        <div
            className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
            onMouseEnter={() => controls.start("animate")}
            onMouseLeave={() => controls.start("normal")}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="4" />
                {[
                    "M12 2v2",
                    "m19.07 4.93-1.41 1.41",
                    "M20 12h2",
                    "m17.66 17.66 1.41 1.41",
                    "M12 20v2",
                    "m6.34 17.66-1.41 1.41",
                    "M2 12h2",
                    "m4.93 4.93 1.41 1.41",
                ].map((d, index) => (
                    <motion.path
                        key={d}
                        d={d}
                        animate={controls}
                        variants={pathVariants}
                        custom={index + 1}
                    />
                ))}
            </svg>
        </div>
    );
};
