import SkillsCard from "./SkillsCard";

const Skills = () => {
    return (
        <div id="skills" className="bg-gray-50 py-18 mt-5 scroll-mt-16">
            <div className="text-4xl text-center font-medium pb-18">Skills & Expertise</div>
            <div className="flex justify-center gap-14">
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
            </div>
        </div>
    )
}

export default Skills;