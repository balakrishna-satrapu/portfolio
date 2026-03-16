
const Header = () => {
    return (
        <div className="flex px-10 bg-white py-6 justify-between shadow-sm h-[11vh] fixed top-0 left-0 w-full">
            <div className="font-bold text-xl">PORTFOLIO</div>
            <div className="flex gap-10">
                <div>Home</div>
                <div>About</div>
                <div>Projects</div>
                <div>Skills</div>
                <div>Contact</div>
            </div>
        </div>
    );
}

export default Header;