

interface NavBarProps{
    title:string,
    name:string,
    resume:string,
}


const NavBar = (props:NavBarProps) => {
    return (
        <nav className="bg-white shadow-lg  px-6 py-4">
            <div className="max-w-7xl mx-auto px-4 align-middle">
                <div className="flex justify-between h-16 align-middle">
                    <div className="flex items-center justify-between">
                        <a href="/home" className="flex-shrink-0 text-2xl font-bold text-gray-900">{props.title}</a>
                        <div className="hidden md:flex space-x-8 ml-10">
                            <a href="/home" className="text-gray-900 hover:text-blue-600">Home</a>
                            <a href="/workexperience" className="text-gray-900 hover:text-blue-600">Work Experience</a>
                            <a href="/projects" className="text-gray-900 hover:text-blue-600">Projects</a>
                            <a href="/contact" className="text-gray-900 hover:text-blue-600">Contact</a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a href={props.resume} className="text-gray-900 hover:text-blue-600">Resume</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button id="menu-toggle" className="text-gray-900 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;