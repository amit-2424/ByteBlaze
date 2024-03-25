import { useLoaderData } from "react-router-dom";
import placeHolderImg from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";



const Content = () => {
    const blog = useLoaderData();
    const { title, cover_image, tags,body_html,url } = blog;
    return (
        <div
            className="mx-auto group border border-opacity-30 p-2 hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50">

            <img role="presentation" className="object-cover w-full rounded h-full bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500" src={cover_image || placeHolderImg} />
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400    dark:border-gray-600">
                {
                    tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">#{tag}</a>)
                }

            </div>
            <div className="p-6 space-y-2">
                <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                <div>
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                </div>
            </div>
        </div>
    );
};

export default Content;