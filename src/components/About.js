import EducationCard from "./EducationCard";

const About = () => {
    return (
        <div id="about" className="flex justify-between px-12 pb-4 bg-gray-50 pt-6 scroll-mt-16">
            <div className="w-lg">
                <div className="font-medium text-4xl pb-6">About Me</div>
                <div className="flex flex-col leading-7.5 gap-5">
                    <div>
                        I am a Computer Science and Engineering graduate from RVR & JC College of Engineering (2025) with a strong interest in full-stack web development and problem solving. I work with technologies such as C++, JavaScript, and Java, and build web applications using React, Node.js, Express.js, Tailwind CSS, and Redux.
                    </div>
                    <div>
                        I enjoy developing scalable and user-friendly applications and continuously improving my development skills through hands-on projects like a Food Delivery App and a Tinder Clone.
                    </div>
                    <div>
                        Alongside development, I actively practice Data Structures & Algorithms and Competitive Programming to strengthen my problem-solving abilities and write efficient code. I am always eager to learn new technologies, build impactful products, and grow as a software developer.
                    </div>
                </div>
            </div>
            <div className="w-lg">
                <div className="font-medium text-3xl pb-6">
                    Education
                </div>
                <div className="flex flex-col gap-2">
                    <EducationCard degree="B.Tech" year="2021 - 2025" institution="R.V.R & J.C College of Engineering" course="Computer Science and Engineering" score="7.95 cgpa"/>
                    <EducationCard degree="Intermediate" year="2019 - 2021" institution="NRI Junior College" course="MPC" score="87.5%"/>
                    <EducationCard degree="Secondary Education" year="2019" institution="Ushodaya English Medium School" course="CBSE" score="88.5%"/>
                </div>
            </div>
        </div>
    )
}

export default About;