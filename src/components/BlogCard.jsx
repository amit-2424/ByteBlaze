import { Link } from "react-router-dom";
import placeHolderImg from "../assets/404.jpg"
import { MdDeleteForever } from "react-icons/md";
import { getBlogs, saveBlog } from "../Utils";


const BlogCard = ({ blog, deletable, handleDelete }) => {
    const { id, title, description, published_at, cover_image } = blog;


    return (
        <div className="relative">
            <Link
                to={`/blog/${id}`}
                className="max-w-sm mx-auto group hover:scale-105 hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50">

                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500" src={cover_image || placeHolderImg} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600 text-gray-400 dark:text-gray-600 text-gray-400 dark:text-gray-600 text-gray-400 dark:text-gray-600">{new Date(published_at).toDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {deletable && <div onClick={() => handleDelete(id)} className="absolute duration-100 hover:scale-105 -top-4 -right-4 bg-primary opacity-90 cursor-pointer hover:opacity-50 rounded-full p-2"><MdDeleteForever className="text-xl text-secondary" /></div>}
        </div>
    );
};

export default BlogCard;