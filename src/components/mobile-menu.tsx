"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import {
    HiBeaker,
    HiBookmarkAlt,
    HiCamera,
    HiOutlineX,
    HiUser,
} from "react-icons/hi";

export default function MobileMenu() {
    const [navShow, setNavShow] = useState(false);

    const onToggleNav = () => {
        setNavShow((status) => {
            document.body.style.overflow = status ? "auto" : "hidden";
            return !status;
        });
    };

    const menuVariants = {
        closed: { x: "100%" },
        open: { x: 0 },
    };

    const menuItemVariants = {
        closed: { x: 50, opacity: 0 },
        open: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: 0.1 + i * 0.1 },
        }),
    };

    return (
        <>
            <motion.button
                aria-label="Toggle Menu"
                onClick={onToggleNav}
                className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2"
                whileTap={{ scale: 0.95 }}
            >
                <RxHamburgerMenu className="text-xl" />
            </motion.button>
            <AnimatePresence>
                {navShow && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        className="md:hidden fixed left-0 top-0 z-10 h-full w-full dark:bg-zinc-900 bg-white"
                    >
                        <div className="flex items-center justify-between mt-6 px-8">
                            <Link href="/" onClick={onToggleNav}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-picnic-table"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M16 7l2 9m-10 -9l-2 9m-1 -9h14m2 5h-18" />
                                </svg>
                            </Link>

                            <motion.button
                                aria-label="Toggle Menu"
                                onClick={onToggleNav}
                                className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2"
                                animate={{ rotate: navShow ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <HiOutlineX className="text-xl" />
                            </motion.button>
                        </div>
                        <nav className="flex flex-col mt-6">
                            {data.map((link, i) => (
                                <motion.div
                                    key={link.title}
                                    variants={menuItemVariants}
                                    custom={i}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-x-2 font-incognito font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group"
                                        onClick={onToggleNav}
                                    >
                                        <link.icon
                                            className="text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                                            aria-hidden="true"
                                        />
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

const data = [
    {
        title: "About",
        href: "/about",
        icon: HiUser,
    },
    {
        title: "Projects",
        href: "/projects",
        icon: HiBeaker,
    },
    {
        title: "Blog",
        href: "/blog",
        icon: HiBookmarkAlt,
    },
    {
        title: "Photos",
        href: "/photos",
        icon: HiCamera,
    },
];
