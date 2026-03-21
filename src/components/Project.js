import ProjectCard from "./ProjectCard";

const Project = () => {
    return (
        <div id="projects" className="scroll-mt-16">
            <div className="text-4xl font-medium text-center mt-8">Projects</div>
            <div className="flex justify-center gap-15 flex-wrap px-10 py-8">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default Project;