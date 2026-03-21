import scrollToSection from "./utils/scrollToSection";

const Home = () => {
    return (
        <div id="home" className="flex gap-30 justify-center items-center h-screen">
            <div>
                <div className="w-120 flex flex-col gap-7">
                    <div className="text-5xl font-medium">Balakrishna Satrapu</div>
                    <div className="text-xl text-gray-700">Full Stack Developer</div>
                    <div className="text-md text-gray-700">
                        I craft beautiful digital experiences with clean code and thoughtful design. Passionate about creating solutions that make a difference.
                    </div>
                </div>
                <div className="flex gap-10 pt-10">
                    <button onClick={() => scrollToSection("projects")} className="bg-black text-white w-32 h-13 hover: cursor-pointer">View projects</button>
                    <button onClick={() => scrollToSection("contact")} className="text-gray-900 border border-gray-400 w-32 h-13 hover: cursor-pointer">Get in Touch</button>
                    <button className="text-gray-900 border border-gray-400 w-42 h-13 hover: cursor-pointer">Download Resume</button>
                </div>
            </div>
            <div className="w-74 h-74 rounded-[50%] bg-gray-200"></div>
        </div>
    )
}

export default Home;