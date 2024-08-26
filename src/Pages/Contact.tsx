import {imageUrl} from "../Data/Links.ts";
import {ContactData} from "../Data/ContactData.ts";



const Contact = () => {
    const handleEmailClick = () => {
        window.location.href =('mailto:').concat(ContactData.formalemail);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full text-center">
                <img
                    src={imageUrl}
                    alt="Profile"
                    className="max-w-28 h-50 rounded-full mx-auto mb-5"
                />
                <h2 className="text-2xl font-bold mb-2">{ContactData.fullName}</h2>
                <p className="text-gray-600 mb-4">{ContactData.postion}</p>
                <div className="mb-4">
                    <p className="text-gray-700">{ContactData.phone}0</p>
                    <p className="text-gray-700">Email : {ContactData.email}</p>
                    <p className="text-gray-700">Business Email : {ContactData.formalemail}</p>
                    <p className="text-gray-700">{ContactData.address}</p>
                </div>
                <button
                    onClick={handleEmailClick}
                    className="bg-amber-200 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-full transition duration-200"
                >
                    Send Email
                </button>
            </div>
        </div>
    );
};

export default Contact;
