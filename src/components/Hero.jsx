import { Link } from "react-router-dom";
import wave from "../assets/wave.svg";

const Hero = () => {
    return (
        <div className="hero min-h-[calc(100vh-116px)] bg-base-200 relative">
            <div className="hero-content -mt-20 text-center">
                <div className="max-w-2xl">
                    <h1 className="text-5xl font-bold">Welcome to <span className="bg-300% text-5xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/blogs" className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-primary"></span>
                            <span className="relative text-black group-hover:text-white">Read Blogs</span>
                        </Link>
                        <Link to="/bookmarks"  className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-primary"></span>
                            <span className="relative text-black group-hover:text-white">Book Marks</span>
                        </Link>
                        
                    </div>
                </div>
            </div>

            <img className="w-full absolute bottom-0" src={wave} alt="" />
        </div>
    );
};

export default Hero;