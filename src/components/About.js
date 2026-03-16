const About = () => {
    return (
        <div className="flex justify-between px-12 h-[89vh] bg-gray-100 pt-6">
            <div className="w-lg">
                <div className="font-medium text-4xl pb-6">About Me</div>
                <div className="flex flex-col leading-7 gap-5">
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
                    <div className="border-2 border-gray-200 bg-white p-4 flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <div className="text-[22px] font-medium">
                                B.Tech
                            </div>
                            <div className="text-sm">
                                2021 - 2025
                            </div>
                        </div>

                        <div className="text-gray-900">
                            R.V.R & J.C College of Engineering
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="">
                                Computer Science and Engineering
                            </div>
                            <div className="text-sm">
                                7.95 cgpa
                            </div>
                        </div>
                    </div>

                    <div className="border-2 border-gray-200 bg-white p-4 flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <div className="text-[22px] font-medium">
                                Intermediate
                            </div>
                            <div className="text-sm">
                                2019 - 2021
                            </div>
                        </div>
                        <div className="text-gray-900">
                            NRI Junior College
                        </div>
                        <div className="flex justify-between items-center">
                            
                            <div className="">
                                MPC
                            </div>
                            <div className="text-sm">
                                87.5 %
                            </div>
                        </div>
                    </div>  
                    

                <div className="border-2 border-gray-200 bg-white p-4 flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <div className="text-[22px] font-medium">
                                Secondary Education
                            </div>
                            <div className="text-sm">
                                2019
                            </div>
                        </div>

                        <div className="text-gray-900">
                            Ushodaya English Medium School
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="">
                                CBSE
                            </div>
                            <div className="text-sm">
                                88.5%
                            </div>
                        </div>
                    </div>                         
                </div>
            </div>
        </div>
    )
}

export default About;