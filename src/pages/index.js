import RootLayout from "@/Layout/RootLayout";
import Banner from "@/components/ Banner/Banner";
import NewsCard from "@/components/Allnews/NewsCard";

const HomePage = ({ allNews }) => {
  console.log(allNews);
  return (
    <>
      <Banner />

      <div className="flex justify-center gap-6 mt-20">
        {allNews.map((news) => (
         <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();
  return {
    props: {
      allNews: data,
    },
    revalidate:10,
  };
};
