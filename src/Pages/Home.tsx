import {imageUrl} from "../Data/Links.ts";
import {PersonalInfo} from "../Data/Personal Info.ts";

const Home = () => {
    return (
        <div className="bg-white w-screen rounded-lg hover:bg-amber-50 transition duration-200 h-screen flex justify-center items-center">
            <div className="text-center text-black p-4 max-w-2xl m-6">
                <img
                    src={imageUrl}
                    alt="Your Name"
                    className="rounded-full mx-auto mb-4 w-70 h-60 m-6"
                />
                <h1 className="text-3xl font-bold mb-2">{PersonalInfo.Name}</h1>
                <p className="text-lg leading-relaxed">
                    Hello! I am <span className={"text-blue-300  font-bold hover:text-blue-950 transition duration-200 animate-pulse"}>{PersonalInfo.Name}</span>, {PersonalInfo.aboutme}
                </p>
            </div>
        </div>
    );
};

export default Home;
