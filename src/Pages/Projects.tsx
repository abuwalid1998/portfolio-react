import projects from '../Data/projects'; // Import your project data

const Projects = () => {
    return (
        <>
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <p className="text-2xl  text-center mb-12">Some of My Projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <div key={index}
                         className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <a href={project.link} className={"text-amber-500 hover:text-amber-300 transition duration-200"}>View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex items-center justify-center p-6">
            <a href={"https://github.com/abuwalid1998?tab=repositories"} className={"font-bold border rounded-full p-4 hover:bg-amber-300 transition duration-200 "}>Show All Projects</a>

        </div>
        </>
    );

};

export default Projects;
