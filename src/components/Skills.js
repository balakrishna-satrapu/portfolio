import SkillsCard from "./SkillsCard";

const Skills = () => {
    return (
        <div id="skills" className="bg-gray-50 py-18 mt-5 scroll-mt-16">
            <div className="text-4xl text-center font-medium pb-18">Skills & Expertise</div>
            <div className="flex justify-center gap-14">
                <SkillsCard
                    title="Languages"
                    skills={["C", "C++", "Java", "JavaScript"]}
                    />

                    <SkillsCard
                    title="Frontend"
                    skills={[
                        "HTML5",
                        "CSS3",
                        "React.js",
                        "Redux Toolkit",
                        "Tailwind CSS"
                    ]}
                    />

                    <SkillsCard
                    title="Backend"
                    skills={[
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "REST APIs"
                    ]}
                    />

                    <SkillsCard
                    title="Core"
                    skills={[
                        "DSA",
                        "OOPs",
                        "OS",
                        "DBMS",
                        "CN"
                    ]}
                    />
            </div>
        </div>
    )
}

export default Skills;