import ProjectCard from "./ProjectCard";

const Project = () => {
    return (
        <div className="">
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