import { useState } from "react";

export default function NavBar() {
    const [signedIn, setSignedIn] = useState(false);

    return (
       <div className="bg-white shadow-sm px-4 md:px-8 py-4 flex items-center justify-between">

        <span className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
         Bangladesh 2.0
        </span>
         
         <div>
            <button onClick={() => setSignedIn(!signedIn)}
            className="border border-teal-700 text-teal-700 px-4 md:px-5 py-1.5 rounded text-sm font-medium hover:bg-teal-700 hover:text-white transition-colors duration-200"
            >
                {signedIn ? "Sign Out" : "Sign In"}
            </button>
         </div>

       </div>
    );
}