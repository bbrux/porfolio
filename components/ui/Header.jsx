import Link from "next/link";
import { Button } from "./button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav"; // Importa MobileNav en PascalCase

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Brianmep<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* Desktop nav and & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>
                {/* Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav /> {/* Cambiado a PascalCase */}
                </div>
            </div>
        </header>
    );
};

export default Header;