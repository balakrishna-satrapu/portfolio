const ProjectCard = ({code, image, demoName, demoURL, name, description, techStack}) => {
    return (
        <div className="w-84 border border-gray-300 rounded-xl">
            <img 
                src={image}
                alt="Food delivery Image" 
                className="object-cover w-84 h-46 rounded-t-xl"></img>
            <div className="p-4">
                <div className="text-xl font-medium">{name}</div>
                <div className="pt-3">{description}</div>
                <div className="pt-4 flex gap-2 flex-wrap">
                    {techStack.map(tech => <button key={tech} className="text-sm text-gray-900 bg-gray-200 px-4 py-1.5 rounded-2xl">{tech}</button>)}
                </div>
                <div className="pt-3 flex gap-4">
                    <a
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer px-4 py-2 text-gray-800 hover:text-black"
                    >
                        Code
                    </a>
                    <a
                        href={demoURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer px-4 py-2 text-gray-800 hover:text-black"
                    >
                        {demoName}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;