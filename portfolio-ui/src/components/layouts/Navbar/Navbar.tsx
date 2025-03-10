import Logo from "./Logo";

const navigationLinks: string[] = ['About', 'Blog', 'Projects', 'Tools', 'Contact'];

const navigationComponentLinks = navigationLinks.map((item: string, index: number) => (
    <li className="flex p-0 m-0 justify-center" key={index}>
        <a href="#" className="ml-3 hover:text-[#f2f2f2] dark:hover:text-[#1a1a1a]
                               font-[family-name:var(--font-geist-sans)]">
            {item}
        </a>
    </li>
));

function Navbar() {
    return (
        <nav className="border-[1px solid rgba(255, 255, 255, 0.3)] radius-[5px]
                        backdrop-filter-[blur(15px)] bg-[rgba(255, 255, 255, 0.3)] min-h-[5vh]
                        grid grid-cols-5 grid-rows-1 gap-1 mt-2">
            <Logo />

            <div className="rounded-md border border-solid border-black/[.08] dark:border-white/[.145]
                            transition-colors col-start-2 row-start-1 col-span-4 row-span-1 flex items-center
                            max-w-[95%] justify-center">
                <ul className="flex flex-row">
                    {navigationComponentLinks}
                </ul>
            </div>

            <div className="rounded-md border border-solid border-black/[.08] dark:border-white/[.145]
                            transition-colors col-start-5 ml-61.5 row-start-1 col-span-2 row-span-1">

            </div>
        </nav>
    );
}

export default Navbar