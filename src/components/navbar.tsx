import Link from "next/link";
import ToggleTheme from "./toggle-theme";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
    return (
        <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link href="/">
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M16 7l2 9m-10 -9l-2 9m-1 -9h14m2 5h-18" />
                    </svg>
                </Link>

                <nav className="md:block hidden">
                    <ul className="flex items-center gap-x-8">
                        {data.map((link, id) => (
                            <li key={id}>
                                <Link
                                    href={link.href}
                                    className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-x-4">
                    <ToggleTheme />
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}

const data = [
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Projects",
        href: "/projects",
    },
    {
        title: "Blog",
        href: "/blog",
    },
    {
        title: "Photos",
        href: "/photos",
    },
];
