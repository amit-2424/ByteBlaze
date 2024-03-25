import toast from "react-hot-toast";

export const getBlogs = () =>{
    let blogs = [];
    const storedBlogs = localStorage.getItem("blogs");
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
}

export const saveBlog = (blog) =>{

    const blogs = getBlogs();
    const exist = blogs.find(b=> b.id == blog.id);
    if(exist){
       return toast.error("Already Exist");
    }

    blogs.push(blog);

    localStorage.setItem("blogs",JSON.stringify(blogs));
    toast.success("Blog BookMarks Successfully")

}

export const delateBlog = (id) =>{
    const blogs = getBlogs();
    const remaining = blogs.filter(blog=> blog.id !== id);
    localStorage.setItem("blogs",JSON.stringify(remaining));
    toast.success("Blog delate successfully");
}