import scrollToSection from "../utils/scrollToSection";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="home" className="flex gap-30 justify-center items-center h-screen">
            <div>
                <div className="w-120 flex flex-col gap-7">
                    <div className="text-5xl font-medium">Balakrishna Satrapu</div>
                    <div className="text-xl text-gray-700">Full Stack Developer</div>
                    <div className="text-md text-gray-700">
                        Aspiring Software Engineer with strong problem-solving skills and hands-on experience building scalable full-stack applications using React.js, Node.js, Express and MongoDB. Seeking entry-level SDE roles.
                    </div>
                </div>
                <div className="flex gap-10 pt-10">
                    <button onClick={() => scrollToSection("projects")} className="bg-black text-white w-32 h-13 hover: cursor-pointer">View projects</button>
                    <button onClick={() => scrollToSection("contact")} className="text-gray-900 border border-gray-400 w-32 h-13 hover: cursor-pointer">Get in Touch</button>
                    <Link 
                        to="/resume"
                        className="flex items-center justify-center cursor-pointer text-gray-900 border border-gray-400 w-42 h-13">
                            View Resume
                    </Link>
                </div>
            </div>
            <div className="w-74 h-74 rounded-[50%] bg-gray-200"></div>
        </div>
    )
}

export default Home;