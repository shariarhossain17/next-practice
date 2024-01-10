import { useRouter } from "next/router";

const BlogsDetails = () => {

    const {query} =useRouter()
    return (
        <div>
            <h1>This is BlogsDetails : {query.id}</h1>
        </div>
    );
};

export default BlogsDetails;