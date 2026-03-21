import scrollToSection from "./utils/scrollToSection";

const Footer = () => {
    return (
        <div className="bg-[#101828] text-white flex justify-between items-center px-10 py-12">
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} Balakrishna Satrapu. All rights reserved</div>
            <div className="text-sm flex gap-10">
                <button onClick={() => scrollToSection("home")} className="hover: cursor-pointer">Home</button>
                <button onClick={() => scrollToSection("about")} className="hover: cursor-pointer">About</button>
                <button onClick={() => scrollToSection("projects")} className="hover: cursor-pointer">Projects</button>
                <button onClick={() => scrollToSection("skills")} className="hover: cursor-pointer">Skills</button>
            </div>
        </div>
    )
}

export default Footer;