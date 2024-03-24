import { Link } from "react-router-dom";
import placeHolderImg from "../assets/404.jpg"

const BlogCard = ({ blog }) => {
    const { id, title, description, published_at, cover_image } = blog;
    return (
        <div>
            <Link
             to={`/blog/${id}`} 
             className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50">

                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500" src={cover_image || placeHolderImg} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600 text-gray-400 dark:text-gray-600 text-gray-400 dark:text-gray-600 text-gray-400 dark:text-gray-600">{new Date(published_at).toDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;