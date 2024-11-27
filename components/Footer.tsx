import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#080808] text-white z-0 text-base flex justify-center items-center px-8 py-4">
            <div className="w-full max-w-[1700px] flex justify-between items-center">
                <Link href="https://kneesdev.github.io" target="_blank">&copy; {new Date().getFullYear()} KneesDev</Link>
                <p className="cursor-default">Not affiliated with Moonsworth or Lunar Client</p>
            </div>
        </footer>
    );
}