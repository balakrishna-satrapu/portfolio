const ProjectCard = () => {
    return (
        <div className="w-84 border border-gray-300 rounded-xl">
            <div className="w-84 h-46 bg-gray-200 rounded-t-xl"></div>
            <div className="p-4">
                <div className="text-xl font-medium">Food Delivery App</div>
                <div className="pt-3">A modern Food Delivery solution with seamless checkout and inventory management.</div>
                <div className="pt-3 flex gap-2 flex-wrap">
                    <button className="text-sm text-gray-900 bg-gray-200 px-4 py-1.5 rounded-2xl mr-2">React</button>
                    <button className="text-sm text-gray-900 bg-gray-200 px-4 py-1.5 rounded-2xl mr-2">Node.js</button>
                    <button className="text-sm text-gray-900 bg-gray-200 px-4 py-1.5 rounded-2xl mr-2">Express.js</button>                </div>
                <div className="pt-3 flex gap-4">
                    <button className= "px-4 py-2 text-gray-800 hover:text-black">Code</button>
                    <button className="px-4 py-2 text-gray-800 hover:text-black">Live Demo</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;