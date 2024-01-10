import Link from "next/link";

const NewsCard = ({news}) => {


    return (
        <div className="shadow-2xl rounded-md px-5 py-4">
           <h1 className="mb-4">{news.title}</h1>
           <p>{news.description}</p>
           <p>comment <span>{news.comment_count}</span></p>
        <Link href={`/news/${news?.id}`}>
        <button className=" bg-black text-white p-4 rounded-md mt-4">keep reading</button>
        </Link>
        </div>
    );
};

export default NewsCard;
