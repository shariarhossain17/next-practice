import RootLayout from "@/Layout/RootLayout";
import Banner from "@/components/ Banner/Banner";

const HomePage = ({allNews}) => {
  console.log(allNews)
  return (
    <>
      <Banner />
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

  console.log(data);
  return {
    props: {
      allNews: data,
    },
  };
};
