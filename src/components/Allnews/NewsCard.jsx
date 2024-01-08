
const NewsCard = ({news}) => {


    return (
        <div className="shadow-2xl rounded-md px-5 py-4">
           <h1 className="mb-4">{news.title}</h1>
           <p>{news.description}</p>
           <p>comment <span>{news.comment_count}</span></p>
           <button className=" bg-black text-white p-4 rounded-md mt-4">keep reading</button>
        </div>
    );
};

export default NewsCard;
