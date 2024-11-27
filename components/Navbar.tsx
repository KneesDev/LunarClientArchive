import Link from "next/link";
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

export default function Navbar() {
    return (
        <section
            id="navbar"
            className="w-full flex justify-between items-center bg-[#090400] px-8 py-6 h-[100px] z-10"
        >
            <Link href="/" className="flex items-center space-x-6">
                <img
                    src="https://store.lunarclient.com/static/img/logo.webp"
                    alt=''
                    draggable={false}
                    width={55}
                    height={50}
                />
                <div>
                    <h1 className="text-xl font-bold uppercase tracking-widest text-white">Lunar Client Archive</h1>
                    <p className="text-sm italic text-white opacity-75">Archived installers of Lunar Client</p>
                </div>
            </Link>
            <div className="flex items-center space-x-6">
                <Link
                    href="https://github.com/KneesDev/LunarClientArchive"
                    className="text-white focus:outline-none"
                    target="_blank"
                    title="View source code"
                >
                    <Icon path={mdiGithub} className="w-8 h-8" />
                </Link>
            </div>
        </section>
    );
}