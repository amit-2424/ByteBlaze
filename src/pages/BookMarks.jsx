import { useEffect, useState } from "react";
import { delateBlog, getBlogs } from "../Utils";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

const BookMarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, [])

    const handleDelete = (id) => {
        delateBlog(id);
        const storedBlog = getBlogs();
        setBlogs(storedBlog);
    }
    if (blogs.length < 1) return <EmptyState message="No Book Marks Available" address="/blogs" label={"Go to Blogs"}></EmptyState>

        return (
            <div className="grid justify-center grid-cols-1 gap-6 lg:max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3 p-8">
                {
                    blogs.map(blog => <BlogCard handleDelete={handleDelete} deletable="true" key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        );
};

export default BookMarks;