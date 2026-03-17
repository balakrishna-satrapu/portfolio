const EducationCard = ({degree, year, institution, course, score}) => {
    return (
        <div className="border-2 border-gray-200 bg-white p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div className="text-[22px] font-medium">
                    {degree}
                </div>
                <div className="text-sm">
                    {year}
                </div>
            </div>

            <div className="text-gray-900">
                {institution}
            </div>
            <div className="flex justify-between items-center">
                <div className="">
                    {course}
                </div>
                <div className="text-sm">
                    {score}
                </div>
            </div>
        </div>
    )
}

export default EducationCard;