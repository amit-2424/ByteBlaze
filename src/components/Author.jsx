import { useLoaderData } from "react-router-dom";



const Author = () => {
    const blog = useLoaderData();
    
    return (
        <div>{blog.title}</div>
    );
};

export default Author;