import './App.css';
import NavBar from "./Components/NavBar.tsx";
import { cvlink } from "./Data/Links.ts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.tsx";
import Projects from "./Pages/Projects.tsx";
import Contact from "./Pages/Contact.tsx";
import NotFound from "./Pages/NotFound.tsx";
import WorkExperience from "./Pages/WorkExperience.tsx";
import HomePage from "./Pages/HomePage.tsx";
import Footer from "./Components/Footer.tsx";


function App() {
    return (
        <>
        <Router>
            <NavBar title={"Amjad Khaliliah"} name={""} resume={cvlink} />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route index={true} element={<HomePage />} />
                <Route path="/workexperience" element={<WorkExperience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
            </Routes>
            <Footer />
        </Router>
        </>
    );
}

export default App;
