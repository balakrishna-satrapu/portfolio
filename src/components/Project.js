import ProjectCard from "./ProjectCard";

const Project = () => {
    return (
        <div id="projects" className="scroll-mt-16">
            <div className="text-4xl font-medium text-center mt-8">Projects</div>
            <div className="flex justify-center gap-15 flex-wrap px-10 py-8">
                <ProjectCard 
                    code="https://github.com/balakrishna-satrapu/Food-Delivery-App-Cravely" 
                    demoURL="https://food-delivery-app-cravely.vercel.app"
                    demoName="Live Demo"
                    name="Food Delivery App" 
                    description="A responsive food delivery frontend application using React, Redux, and Tailwind CSS while integrating mock data from Swiggy APIs." 
                    techStack={["React.js", "Redux", "Tailwind CSS", "Parcel"]}/>
                <ProjectCard 
                    code="https://github.com/balakrishna-satrapu/devConnect-web" 
                    demoURL="https://dev-connect-web-hazel.vercel.app/" 
                    demoName="Live Demo"
                    name="Social Media App" 
                    description="A full-stack Social Media application with user authentication. Developed using React and Tailwind CSS, Node.js, Express.js, and MongoDB." 
                    techStack={["React.js", "Redux", "Node.js", "Express", "Vite"]}/>
                <ProjectCard 
                    code="https://github.com/balakrishna-satrapu/Character-Recognition-in-Low-Resolution-Images" 
                    demoURL="https://zenodo.org/records/15314311" 
                    demoName="Publication"
                    name="Character Recognition in Low Resolution Images" 
                    description="A machine learning-based character recognition system for low-resolution images using Alternative Collaborative Learning techniques." 
                    techStack={["CNN", "OpenCV", "TensorFlow"]}/>
            </div>
        </div>
    )
}

export default Project;