const SkillsCard = ({title, skills}) => {
    return (
        <div className="w-62 bg-white border-2 border-gray-200 flex flex-col p-8">
            <div className="text-2xl font-medium pb-4">{title}</div>
            <ul style={{ listStyleType: "square" }} className="list-inside space-y-3">
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    )
}

export default SkillsCard;