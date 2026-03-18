const SkillsCard = () => {
    return (
        <div className="w-62 bg-white border-2 border-gray-200 flex flex-col p-8">
            <div className="text-2xl font-medium pb-4">FrontEnd</div>
            <ul style={{ listStyleType: "square" }} className="list-inside space-y-3">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
            </ul>
        </div>
    )
}

export default SkillsCard;