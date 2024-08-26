import Home from "./Home.tsx";
import WorkExperience from "./WorkExperience.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";


const HomePage = () => {
    return (

        <>
            {<Home />}
            <WorkExperience />
            <Projects />
            <Contact />
        </>
    );
};

export default HomePage;