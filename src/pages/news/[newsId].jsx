import RootLayout from "@/Layout/RootLayout";

const NewsDetails = ({singleNews}) => {
// console.log(singleNews);

    return (
        <div>
            <h1>{singleNews.title}</h1>
        </div>
    );
};

export default NewsDetails;


NewsDetails.getLayout = function getLayout (page) {

    return <RootLayout>{page}</RootLayout>
}

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/news");
  const newses = await res.json();

  const paths = newses.map((news) => ({
    params: { newsId: String(news?.id) },
  }));


  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {

    const {params}=context

    console.log(params);
    const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
    const data = await res.json();
    return {
      props: {
        singleNews: data,
      },
    };
  };