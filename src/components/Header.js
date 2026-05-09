import scrollToSection from "../utils/scrollToSection";

const Header = () => {
    return (
        <div className="flex px-10 bg-white py-6 justify-between shadow-sm h-[11vh] fixed top-0 left-0 w-full">
            <button onClick={() => scrollToSection("home")} className="cursor-pointer font-bold text-xl">PORTFOLIO</button>
            <div className="flex gap-10">
                <button onClick={() => scrollToSection("home")} className="hover: cursor-pointer">Home</button>
                <button onClick={() => scrollToSection("about")} className="hover: cursor-pointer">About</button>
                <button onClick={() => scrollToSection("projects")} className="hover: cursor-pointer">Projects</button>
                <button onClick={() => scrollToSection("skills")} className="hover: cursor-pointer">Skills</button>
                <button onClick={() => scrollToSection("contact")} className="hover: cursor-pointer">Contact</button>
            </div>
        </div>
    );
}

export default Header;