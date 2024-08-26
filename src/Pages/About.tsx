import experiences from "../Data/WorkExpirance.ts";

function About() {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
            <div className="relative border-l-4 border-blue-500">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="mb-8 flex justify-between items-center w-full"
                    >
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                        </div>
                        <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-2 font-bold text-lg">{experience.position}</h3>
                            <p className="text-sm text-gray-600">
                                {experience.companyName} - {experience.jobType} <br/>
                                {experience.location} <br/>
                                {experience.startDate} - {experience.endDate}
                            </p>
                            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
                                {experience.responsibilities.map((responsibility, idx) => (
                                    <li key={idx}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;