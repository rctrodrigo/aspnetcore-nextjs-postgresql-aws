const siteName: string = "RAVENRODRIGO.";

function Logo() {
    return (
        <div className="rounded-md col-start-1 row-start-1 col-span-1 row-span-1 items-center">
            <a href="#" className="flex justify-center text-center text-3xl font-bold pl-1.5 track-[-1.5px] mt-2
                                   hover:text-[#f2f2f2] dark:hover:text-[#1a1a1a]">
                {siteName}
            </a>
        </div>
    );
}

export default Logo
