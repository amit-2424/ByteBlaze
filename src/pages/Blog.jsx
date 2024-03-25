import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlog } from "../Utils";


const Blog = () => {
    const [tabIndx, setTabIndx] = useState(0);
    const blog = useLoaderData();
    const { title, comments_count, reading_time_minutes, public_reactions_count, published_at } = blog;
    
    const handleBookMarks = blog =>{
        saveBlog(blog);
    }

    return (
        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
                        <p className="text-sm">{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
                    <Link onClick={() => setTabIndx(0)} rel="noopener noreferrer" to="" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndx === 0 ? "border border-b-0" : "border-b"} shadow-xl rounded-t-lg border-gray-400`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>content</span>
                    </Link>
                    <Link onClick={() => setTabIndx(1)} rel="noopener noreferrer" to={`author`} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndx === 1 ? "border border-b-0" : "border-b"} shadow-xl rounded-t-lg border-gray-400`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>author</span>
                    </Link>
                    <div onClick={()=>handleBookMarks(blog)} className="bg-primary p-3 ml-4 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden">
                        <MdBookmarkAdd className="text-2xl text-secondary" />
                    </div>
                </div>
                <Outlet></Outlet>
            </article>

        </div>
    );
};

export default Blog;